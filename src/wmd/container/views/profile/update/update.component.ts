import { Component, OnInit, OnDestroy } from '@angular/core';
import { PatientService } from 'src/wmd/services/patient.service';
import { PatientInterface } from 'src/wmd/interfaces/patient';
import { Subscription } from 'rxjs';
import { UserService } from 'src/wmd/services/user.service';

@Component({
  selector: 'wmd-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {
  public patientDetails: PatientInterface;
  private _subscriptions: Subscription[] = [];
  constructor(
    private _patientService: PatientService,
    private _userService: UserService
  ) {}

  ngOnInit(): void {
    if (this._userService.firstName) {
      this._subscriptions.push(
        // In the future we would search by UUID but this endpoint was returning 404.
        this._patientService.getPatientByFirstName(
          this._userService.firstName
        ).subscribe(
          patientDetails => {
            // Grab the most recent one when you search by first name for demonstation sake.
            this.patientDetails = patientDetails[patientDetails.length - 1];
            // Update current value of the patientDetails observable.
            this._patientService.patientDetails.next(this.patientDetails);
          }
        )
      );
    } else if (this._userService.uuid) {
        // In the future we would search by UUID but this endpoint was returning 404.
    this._subscriptions.push(this._patientService.getPatientByUuid(
      this._userService.uuid
    ).subscribe(
      patientDetails => {
        // Grab the most recent one when you search by first name for demonstation sake.
        this.patientDetails = patientDetails;
        // Update current value of the patientDetails observable.
        this._patientService.patientDetails.next(this.patientDetails);
      }));
    }
  }

  // Cleanup.
  ngOnDestroy(): void {
    this._subscriptions.forEach(
      subscription => subscription.unsubscribe()
    );
  }
}
