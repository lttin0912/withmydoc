import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeviceService} from '../../../services/device.service';
import {Device, DeviceStatus, DeviceType, IDevice} from '../../../models/device.model';
import { UserService } from 'src/wmd/services/user.service';
import { MetadataService } from 'src/wmd/services/meta-data.service';
import { TranslateService } from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'wmd-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  STATUS_ACTIVE = DeviceStatus.ACTIVE;
  STATUS_ERROR = DeviceStatus.ERROR;
  STATUS_INACTIVE = DeviceStatus.INACTIVE;

  translate: TranslateService;

  @Input() device: IDevice;
  @Input() type: DeviceType;
  @Output() deviceChanged = new EventEmitter();

  device_authorization_code: string;

  constructor(private deviceService: DeviceService,
              private userService: UserService,
              private metadataService: MetadataService,
              private router: Router,
              private route: ActivatedRoute) {
          this.translate = metadataService.translateService;
  }

  ngOnInit() {
    if (!this.device) {
      this.device = new Device();
      this.device.type = this.type;
      this.device.status = DeviceStatus.INACTIVE;
    }

    this.device_authorization_code = this.route.snapshot.queryParamMap.get('code');
    if (this.device_authorization_code && (this.device.type === DeviceType.IHEALTH) && this.device.status === DeviceStatus.INACTIVE) {
      this.deviceService.handleDeviceConnect(this.userService._authToken.getValue(), this.device_authorization_code)
          .subscribe(resp => {
            this.router.navigate(['/devices']);
            this.deviceChanged.emit();
          });
    }
  }

  public onConnect() {
    this.deviceService.startConnect(this.userService._authToken.getValue(), this.type).subscribe(resp => {
        window.location.href = resp.body.authorizeUrl;
    });
  }

  public onDisconnect() {
    this.deviceService.disconnect(this.userService._authToken.getValue(), this.device).subscribe(resp => {
      // const result = resp.body;
      this.deviceChanged.emit();
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
    console.log('***************** Device: ' + this.device);
    // this.deviceService.download(this.device).subscribe(resp => {
    //   this.alertService.success('devices.messages.download.success', null, null);
    // });
  }

}
