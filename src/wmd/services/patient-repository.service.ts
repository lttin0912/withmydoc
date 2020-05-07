import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AlertsService } from './alerts.service';
import { RulesService } from './rules.service';
import { PatientInterface } from '../interfaces/patient';
import { NotificationService } from './notification.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientRepositoryService {
  private _apiUri: string;

  constructor(
    private _dataAccessService: HttpClient,
    private _alertsService: AlertsService,
    private _rulesService: RulesService,
    private _notificationService: NotificationService) {
      this._apiUri = (
        document.location.href.indexOf('localhost') > -1
          ? environment.apiUri
          : 'http://40.121.210.125:8020'
      );
  }

  public patientDetails: Subject<PatientInterface> = new Subject();

  registerPatient(payload: any) : Observable<PatientInterface>  {
    return this._dataAccessService.post<PatientInterface>(`${this._apiUri}/api/patient`, payload);
  }

  getPatientByUuid(patientUuid: string) : Observable<PatientInterface>  {
    return this._dataAccessService.get<PatientInterface>(`${this._apiUri}/api/patients/${patientUuid}`);
  }

  getPatientByFirstName(patientFirstName: string) : Observable<PatientInterface[]>  {
    return this._dataAccessService.get<PatientInterface[]>(`${this._apiUri}/api/patients/firstName/${patientFirstName}`);
  }

  updatePatient(payload: PatientInterface) : Observable<PatientInterface>  {
    return this._dataAccessService.put<PatientInterface>(`${this._apiUri}/api/patient`, payload);
  }
}