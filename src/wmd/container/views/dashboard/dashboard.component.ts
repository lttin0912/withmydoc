import { Component} from '@angular/core';
import { profileTileData } from '../../../constants/profile-tile-data';
import { UserService } from 'src/wmd/services/user.service';

@Component({
  selector: 'wmd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  profileTiles = profileTileData;

  constructor(private userService: UserService) { }

  navigateTo(path: string): void {
  }

  // TODO  change this logic to use cookies
  isLoggedIn(): boolean {
    let isLoggedIn = false;
    if (this.userService._authToken.getValue() !== '') {
      isLoggedIn = true;
    }
    return isLoggedIn;
  }
}
