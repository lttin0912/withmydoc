import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../../../services/notification.service';
import {FormControl, NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AlertsService} from '../../../../services/alerts.service';
import {MatDialog, MatOption, MatSelectChange} from '@angular/material';
import {AlertConfigDialogComponent} from '../alert-config-dialog/alert-config-dialog.component';

@Component({
  selector: 'wmd-alert-config',
  templateUrl: './alert-config.component.html',
  styleUrls: ['./alert-config.component.scss']
})
export class AlertConfigComponent implements OnInit {

  patientFormControl = new FormControl();

  clients: any[];

  newrule: any;

  filteredOptions: Observable<string[]>;

  alertRules: Observable<any[]>;
  alertColumns: string[];
  disableNewAlertButton = false;
  showNewAlertForm = false;


  constructor(private notificationService: NotificationService, private alertsService: AlertsService, public dialog: MatDialog) {}

  ngOnInit() {

    this.alertRules = this.notificationService.getAlertRules();
    this.alertColumns = this.notificationService.getAlertColumns();
    this.clients = this.alertsService.getClients();
    this.filteredOptions = this.patientFormControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.clients.filter(option => option.firstName.toLowerCase().includes(filterValue) ||
                                                    option.lastName.toLowerCase().includes(filterValue));
  }

  onNewAlertRule(){
    this.disableNewAlertButton = true;
    this.showNewAlertForm = true;
    this.newrule = {
      id: '',
      parameterLabel: '',
      parameter: '',
      MIN_VAL: '',
      MAX_VAL: '',
      min_severity: '',
      max_severity: ''
    };
  }

  parameterChanged(event) {
    this.newrule.parameterLabel = event.source.selected._element.nativeElement.innerText.trim()
  }

  onSaveAlert(form: NgForm) {
    console.log(form);

    const name: string[] = this.patientFormControl.value.split(' ');

    this.newrule.id = this.alertsService.getClientIdByName(name[0], name[1]);
    this.newrule.parameter = form.value.parameter;
    this.newrule.MIN_VAL = form.value.minVal;
    this.newrule.MAX_VAL = form.value.maxVal;
    this.newrule.min_severity = form.value.min_severity;
    this.newrule.max_severity = form.value.max_severity;

    console.log(this.newrule);

    this.alertsService.addAlertRule(this.newrule);
  }

  getClientName(id: string): any {
    return this.alertsService.getClientName(id);
  }

  openEditAlertRuleDialog(alertConfig: any){
    console.log(alertConfig);
    this.dialog.open(AlertConfigDialogComponent, {
      height: '500px',
      width: '850px',
      data: alertConfig
    });
  }

}
