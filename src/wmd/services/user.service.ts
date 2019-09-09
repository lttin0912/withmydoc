import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _route: ActivatedRoute) {
    this._route.children[0].params.subscribe(
      ({ uuid, firstName }: { [prop: string]: string}) => {
      this.uuid = uuid;
      this.firstName = firstName;
    });
  }

  firstName: string = 'Nicholas';

  uuid: string;
}
