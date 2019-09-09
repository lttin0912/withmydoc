import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AlertsService} from '../../../../services/alerts.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'wmd-alert-session-dialog',
  templateUrl: './alert-session-dialog.component.html',
  styleUrls: ['./alert-session-dialog.component.scss']
})
export class AlertSessionDialogComponent implements OnInit {

  constructor(private alertsService: AlertsService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  timeConsumedSeconds = 0;
  timeConsumedMinutes = 0;
  interval;
  commentHistory = ['Nicole: Called and left a message', 'Marlene: Provided instructions to reduce blood pressure'];

  ngOnInit() {
      this.interval = setInterval(() => {
        this.timeConsumedSeconds++;
        this.timeConsumedMinutes = Math.floor((this.timeConsumedSeconds/60));
      }, 1000);
  }

  onClose() {
    clearInterval(this.interval);
  }
  submitSession(form: NgForm) {

  }

}
