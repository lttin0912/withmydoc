import { Component, OnInit } from '@angular/core';
import { PatientRepositoryService } from 'src/wmd/services/patient-repository.service';

@Component({
  selector: 'wmd-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {
  constructor(public patientRepositoryService: PatientRepositoryService) {}
  ngOnInit() {}
}
