import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeviceService} from '../../../services/device.service';
import {Device, DeviceStatus, DeviceType, IDevice} from '../../../models/device.model';
import { UserService } from 'src/wmd/services/user.service';

@Component({
  selector: 'wmd-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  STATUS_ACTIVE = DeviceStatus.ACTIVE;
  STATUS_ERROR = DeviceStatus.ERROR;
  STATUS_INACTIVE = DeviceStatus.INACTIVE;

  @Input() device: IDevice;
  @Input() type: DeviceType;
  @Output() deviceChanged = new EventEmitter();

  constructor(private deviceService: DeviceService,
              private userService: UserService) {}

  ngOnInit() {
    if (!this.device) {
      this.device = new Device();
      this.device.type = this.type;
      this.device.status = DeviceStatus.INACTIVE;
    }
  }

  public onConnect() {
    this.deviceService.startConnect(this.userService._authToken.getValue(), this.type).subscribe(resp => {
        window.location.href = resp.body.authorizeUrl;
    });
  }

  public onDisconnect() {
    this.deviceService.disconnect(this.userService._authToken.getValue(), this.device).subscribe(resp => {
      const result = resp.body;
      this.deviceChanged.emit(true);
    });
  }

  public onTest() {
    // this.deviceService.test(this.device).subscribe(
    //     resp => {
    //       const result = resp.body;
    //       if (result) {
    //         this.alertService.success('devices.messages.test.success', null, null);
    //       } else {
    //         this.alertService.error('devices.messages.test.error', null, null);
    //       }
    //     },
    //     error => {
    //       this.alertService.error('devices.messages.test.error', null, null);
    //     }
    // );
  }

  public onDownload() {
    console.log('***************** Device: '+ this.device);
    // this.deviceService.download(this.device).subscribe(resp => {
    //   this.alertService.success('devices.messages.download.success', null, null);
    // });
  }

}
