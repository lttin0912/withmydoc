import { Component, OnInit } from '@angular/core';
import { PatientRepositoryService } from 'src/wmd/services/patient-repository.service';

@Component({
  selector: 'wmd-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {
  okPatientsVisible = true;
  warningPatientsVisible = true;
  criticalPatientsVisible = true;
  constructor(public patientRepositoryService: PatientRepositoryService) { }
  handleLegendSelection() {
    const selections = [];

    if (this.okPatientsVisible) selections.push('ok');
    if (this.warningPatientsVisible) selections.push('warning');
    if (this.criticalPatientsVisible) selections.push('critical');

    this.patientRepositoryService.filterPatientsWithAlertsByAlertTypes(selections);
  }

  handleOkSelect() {
    // this.okPatientsVisible = !this.okPatientsVisible;
    // this.handleLegendSelection();
  }

  handleWarningSelect() {
    // this.warningPatientsVisible = !this.warningPatientsVisible;
    // this.handleLegendSelection();
  }

  handleCriticalSelect() {
    // this.criticalPatientsVisible = !this.criticalPatientsVisible;
    // this.handleLegendSelection();
  }

  ngOnInit() {
  }
}
