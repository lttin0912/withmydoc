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

  sort($event): void {
    this._patientRepositoryService.sortPatients($event.value);
  }

  filter($event): void {
    if ($event.target && $event.target.value && $event.target.value.replace(' ', '')) {
        this._patientRepositoryService.filterPatientsByNameOrId($event.target.value);
    }
    else {
      this.reset();
    }
  }

  showPatientsWithAlerts($event): void {
    if ($event && $event.checked) {
      this._patientRepositoryService.filterPatientsWithAlerts(true);
    }
    else {
      this._patientRepositoryService.filterPatientsWithAlerts(false);
    }
  }

  reset(): void {
    this._patientRepositoryService.viewAllPatients();
  }

  showUserConfig($event): void {
    this._dialogService.open(UserConfigComponent);
    $event.stopPropagation();
    $event.preventDefault();
  }

  ngOnInit() {
  }
}
