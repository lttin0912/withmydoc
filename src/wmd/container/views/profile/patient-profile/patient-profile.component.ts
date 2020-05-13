import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl
} from '@angular/forms';

import { Patient } from 'src/wmd/models/patient';
import { PatientInterface } from 'src/wmd/interfaces/patient';
import { PatientService } from 'src/wmd/services/patient.service';
import { Address } from 'src/wmd/models/address';
import { ContactEmail } from 'src/wmd/models/contact-email';
import { ContactPhone } from 'src/wmd/models/contact-phone';
import { NotificationsService } from 'src/wmd/services/notifications.service';
import { STATES } from 'src/wmd/constants/states';
import { TIMEZONES } from 'src/wmd/constants/timezones';
import { NAME_PREFIXES } from 'src/wmd/constants/name-prefixes';
import { NAME_SUFFIXES } from 'src/wmd/constants/name-suffixes';
import { CONTACT_TYPES } from 'src/wmd/constants/contact-typeS';
import { formatDate } from '@angular/common';

/**
 * @ngdoc component
 * @name wmd.PatientProfileComponent
 */
@Component({
  selector: 'wmd-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {
  timezones: {
    label: string,
    value: number
  }[] = TIMEZONES;

  states: string[] = STATES;

  namePrefixes: {
    label: string
    value: string
  }[] = NAME_PREFIXES;

  nameSuffixes: {
    label: string
    value: string
  }[] = NAME_SUFFIXES;

  contactTypes: {
    label: string
    value: string
  }[] = CONTACT_TYPES;

  formGroup: FormGroup = this._viewModelToFormState(
    new Patient()
  );

  formArrayNames: { [prop: string]: string } = {
    contactEmail: 'contactEmail',
    contactPhone: 'contactPhone',
    address: 'address'
  };

  formArrayWithPrimarySelectionMap: {
    [prop: string]: string
  } = {
    [this.formArrayNames.contactEmail]: 'emailPrimary',
    [this.formArrayNames.contactPhone]: 'phonePrimary',
    [this.formArrayNames.address]: 'primaryAddress'
  };

  patientDetails?: PatientInterface;

  private _subscriptions: Subscription[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _patientService: PatientService,
    private _router: Router,
    private _notificationsService: NotificationsService
  ) {
    console.log(this.formGroup.value);
  }

  get phoneNumbers(): AbstractControl[] {
    return this._getFormArrayByName(
      this.formArrayNames.contactPhone
    ).controls;
  }

  get address(): AbstractControl[] {
    return this._getFormArrayByName(
      this.formArrayNames.address
    ).controls;
  }

  get emails(): AbstractControl[] {
    return this._getFormArrayByName(
      this.formArrayNames.contactEmail
    ).controls;
  }

  addEmail($event: Event): void {
    const subject = this._getFormArrayByName(
      this.formArrayNames.contactEmail
    );
    const blankEmailAddEntry = new ContactEmail();

    blankEmailAddEntry.emailPrimary = false;
    $event.preventDefault();

    subject.push(
      this._formBuilder.group(blankEmailAddEntry)
    );

    this.formGroup.markAsTouched();
  }

  addPhoneNumber($event: Event): void {
    const contactPhoneModel = new ContactPhone();
    $event.preventDefault();

    contactPhoneModel.phonePrimary = false;

    this._getFormArrayByName(
      this.formArrayNames.contactPhone
    ).push(
      this._formBuilder.group(contactPhoneModel)
    );

    this.formGroup.markAsTouched();
  }

  addAddress($event: Event): void {
    const addressModel = new Address();

    addressModel.primaryAddress = false;
    $event.preventDefault();

    this._getFormArrayByName(this.formArrayNames.address).push(
      this._formBuilder.group(addressModel)
    );

    this.formGroup.markAsTouched();
  }

  deleteEmailByIndex(index: number) {
    this._deleteFormControlByIndex(
      index,
      this.formArrayNames.contactEmail,
      this.formArrayWithPrimarySelectionMap.contactEmail
    );
  }

  deletePhoneNumberByIndex(index: number) {
    this._deleteFormControlByIndex(
      index,
      this.formArrayNames.contactPhone,
      this.formArrayWithPrimarySelectionMap.contactPhone,
    );
  }

  deleteAddressByIndex(index: number) {
    this._deleteFormControlByIndex(
      index,
      this.formArrayNames.address,
      this.formArrayWithPrimarySelectionMap.address
    );
  }

  onSubmit(formData: PatientInterface, $event: Event) {
    $event.preventDefault();

    /**
     * @description
     * Handle update to an existing patient or creation of a new patient.
     */
    if (this.patientDetails && this.patientDetails.uuid) {
      this.patientDetails.namePrefix = formData.namePrefix;
      this.patientDetails.firstName = formData.firstName;
      this.patientDetails.nameLast = formData.nameLast;
      this.patientDetails.nameSuffix = formData.nameSuffix;
      this.patientDetails.address = formData.address;
      this.patientDetails.contactEmail = formData.contactEmail;
      this.patientDetails.contactPhone = formData.contactPhone;
      // This is an update to an existing patient.
      this._subscriptions.push(
        this._patientService.updatePatient(this.patientDetails).subscribe((reply: any) => {
          this._notificationsService.success('Success!');
          this._intialize();
        }));
    } else {
      // This is a new patient creation.
      this._subscriptions.push(
        this._patientService.registerPatient(formData).subscribe((reply: any) => {
          this._notificationsService.success('Success!');
          this._router.navigate(['first-name/', this.patientDetails.firstName]);
        }));
    }
  }

  ngOnInit(): void {
    this._intialize();
  }

  onReset($event: Event): void {
    $event.preventDefault();
    this.formGroup = this._viewModelToFormState(
       this.patientDetails || new Patient()
    );
  }

  /**
   * @method primaryInstanceInFormArrayChange
   * @description Track primary instance in array
   *              selection within patient profile.
   * @param formArrayName The form array which has selection exclusivity.
   * @param primaryPropertyName The property which tracks if its the
   *                            primary selection of in the collection.
   * @param checked Target checked or unchecked?
   * @param index Track the order in the collection. If checked this
   *              will become the only checked/primary in the
   *              collection.
   */
  public primaryInstanceInFormArrayChange(
    formArrayName: string,
    primaryPropertyName: string,
    { checked }: { checked: boolean },
    index: number
  ): void {
    const formControlArray = this._getFormArrayByName(
      formArrayName
    );
    let controlNewValue;

    /**
     *  Update form state with old state but make sure
     *  only 1 primary dynamically constrained in the ui
     *  per patient (any)collection.
     */
    formControlArray.setValue([
      ...formControlArray.value.map((
        formControlArrayData: {
          [controlName: string]: AbstractControl
        },
        itemIndex: number): {
          [controlName: string]: AbstractControl
        } => {
        if (!checked) {
          controlNewValue = false;
        } else if (itemIndex === index) {
          controlNewValue = checked;
        } else if (!controlNewValue && !checked) {
          controlNewValue = false;
          formControlArray.setValue([
            ...formControlArray.value.map((control, idx) => {
              if (index !== 0) {
                const oldFirstControlInCollectionValue = Object.assign({}, formControlArrayData.value[0]);
                oldFirstControlInCollectionValue[primaryPropertyName] = true;

                const newControl = oldFirstControlInCollectionValue;

                control.setValue(newControl);

                return control;
              } else {
                formControlArray.get([0]).setValue({...formControlArray.get([0]), [primaryPropertyName]: true });
              }

              return control;
            })
          ]);
        } else {
          controlNewValue = false;
        }

        return {
          ...formControlArrayData,
          [primaryPropertyName]: controlNewValue
        };
      })]);
  }

  private _viewModelToFormState(viewModel: PatientInterface): FormGroup {    
    return this._formBuilder.group({
      namePrefix: [
        viewModel.namePrefix
      ],
      firstName: [
        viewModel.firstName,
        Validators.required
      ],
      nameMiddle: [
        viewModel.nameMiddle
      ],
      nameLast: [
        viewModel.nameLast,
        Validators.required
      ],
      nameSuffix: [
        viewModel.nameSuffix
      ],
      address: this._formBuilder.array(
        viewModel.address.map(
          address =>
            this._formBuilder.group(address)
      )),
      contactEmail: this._formBuilder.array(
        viewModel.contactEmail.map(
          contactEmail =>
            this._formBuilder.group(contactEmail)
      )),
      contactPhone: this._formBuilder.array(
        viewModel.contactPhone.map(
          contactPhone =>
            this._formBuilder.group(contactPhone)
      ))
    });
  }

  private _getFormArrayByName(name: string): FormArray {
    return this.formGroup.get(name) as FormArray;
  }

  private _intialize(): void {
    this._patientService.patientDetails.asObservable().subscribe(patientDetails => {
      if(!patientDetails) {
        this._patientService.getPatient().subscribe(patientDetails => {
          this.patientDetails = patientDetails;
          this.formGroup = this._viewModelToFormState(patientDetails);
          this._patientService.patientDetails.next(patientDetails);
        });
      }
      else  {
        this.patientDetails = patientDetails;
        this.formGroup = this._viewModelToFormState(patientDetails);
      }
    });
  }

  /**
   * @method _deleteFormControlByIndex
   * @param index The index in the named array to remove.
   * @param formControlArrayName The array by name to delete from.
   * @param formArrayPrimaryPropertyName The primary property name in the
   *                                     collection.
   */
  private _deleteFormControlByIndex(
    index: number,
    formControlArrayName: string,
    formArrayPrimaryPropertyName: string): void {
    this._getFormArrayByName(
      formControlArrayName
    ).removeAt(index);

    this.primaryInstanceInFormArrayChange(
      formControlArrayName,
      formArrayPrimaryPropertyName,
      { checked: true },
      0
    );

    this.formGroup.markAsTouched();
  }
}
