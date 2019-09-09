import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {AlertsService} from '../../../../services/alerts.service';
import {AlertSessionDialogComponent} from '../alert-session-dialog/alert-session-dialog.component';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alertsList: Observable<any[]>;
  vitalsList: Observable<any[]>;
  columns: string[];

  constructor(private alertsService: AlertsService, public dialog: MatDialog) {}

  ngOnInit() {
    this.alertsList = this.alertsService.getAlerts();
    this.vitalsList = this.alertsService.getVitals();
    this.columns = this.alertsService.getAlertColumns();
  }

  getAlertBGColor(id: string, val: number, alertType: string): string{

    if(!this.alertsService.getAlertRule(Number(id), alertType )) return '';

    const minVal = this.alertsService.getAlertRule(Number(id), alertType ).MIN_VAL;
    const maxVal = this.alertsService.getAlertRule(Number(id), alertType ).MAX_VAL;

    if(val > minVal && val < maxVal) {
      return 'yellow';
    }else if ( val > maxVal) {
      return 'red';
    }else{
      return '';
    }

  }


  openDialog(vital: any) {
    this.dialog.open(AlertSessionDialogComponent, {
      height: '600px',
      width: '850px',
      data: vital
    });
  }

  getClientName(id: string): any {
    return this.alertsService.getClientName(id);
  }

}
