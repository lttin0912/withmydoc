import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ALERT_RULES_LIST } from '../constants/mock-data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  getAlertRules(): any {

    const alertRules = new Observable(observer => {
      setTimeout(() => {
        observer.next(ALERT_RULES_LIST);
      }, 1000);
    });
    return alertRules;
  }

  getColumns(): string[] {
    return ['name', 'age', 'species', 'occupation'];
  }

  getAlertColumns(): string[] {
    return ['name', 'parameterLabel', 'MIN_VAL', 'MAX_VAL'];
  }
}
