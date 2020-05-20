import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../services/device.service';
import {DeviceType, IDevice} from '../../../models/device.model';
import { UserService } from 'src/wmd/services/user.service';

@Component({
  selector: 'wmd-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  deviceTypes = [DeviceType.FITBIT, DeviceType.IHEALTH, DeviceType.GARMIN];
  devices: Map<DeviceType, IDevice> = new Map<DeviceType, IDevice>();
  loading = false;

  constructor(private deviceService: DeviceService,
              private userService: UserService) {}

  ngOnInit() {
    this.refresh();
    this.deviceService.deviceChanged.subscribe(() => {
      this.refresh();
    });
  }

  public refresh() {
    console.log('****** Refreshing Devices!!!!');
    this.loading = true;
    this.deviceService.query(this.userService._authToken.getValue()).subscribe(resp => {
      this.devices.clear();
      resp.body.forEach(d => this.devices.set(d.type, d));
      this.loading = false;
    });
  }

}
