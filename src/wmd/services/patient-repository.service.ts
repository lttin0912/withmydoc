import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, of, Observable } from 'rxjs';
import { Client } from '../interfaces/clients';
import { VitalDetails } from '../interfaces/vital-details';
import { DataAccessService } from './data-access.service';
import { AlertsService } from './alerts.service';

@Injectable({
  providedIn: 'root'
})
export class PatientRepositoryService {
  visiblePatients: Subject<Client[]> = new Subject();
  
  private _patients: any = [];
  
  private _vitals: any[];
  
  private _allPatientsVithVitals: any[];

  patientNamesAndIds: { value: number, name: string }[];

  constructor(
    public dataAccessService: DataAccessService,
    public alertsService: AlertsService) {
    // Initialize the svc with resulting in joined collection of patients-> vitals = patient.vitals on patient.id;
    this.getPatientsWithVitals();
  }

  getPatientNamesAndIds(): void {
    console.log({
      patients: this._patients
    });

    this.patientNamesAndIds = this._patients.map((client: Client)=> {
      return {
          name: client.firstName + ' ' + client.lastName,
          value: client.id
        };
     });
  }

  getPatientsWithVitals() {
    this.dataAccessService.getClientVitals().then((vitals: BehaviorSubject<VitalDetails[]>) => {
      vitals.subscribe((vitals) => {
        this._vitals = vitals;
        this.mergeClientVitals(this._patients, this._vitals);
      });
    });

    this.dataAccessService.getClients().then((clients: BehaviorSubject<Client[]>) => {
      clients.subscribe((clients) => {
        this._patients = clients;
        this.mergeClientVitals(this._patients, this._vitals);
        this.getPatientNamesAndIds();
      });
    });
  }

  sortPatients(sortType: 'name' | 'id' = 'name'): void {
    const doSort = (
      aVal: number | string | boolean,
      bVal: number | string | boolean): number => aVal > bVal ? 1 : -1;

    if (this._allPatientsVithVitals) {
      this.visiblePatients.next(
        this._allPatientsVithVitals.sort((patientA: Client, patientB: Client) => {
          switch (sortType) {
            case 'id': return doSort(patientA.id, patientB.id);
            // Name falls through to default.
            case 'name':
            default: return doSort(patientA.lastName, patientB.lastName);
          }
        }));
    }
  }

  filterPatientsWithAlerts(show = false): void {
    const patientIdsWithAlerts = [];

    this._allPatientsVithVitals.filter((patientWithVitals: Client) => {
      patientWithVitals.vitals.forEach((vitalWithId) => {
        if (show && this.alertsService.getClientAlertsWithVitalsAndId(patientWithVitals.vitals, vitalWithId.id)) {
          patientIdsWithAlerts.push(vitalWithId.id);
        } 
        else if (!this.alertsService.getClientAlertsWithVitalsAndId(patientWithVitals.vitals, vitalWithId.id)) {
            patientIdsWithAlerts.push(vitalWithId.id);
        }
      });
    });

    this.visiblePatients.next(this._allPatientsVithVitals.filter((patient)=> patientIdsWithAlerts.includes(patient.id)));
  }

  // WIP.
  filterPatientsWithAlertsByAlertTypes(typesToShow: string[]): void {
    const patientIdsWithAlerts = [];
    if (!typesToShow) this.visiblePatients.next([]);
    this._allPatientsVithVitals.forEach((patientWithVitals: Client) => {
      patientWithVitals.vitals.forEach((vitalWithId) => {
        const alertsTriggeredByUserVitals = this.alertsService.getClientAlertsWithVitalsAndId(patientWithVitals.vitals, vitalWithId.id);
        if (alertsTriggeredByUserVitals) {
          for (const alertStatusType in alertsTriggeredByUserVitals) {
            if (!alertStatusType.hasOwnProperty(alertStatusType)) {
              return;
            }
            
            if (typesToShow.includes(alertsTriggeredByUserVitals[alertStatusType].toLowerCase())) {
              patientIdsWithAlerts.push(vitalWithId.id);
            }
          }
        } 
        else if (!alertsTriggeredByUserVitals) {
            patientIdsWithAlerts.push(vitalWithId.id);
        }
      });
    });

    this.visiblePatients.next(
      this._allPatientsVithVitals.filter((patient)=> patientIdsWithAlerts.includes(patient.id)));
  }

  filterPatientsByNameOrId(nameOrId: string | number): void {
    this.visiblePatients.next(this._allPatientsVithVitals.filter((patientVitals) => {
      if (patientVitals.id.toString().indexOf(nameOrId.toString()) > -1) {
        return true;
      }

      if ((patientVitals.firstName.toLowerCase()
        + patientVitals.lastName.toLowerCase()).indexOf(nameOrId.toString().toLowerCase()) > -1) {
        return true;
      }
    }));
  }

  viewAllPatients(): void {
    this.visiblePatients.next(this._allPatientsVithVitals);
  }

  mergeClientVitals(clients: Client[], vitals: VitalDetails[]): Client[] | void {
    const patientsVitals = clients.map((client: Client): Client => {
      const matchingVitalRecords = vitals.filter((vital: VitalDetails) => vital.id === client.id);

      if (matchingVitalRecords) {
        // Add vitals accumulated matching id of patient.
        client.vitals = matchingVitalRecords;
      }

      return client;
    }).sort((a, b) => {
      // Initial sort done here. 
      return a.lastName > b.lastName ? 1 : -1
    });



    // Update collection.
    this.visiblePatients.next(patientsVitals);

    // Update cache.
    this._allPatientsVithVitals = patientsVitals;
  }
}
