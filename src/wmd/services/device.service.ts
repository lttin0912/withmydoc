import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {DeviceType, IDevice} from '../models/device.model';
import {createRequestOption} from '../common/utils/request-utils';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class DeviceService {
    public resourceUrl = environment.apiUri + '/api/device';

    public deviceChanged = new EventEmitter();

    public resourceUrl_devices = environment.apiUri + '/api/devices/owner';

    constructor(private http: HttpClient) {}

    query(auth_token: string, req?: any): Observable<HttpResponse<IDevice[]>> {
        const options = createRequestOption(req);

        console.log('Inside query device.');

        return this.http.get<IDevice[]>(this.resourceUrl_devices, { params: options,
            headers: new HttpHeaders()
                .set('Authorization', 'Bearer ' + auth_token), observe: 'response' });
    }

    startConnect(auth_token: string, type?: DeviceType): Observable<HttpResponse<any>> {
        const req = { type };
        return this.http.post<any>(`${this.resourceUrl}/add/start`, req, {headers: new HttpHeaders()
                .set('Authorization', 'Bearer ' + auth_token), observe: 'response' });
    }

    handleDeviceConnect(auth_token: string, code: string, type?: DeviceType): Observable<HttpResponse<any>> {
        return this.http.get<any>(`${this.resourceUrl}/connect-device/ihealth?code=${code}`, {
            headers: new HttpHeaders()
                .set('Authorization', 'Bearer ' + auth_token), observe: 'response' });
    }
    completeConnect(auth_token: string, type?: DeviceType, parameters?: any): Observable<HttpResponse<any>> {
        const req = { type, parameters };
        return this.http.post<IDevice>(`${this.resourceUrl}/add/complete`, req, { headers: new HttpHeaders()
                .set('Authorization', 'Bearer ' + auth_token), observe: 'response' });
    }

    disconnect(auth_token: string, device?: IDevice): Observable<HttpResponse<any>> {
        return this.http.post<any>(`${this.resourceUrl}/${device.uuid}/disconnect`, {}, {headers: new HttpHeaders()
                .set('Authorization', 'Bearer ' + auth_token), observe: 'response' });
    }

    test(device?: IDevice): Observable<HttpResponse<any>> {
        return this.http.post<any>(`${this.resourceUrl}/${device.uuid}/test`, {}, { observe: 'response' });
    }

    download(device?: IDevice): Observable<HttpResponse<any>> {
        return this.http.post<any>(`${this.resourceUrl}/${device.uuid}/download`, {}, { observe: 'response' });
    }
}
