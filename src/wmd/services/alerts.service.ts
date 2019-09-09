import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { ALERTS} from '../constants/mock-data/mock-data';
import {ALERT_RULES_LIST, Clients, Vitals} from '../constants/mock-data/mock-data';
import { RULE_NAMES } from '../constants/rule-names';
import { VitalDetails } from '../interfaces/vital-details';
import { spectrumEvaluationDirection } from '../constants/rule-eval-direction';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  getAlerts(): any {

    const alertsObserver = new Observable(observer => {
      setTimeout(() => {
        observer.next(ALERTS);
      }, 1000);
    });
    return alertsObserver;
  }

  getClients(): any[] {
    return Clients;
  }

  getVitals(): any {
    const vitalsObserver = new Observable(observer => {
      setTimeout(() => {
        observer.next(Vitals);
      }, 1000);
    });
    return vitalsObserver;
  }

  getAlertColumns(): string[] {
    return ['id', 'patient_name', 'severity', 'type', 'threshold_crossed', 'date_time', 'latest_comment'];
  }

  addAlertRule(alertRule: any) {
    ALERT_RULES_LIST.push(alertRule);
  }

  updateAlertRule(updatedRule: any){

    for(let i=0;i<ALERT_RULES_LIST.length;i++){

      if(ALERT_RULES_LIST[i].id === updatedRule.id && ALERT_RULES_LIST[i].parameter ===  updatedRule.parameter) {
        ALERT_RULES_LIST[i].MIN_VAL = updatedRule.MIN_VAL;
        ALERT_RULES_LIST[i].min_severity = updatedRule.min_severity;
        ALERT_RULES_LIST[i].MAX_VAL = updatedRule.MAX_VAL;
        ALERT_RULES_LIST[i].max_severity = updatedRule.max_severity;
      }

    }

  }

  getAlertRule(id: number, parameter: string): any{
    const rules = [];
    
    for(let i=0;i<ALERT_RULES_LIST.length;i++){
      if(ALERT_RULES_LIST[i].id === id && ALERT_RULES_LIST[i].parameter ===  parameter) {
        rules.push(ALERT_RULES_LIST[i]);
      }
    }

    return rules && rules.length === 1 ? rules[0] : rules;
  }

  getClientName(id: string): any {

    let client: any;
    const clients: any[] = this.getClients();
    for (let i=0 ;i<clients.length;i++) {
      if(clients[i].id === id) {
        client = clients[i];
        break;
      }
    }
    return client.firstName + ' ' + client.lastName;

  }

  getClientAlertsWithVitalsAndId(vitals: VitalDetails[], id: number): any {
    const clientRules = this.getClientRules(id);
    const output = {};
    const alerts = [];
    if (vitals && id) {
      const mapRule = (rule) => {
        // TODO: To normalize key names, for now this map is used to translate.
        const lookupPropNames = {
         'systolic-blood-pressure': 'systolic',
         'diastolic-blood-pressure': 'diastolic',
         'weight': 'weight',
         'pulse': 'pulse',
         'temp': 'temp',
         'respiratoryRate': 'respiratoryRate'
        };

        if (Array.isArray(rule)) {
          rule.forEach((rule)=> {
            // Recursion for when multiple rules set to one vital on one patient/client.
            mapRule(rule);
          });
        }

        const category = lookupPropNames[rule.parameter];

        const determineAlertsFromPatientVitals = (vital)=> {
          for (const vitalCategory in vital) {
            if (!vital.hasOwnProperty(vitalCategory)) {
              return;
            }

            if (category === vitalCategory) {
              const _alerts = this.checkVitalForAlertSeverity(
                rule, 
                vital[vitalCategory], 
                category);

              if (alerts) {
                alerts.push(_alerts);
              } 
            }
          }
        };

        vitals.forEach(determineAlertsFromPatientVitals);
      }

      const manageAlertsGroupedByCategory = (alert)=> {
        if (!output[alert.category] || (
          output[alert.category] !== 'Critical')) {
            switch (alert.type) {
              case 'Critical': 
                output[alert.category] = alert.type;
              break;
              case 'Warning':
                if (!output[alert.category]){
                  output[alert.category] = alert.type;
                }
              break;
            }
        }
      };

      // Map rules to vitals for patient.
      clientRules.forEach(mapRule);

      // Group alerts triggered, if any by category with critical overriding warning.
      alerts.filter((alert)=> !!alert).forEach(manageAlertsGroupedByCategory);
      
      return Object.keys(output).length > 0 ? output : false;
    }
  }

  getClientIdByName(firstName: string, lastName: string): string {
    console.log('*******getClientIdByName : '+firstName+' , '+lastName)
    let client: any;
    const clients: any[] = this.getClients();
    for (let i=0 ;i<clients.length;i++) {
      if(clients[i].firstName.trim() === firstName.trim() && clients[i].lastName.trim() === lastName.trim()) {
        client = clients[i];
        break;
      }
    }
    return client.id;
  }

  private getClientRules(id: number): any[] {
    return RULE_NAMES.map((ruleName) => 
      this.getAlertRule(id, ruleName)).filter((rule)=> !!rule);
  }

  private checkVitalForAlertSeverity(
    rule: any, 
    vitalValue: number, 
    category: string): any | boolean {
    const alertTriggered = {
      category,
      vitalValue,
      type: undefined
    };

    if (rule.spectrumEvaluationDirection === spectrumEvaluationDirection.LOWER) {
      if (vitalValue < rule.MIN_VAL && vitalValue > rule.MAX_VAL) {
        alertTriggered.type = rule.min_severity;
        return alertTriggered;
      }
      
      if (vitalValue < rule.MAX_VAL) {
        alertTriggered.type = rule.max_severity;

        return alertTriggered;
      }
    }
    else {
      if (vitalValue > rule.MIN_VAL && vitalValue < rule.MAX_VAL) {
        alertTriggered.type = rule.min_severity;

        return alertTriggered;
      }
      
      if (vitalValue > rule.MAX_VAL) {
        alertTriggered.type = rule.max_severity;

        return alertTriggered;
      }
    }
    
    return false;
  }
}
