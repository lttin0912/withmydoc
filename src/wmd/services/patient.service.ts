import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { PatientInterface } from '../interfaces/patient';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  // ToDo: Replace with environment variable once deployment pipeline is prepared for it.
  private _apiUri: string;

  public patientDetails: Subject<PatientInterface> = new Subject();
  _authToken: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    private _http: HttpClient) {
      this._apiUri = (
        document.location.href.indexOf('localhost') > -1
          ? environment.apiUri
          : 'https://api.withmydoc.com'
      );
    }
  registerPatient(payload: any) {
    return this._http.post<PatientInterface>(`${this._apiUri}/api/patient`, payload, {
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this._authToken.getValue())
    });
  }

  getPatientByUuid(patientUuid: string) {
    return this._http.get<PatientInterface>(`${this._apiUri}/api/patients/${patientUuid}`,{
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this._authToken.getValue())
    });
  }

  getPatientByFirstName(patientFirstName: string) {
    return this._http.get<PatientInterface[]>(`${this._apiUri}/api/patients/firstName/${patientFirstName}`,{
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this._authToken.getValue())
    });
  }

  updatePatient(payload: PatientInterface) {
    return this._http.put<PatientInterface>(`${this._apiUri}/api/patient`, payload,{
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this._authToken.getValue())
    });
  }

  getRoles() {

  }

  login(authorization_code): Observable<any> {
    const body = new HttpParams()
        .set('grant_type', 'authorization_code')
        .set('code', authorization_code)
        .set('client_id', 'withmydoc')
        .set('client_secret', '133c1ea8-c440-45c5-b02b-6329c59de3f9')
        .set('redirect_uri', 'https://patient.withmydoc.com');

    return this._http.post('https://sso.test.aptitud.io/auth/realms/aptitudio/protocol/openid-connect/token',
        body.toString(),
        {
          headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
        }
    );
  }
}
