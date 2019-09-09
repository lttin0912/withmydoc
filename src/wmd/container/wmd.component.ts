import { Component } from '@angular/core';
import 'hammerjs';
import '../../styles.scss';

@Component({
  selector: 'wmd-root',
  templateUrl: './wmd.component.html',
  styleUrls: ['./wmd.component.scss']
})
export class WmdComponent {
  title = 'WITHmyDoc Notifications';
}