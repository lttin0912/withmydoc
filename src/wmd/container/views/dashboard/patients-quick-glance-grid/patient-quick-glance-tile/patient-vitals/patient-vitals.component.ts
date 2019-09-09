import { Component, OnInit , Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'wmd-patient-vitals',
  templateUrl: './patient-vitals.component.html',
  styleUrls: ['./patient-vitals.component.scss']
})
export class PatientVitalsComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public vitals: any,
    private ownRef: MatBottomSheetRef<PatientVitalsComponent>) { }
  
  close($event) {
    this.ownRef.dismiss();
    $event.preventDefault();
  }

  ngOnInit() {}
}
