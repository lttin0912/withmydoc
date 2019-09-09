import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientInterface } from '../interfaces/patient';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  // ToDo: Replace with environment variable once deployment pipeline is prepared for it.
  private _apiUri: string;

  public patientDetails: Subject<PatientInterface> = new Subject();

  constructor(
    private _http: HttpClient) {
      this._apiUri = (
        document.location.href.indexOf('localhost') > -1
          ? environment.apiUri
          : 'http://40.121.210.125:8020'
      );
    }

  registerPatient(payload: any) {
    return this._http.post<PatientInterface>(`${this._apiUri}/api/patient`, payload);
  }

  getPatientByUuid(patientUuid: string) {
    return this._http.get<PatientInterface>(`${this._apiUri}/api/patients/${patientUuid}`);
  }

  getPatientByFirstName(patientFirstName: string) {
    return this._http.get<PatientInterface[]>(`${this._apiUri}/api/patients/firstName/${patientFirstName}`);
  }

  updatePatient(payload: PatientInterface) {
    return this._http.put<PatientInterface>(`${this._apiUri}/api/patient`, payload);
  }
}
