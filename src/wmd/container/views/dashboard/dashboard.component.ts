import { Component} from '@angular/core';
import {PatientService} from '../../../services/patient.service';
import { profileTileData } from '../../../constants/profile-tile-data';

@Component({
  selector: 'wmd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  profileTiles = profileTileData;

  constructor(private patientService: PatientService) { }

  navigateTo(path: string): void {
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
