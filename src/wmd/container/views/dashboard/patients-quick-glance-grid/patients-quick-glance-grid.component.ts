import { Component, OnInit, OnDestroy } from '@angular/core';
import { ViewportSizeService } from 'src/wmd/services/viewport-size.service';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';
import { DataAccessService } from 'src/wmd/services/data-access.service';
import { Client } from 'src/wmd/interfaces/clients';
import { VitalDetails } from 'src/wmd/interfaces/vital-details';
import { PatientRepositoryService } from 'src/wmd/services/patient-repository.service';

@Component({
  selector: 'wmd-patients-quick-glance-grid',
  templateUrl: './patients-quick-glance-grid.component.html',
  styleUrls: ['./patients-quick-glance-grid.component.css']
})
export class PatientsQuickGlanceGridComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  clients: BehaviorSubject<Client[]>;

  vitals: BehaviorSubject<VitalDetails[]>;

  clientMonitoringDetails: Subject<any> = new Subject();
  
  panelOpenState = false;
  
  mobile: boolean;
  
  constructor(
    public viewportSize: ViewportSizeService, 
    public dataAccess: DataAccessService,
    private _patientRepositoryService: PatientRepositoryService
  ) {
  }

  watchViewportSize(viewportSize): void {
    this.subscriptions.push(
      viewportSize.watch().subscribe((screensize)=> {
      if (
           screensize.breakpoints[viewportSize.breakpoints.XSmall] 
        || screensize.breakpoints[viewportSize.breakpoints.Small]
        || screensize.breakpoints[viewportSize.breakpoints.Medium]) {
        this.mobile = true;
      }
      else {
        this.mobile = false;
      }
    }));
  }

  connectToPatientVitals(): void {
    this.subscriptions.push(
      this._patientRepositoryService.visiblePatients.subscribe((patientsWithVitals: Client[])=> {
        this.clientMonitoringDetails.next(patientsWithVitals);
        // 
    }));
  }

  ngOnInit(): void {
    this.watchViewportSize(this.viewportSize);
    this.connectToPatientVitals();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription)=> subscription.unsubscribe());
  }
}
