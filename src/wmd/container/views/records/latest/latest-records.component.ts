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

  patientId: string;
  records: IRecord[];
  loading = false;

  constructor(private _patientService: PatientService,
              private recordService: RecordService) {        
  }

  ngOnInit() {
    if(!this.patientId) {
      this._patientService.patientDetails.asObservable().subscribe(patientDetails => {
        if(!patientDetails) {
          this._patientService.getPatient().subscribe(patientDetails => {
            this.patientId = patientDetails.uuid;
            this._patientService.patientDetails.next(patientDetails);
            this.refresh();
          });
        }
        else{
          this.patientId = patientDetails.uuid;
          this.refresh();
        }
      });
    }
    else
      this.refresh();
  }

  public refresh() {
    this.loading = true;
    this.recordService.getLatestRecords(this.patientId).subscribe(resp => {
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
