import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  patientVitalAlerts: {[prop: string]: string | void } | {} = new BehaviorSubject({});
  constructor() { }
}
