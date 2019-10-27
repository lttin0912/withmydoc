import { Component, OnInit } from '@angular/core';
import { PatientRepositoryService } from 'src/wmd/services/patient-repository.service';
import { MatDialog } from '@angular/material';
import { UserConfigComponent } from './user-config/user-config.component';

@Component({
  selector: 'wmd-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  sortPropName: 'name' | 'id' = 'name';
  
  constructor(
    private _patientRepositoryService: PatientRepositoryService,
    private _dialogService: MatDialog) { }

  ngOnInit() {
  }
}
