import { Component, OnInit } from '@angular/core';
import { PatientRepositoryService } from 'src/wmd/services/patient-repository.service';
import { MatDialog } from '@angular/material';
import {PatientService} from '../../services/patient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'wmd-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  sortPropName: 'name' | 'id' = 'name';

  authorization_code: string;
  session_state: string;

  constructor(
    private _patientRepositoryService: PatientRepositoryService,
    private _patientService: PatientService,
    private route: ActivatedRoute,
    private _dialogService: MatDialog) { }


  ngOnInit() {
    this.authorization_code = this.route.snapshot.queryParamMap.get('code');
    this.route.queryParamMap.subscribe(params => {
      this.authorization_code = params.get('code');
      this.session_state = params.get('session_state');

      console.log('HeaderComponent Authorization Code: ' + this.authorization_code);
      if (this.authorization_code) {
        this._patientService.login(this.authorization_code).subscribe(data => {
          console.log(
              data);

          console.log('Access Token: ' +
              data.access_token);

          // this._patientService.loginToPortal(this.session_state, this.authorization_code).subscribe( loginData => {
          //   console.log('**** Login Data: ' + loginData);
          // });
          this._patientService._authToken.next(data.access_token);
        });
      }
    });
  }
}
