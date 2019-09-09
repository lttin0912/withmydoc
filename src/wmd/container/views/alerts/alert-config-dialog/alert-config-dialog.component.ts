import {Component, Inject, OnInit} from '@angular/core';
import {AlertsService} from '../../../../services/alerts.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'wmd-alert-config-dialog',
  templateUrl: './alert-config-dialog.component.html',
  styleUrls: ['./alert-config-dialog.component.scss']
})
export class AlertConfigDialogComponent implements OnInit {

  constructor(private alertsService: AlertsService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  onSaveAlert(form: NgForm) {
    console.log(form);
  }

  updateAlert(form: NgForm) {
    console.log(form);

    const updatedRule: any = {
      id: form.value.clientId,
      parameter: form.value.parameter,
      MIN_VAL: form.value.minVal,
      MAX_VAL: form.value.maxVal,
      min_severity: form.value.min_severity,
      max_severity: form.value.max_severity
    };

    console.log(updatedRule);

    this.alertsService.updateAlertRule(updatedRule);
  }
}
