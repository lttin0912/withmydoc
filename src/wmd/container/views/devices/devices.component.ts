import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../../../services/device.service';
import {DeviceType, IDevice} from '../../../models/device.model';
import {PatientService} from '../../../services/patient.service';

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
              private patientService: PatientService) {}

  ngOnInit() {
    this.refresh();
  }

  public refresh() {
    this.loading = true;
    this.deviceService.query(this.patientService._authToken.getValue()).subscribe(resp => {
      this.devices.clear();
      resp.body.forEach(d => this.devices.set(d.type, d));
      this.loading = false;
    });
  }

}
