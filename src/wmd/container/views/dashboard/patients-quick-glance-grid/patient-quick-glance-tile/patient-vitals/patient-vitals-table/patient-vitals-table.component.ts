import { Component, OnInit, Input } from '@angular/core';
import { VitalDetails } from '../../../../../../../interfaces/vital-details';
import { AlertsService } from 'src/wmd/services/alerts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wmd-patient-vitals-table',
  templateUrl: './patient-vitals-table.component.html',
  styleUrls: ['./patient-vitals-table.component.scss']
})
export class PatientVitalsTableComponent {
  @Input()
  vital: VitalDetails;
}
