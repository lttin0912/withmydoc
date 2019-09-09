import { Injectable } from '@angular/core';
import * as data  from '../constants/mock-data/mock-data';
import { BehaviorSubject } from 'rxjs';

/**
 * @description Stubbed data repository which mimics the async behavior we will have when connected to API.
 *              This comes in handy not to break the app once its hooked up to rest source, starting out asynchronously.
 */
@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private delayedObservable = (data) => new Promise((resolve)=> 
    setTimeout(()=> resolve(new BehaviorSubject(data)), 50)
  );
  
  getClients = ()=> this.delayedObservable(data.Clients);
  
  getClientVitals = () => this.delayedObservable(data.Vitals);
  
  getAlerts = () => this.delayedObservable(data.ALERTS);
  
  getRules = () => this.delayedObservable(data.ALERT_RULES_LIST);
}
