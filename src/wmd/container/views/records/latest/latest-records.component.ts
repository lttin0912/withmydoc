import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';
import { IRecord } from 'src/wmd/models/record.model';
import { RecordService } from 'src/wmd/services/records.service';
import { PatientService } from 'src/wmd/services/patient.service';
import { PatientInterface } from 'src/wmd/interfaces/patient';

@Component({
  selector: 'wmd-latest-records',
  templateUrl: './latest-records.component.html'
})
export class LatestRecordsComponent implements OnInit {

  patientDetails: PatientInterface;
  records: IRecord[];
  loading = false;

  constructor(private _patientService: PatientService,
              private recordService: RecordService) {}

  ngOnInit() {
    this._patientService.patientDetails.asObservable().subscribe(patientDetails => {
      if(!patientDetails) {
        this._patientService.getPatient().subscribe(patientDetails => {
          this.patientDetails = patientDetails;
          this._patientService.patientDetails.next(patientDetails);
          this.refresh();
        });
      }
    });
  }

  public refresh() {
    this.loading = true;
    this.recordService.getLatestRecords(this.patientDetails.uuid).subscribe(resp => {
      this.records = resp;
      this.autoRefresh();
      this.loading = false;
    });
  }

  private autoRefresh() {
    setTimeout(() => {
      this.refresh();
    }, 30000);
  }
}
