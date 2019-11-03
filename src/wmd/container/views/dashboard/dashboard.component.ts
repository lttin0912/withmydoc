import { Component } from '@angular/core';
import { profileTileData } from '../../../constants/profile-tile-data';

@Component({
  selector: 'wmd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  profileTiles = profileTileData;
  constructor() { }

  navigateTo(path: string): void {
  }
}
