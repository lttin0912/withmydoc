import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _authToken: BehaviorSubject<string> = new BehaviorSubject('');
  
  constructor(private _route: ActivatedRoute,
              private _http: HttpClient) {
/*     this._route.children[0].params.subscribe(
      ({ uuid, firstName }: { [prop: string]: string}) => {
      this.uuid = uuid;
      this.firstName = firstName;
    }); */
  }

  firstName: string = 'Nicholas';

  uuid: string;

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

  isAuthenticated() {
    return this._authToken.getValue() !== '';
  }
}
