import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IRecord } from '../models/record.model';
import { environment } from 'src/environments/environment';
import { MockHttpResponse } from '../interfaces/common/mock-http-response.interface';
import { createRequestOption } from '../utilities/request-util';
import { IRecordStatistic } from '../models/record-statistics.model';
import { IRecordsPage } from '../models/record-query.model';
import { UserService } from './user.service';


@Injectable({ providedIn: 'root' })
export class RecordService {
  public resourceUrl = environment.apiUri + '/api/v0/records';
  private authToken: string;

  constructor(private http: HttpClient, private userService: UserService) {
    this.authToken = this.userService._authToken.getValue();
  } 

  get headers() {
     return {
       headers: new HttpHeaders()
         .set(
           'Authorization', 'Bearer ' + this.authToken
         )
     };
  }

  getLatestRecords(patientId: string): Observable<IRecord[]> {
    return this.http.get<IRecord[]>(`${environment.apiUri}/api/v0/patient/${patientId}/latest`, this.headers);
  }

  query(patientId: string, req?: any): Observable<IRecordsPage> {
    const options = createRequestOption(req);
    return this.http.get<IRecordsPage>(this.resourceUrl + '/patient/' + patientId + '?' + options, this.headers);
  }

  getStatistics(patientId: string, req: any): Observable<IRecordStatistic> {
    const options = createRequestOption(req);
    return this.http.get<IRecordStatistic>(this.resourceUrl+'/'+req.type+'/statistics/patient/'+patientId+'?'+options, this.headers);
  }
}
