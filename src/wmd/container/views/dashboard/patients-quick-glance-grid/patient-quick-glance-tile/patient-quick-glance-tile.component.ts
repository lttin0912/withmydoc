import { Component, Input } from '@angular/core';
import { Client } from 'src/wmd/interfaces/clients';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { TEMPERATURE, RESPIRATORY, WEIGHT, HEART_RATE } from '../../../../../constants/units';
import { PatientVitalsComponent } from './patient-vitals/patient-vitals.component';
import { AlertsService } from 'src/wmd/services/alerts.service';
import { NotesDialogComponent } from 'src/wmd/common/notes-dialog/notes-dialog.component';
import { PatientRepositoryService } from 'src/wmd/services/patient-repository.service';
import { VitalDetails } from 'src/wmd/interfaces/vital-details';

@Component({
  selector: 'wmd-patient-quick-glance-tile',
  templateUrl: './patient-quick-glance-tile.component.html',
  styleUrls: ['./patient-quick-glance-tile.component.scss']
})
export class PatientQuickGlanceTileComponent {
  @Input() 
  clientAndVitals: Client;

  alerts: any;

  units = {
    TEMPERATURE,
    RESPIRATORY,
    WEIGHT,
    HEART_RATE
  };
 
  isDisabled = false;
  
  constructor(
    private bottomSheet: MatBottomSheet, 
    private alertsService: AlertsService,
    private dialog: MatDialog,
    private patientRepository: PatientRepositoryService) { }

    call($event) {
      window.location.href = 'tel:18005555555';
      $event.stopPropagation();
      $event.preventDefault();
    }

    email($event) {
      window.location.href= 'mailto:info@cloudgearnetworks.com';
      $event.stopPropagation();
      $event.preventDefault();
    }

    message($event) {
     this.email($event);
     $event.preventDefault();
    }

    getIndicatorClass(alertType: string, classNames: string): any {
      switch(alertType) {
        case 'Critical': return classNames + ' wmd-status-critical';
        case 'Warning': return classNames + ' wmd-status-warning';
      }
  
      return false;
    }
  
    openPatientDetails($event): void {
      if (this.clientAndVitals.vitals) {
        this.bottomSheet.open(PatientVitalsComponent, {
          data: this.clientAndVitals.vitals.sort(this.sortVitalByMostRecentDate)
        });
      }

      $event.stopPropagation();
      $event.preventDefault();
    }

    sortVitalByMostRecentDate = (
      vitalA: VitalDetails, 
      vitalB: VitalDetails): number => {
        return vitalA.dateTime < vitalB.dateTime ? 1 : -1;
    }

    openDialog(vital?: VitalDetails) {
      if (vital || Array.isArray(this.clientAndVitals.vitals)) {
        this.dialog.open(NotesDialogComponent, {
          height: '500px',
          width: '850px',
          data: vital || this.clientAndVitals.vitals.sort(this.sortVitalByMostRecentDate)[0]
        });
      }
    }

  ngOnInit(): void {
    this.alerts = this.alertsService.getClientAlertsWithVitalsAndId(
      this.clientAndVitals.vitals, 
      this.clientAndVitals.id);
  }
}
