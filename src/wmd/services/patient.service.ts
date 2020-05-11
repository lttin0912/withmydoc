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

  public patientDetails: BehaviorSubject<PatientInterface> = new BehaviorSubject(null);
  _authToken: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    private _http: HttpClient) {
      this._apiUri = environment.apiUri;
    }
  // registerPatient(payload: any) {
  //   return this._http.post<PatientInterface>(`${this._apiUri}/api/patient`, payload, {
  //     headers: new HttpHeaders()
  //         .set('Authorization', 'Bearer ' + this._authToken.getValue())
  //   });
  // }

  registerPatient(payload: any) {
    return this._http.post<PatientInterface>(`${this._apiUri}/api/patient`, payload);
  }

  getPatient() {
    return this._http.get<PatientInterface>(`${this._apiUri}/api/patient/userId`,{
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

  getUsername(): Observable<any> {
    return this._http.get(`${this._apiUri}/api/login/username`,{
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this._authToken.getValue()),
      observe: 'response'
    });

  }

  getAuthToken(authorization_code: string): Observable<any> {
    return this._http.get(`${this._apiUri}/api/login/token?authorizationCode=${authorization_code}&redirectUri=${environment.redirect_uri}`);
  }


  login(authorization_code): Observable<any> {
    const body = new HttpParams()
        .set('grant_type', 'authorization_code')
        .set('code', authorization_code)
        .set('client_id', environment.client_id)
        .set('client_secret', environment.client_secret)
        .set('redirect_uri', environment.redirect_uri);

    return this._http.post(environment.token_uri,
        body.toString(),
        {
          headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
        }
    );
  }
}
