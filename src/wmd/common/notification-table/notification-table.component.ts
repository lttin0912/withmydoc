import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'wmd-notification-table',
  templateUrl: './notification-table.component.html',
  styleUrls: ['./notification-table.component.scss']
})
export class NotificationTableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.columns = this.notificationService.getColumns();
  }

}
