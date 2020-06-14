import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { PatientInterface } from '../interfaces/patient';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  // ToDo: Replace with environment variable once deployment pipeline is prepared for it.
  private _apiUri: string;
  private authToken: string;
  public patientDetails: BehaviorSubject<PatientInterface> = new BehaviorSubject(null);

  constructor(
    private _http: HttpClient,
    private userService: UserService) {
      this._apiUri = environment.apiUri;
      this.authToken = userService._authToken.getValue();
    }
  // registerPatient(payload: any) {
  //   return this._http.post<PatientInterface>(`${this._apiUri}/api/patient`, payload, {
  //     headers: new HttpHeaders()
  //         .set('Authorization', 'Bearer ' + this._authToken.getValue())
  //   });
  // }

  registerPatient(payload: any) {
    return this._http.post<PatientInterface>(`${this._apiUri}/api/patient`, payload, {
        headers: new HttpHeaders()
               .set('Authorization', 'Bearer ' + this.authToken)
        });
  }

  getPatient() {
    return this._http.get<PatientInterface>(`${this._apiUri}/api/patient/userId`,{
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.authToken)
    });
  }

  getPatientByUuid(patientUuid: string) {
    return this._http.get<PatientInterface>(`${this._apiUri}/api/patients/${patientUuid}`,{
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.authToken)
    });
  }

  getPatientByFirstName(patientFirstName: string) {
    return this._http.get<PatientInterface[]>(`${this._apiUri}/api/patients/firstName/${patientFirstName}`,{
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.authToken)
    });
  }

  updatePatient(payload: PatientInterface) {
    return this._http.put<PatientInterface>(`${this._apiUri}/api/patient`, payload,{
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.authToken)
    });
  }

  getUsername(): Observable<any> {
    return this._http.get(`${this._apiUri}/api/login/username`,{
      headers: new HttpHeaders()
          .set('Authorization', 'Bearer ' + this.authToken),
      observe: 'response'
    });
  }
}
