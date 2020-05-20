import { Component, OnInit } from '@angular/core';
import { PatientRepositoryService } from 'src/wmd/services/patient-repository.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { UserConfigComponent } from './user-config/user-config.component';
import { UserService } from 'src/wmd/services/user.service';

@Component({
  selector: 'wmd-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers: [CookieService]
})
export class HeaderComponent implements OnInit {
  sortPropName: 'name' | 'id' = 'name';

  authorization_code: string;
  session_state: string;

  constructor(
    private _userService: UserService,
    private route: ActivatedRoute,
    private _cookieService: CookieService,
    private _dialogService: MatDialog) { }

  getLoginUri(): string {
    return environment.loginUri;
  }

  getLogoutUri(): string {
    return environment.logoutUri;
  }
  deleteCookies() {
    this._cookieService.delete('AUTH-TOKEN-PATIENT');
  }

  ngOnInit() {

    if (this._cookieService.get('AUTH-TOKEN-PATIENT')) {
      this._userService._authToken.next(this._cookieService.get('AUTH-TOKEN-PATIENT'));
    } else {
      this.authorization_code = this.route.snapshot.queryParamMap.get('code');
      this.route.queryParamMap.subscribe(params => {
        this.authorization_code = params.get('code');
        this.session_state = params.get('session_state');

        console.log('HeaderComponent Authorization Code: ' + this.authorization_code);
        if (this.authorization_code) {
          this._userService.login(this.authorization_code).subscribe( data => {
              console.log(data);
              this._userService._authToken.next(data.access_token);
              this._cookieService.set('AUTH-TOKEN-PATIENT', data.access_token);
          });
        }
      });
    }
  }

  showUserConfig($event): void {
    this._dialogService.open(UserConfigComponent);
    $event.stopPropagation();
    $event.preventDefault();
  }
  
}
