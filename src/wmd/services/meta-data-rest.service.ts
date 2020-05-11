import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecordType, IInput, IUnit } from '../models/meta-data.model';
import { PatientService } from './patient.service';


@Injectable({ providedIn: 'root' })
export class MetadataRestService {
    public recordTypeResourceUrl = environment.apiUri + '/api/v0/record-type';
    public inputResourceUrl =  environment.apiUri + '/api/v0/input';
    public unitResourceUrl =  environment.apiUri + '/api/v0/unit';

    constructor(private http: HttpClient, private patientService: PatientService) {}

    getRecordTypes(): Observable<HttpResponse<IRecordType[]>> {
        return this.http.get<IRecordType[]>(this.recordTypeResourceUrl, { headers: new HttpHeaders()
            .set('Authorization', 'Bearer ' + this.patientService._authToken.getValue()), observe: 'response',  });
    }

    getRecordType(id: string): Observable<HttpResponse<IRecordType>> {
        return this.http.get<any>(`${this.recordTypeResourceUrl}/${id}`, { observe: 'response' });
    }

    getInputs(): Observable<HttpResponse<IInput[]>> {
        return this.http.get<IRecordType[]>(this.inputResourceUrl, { observe: 'response' });
    }

    getInput(id: string): Observable<HttpResponse<IInput>> {
        return this.http.get<any>(`${this.inputResourceUrl}/${id}`, { observe: 'response' });
    }

    getUnits(): Observable<HttpResponse<IUnit[]>> {
        return this.http.get<IRecordType[]>(this.unitResourceUrl, { observe: 'response' });
    }

    getUnit(id: string): Observable<HttpResponse<IUnit>> {
        return this.http.get<any>(`${this.unitResourceUrl}/${id}`, { observe: 'response' });
    }
}
