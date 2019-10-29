import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {DeviceType, IDevice} from '../models/device.model';
import {createRequestOption} from '../common/utils/request-utils';


@Injectable({ providedIn: 'root' })
export class DeviceService {
    public resourceUrl = 'https://api.withmydoc.com/api/device';

    public resourceUrl_devices = 'https://portal.test.aptitud.io/aptitudio-ms-devices/api/devices';

    constructor(private http: HttpClient) {}

    query(auth_token: string, req?: any): Observable<HttpResponse<IDevice[]>> {
        const options = createRequestOption(req);

        return this.http.get<IDevice[]>(this.resourceUrl_devices, { params: options,
            headers: new HttpHeaders()
                .set('Authorization', 'Bearer ' + auth_token), observe: 'response' });
    }

    startConnect(auth_token: string, type?: DeviceType): Observable<HttpResponse<any>> {
        const req = { type };
        return this.http.post<any>(`${this.resourceUrl}/add/start`, req, {headers: new HttpHeaders()
                .set('Authorization', 'Bearer ' + auth_token), observe: 'response' });
    }

    handleDeviceConnect(auth_token: string, type?: DeviceType, parameters?: any): Observable<HttpResponse<any>> {
        return this.http.get<any>(`https://api.withmydoc.com/connect-device/ihealth`, {
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
