import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'wmd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  // TODO  change this logic to use cookies
  isLoggedIn(): boolean {
    let isLoggedIn = false;
    if (this.patientService._authToken.getValue() !== '') {
      isLoggedIn = true;
    }
    return isLoggedIn;
  }
}
