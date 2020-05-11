import { Component, Inject, LOCALE_ID, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import * as moment from 'moment';
import { Moment } from 'moment';
import 'moment-timezone';
import { IRecord } from 'src/wmd/models/record.model';
import { RecordChartComponent } from '.';
import { RecordService } from 'src/wmd/services/records.service';
import { IRecordStatistic, RecordStatisticQuery } from 'src/wmd/models/record-statistics.model';
import { RecordQuery } from 'src/wmd/models/record-query.model';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/wmd/models/patient';
import { PatientService } from 'src/wmd/services/patient.service';
import { PatientInterface } from 'src/wmd/interfaces/patient';



@Component({
  selector: 'wmd-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss']
})
export class RecordDetailsComponent implements OnInit, OnDestroy {
  DATE_PARAM_FORMAT = 'YYYY-MM-DD';
  PERIOD_TODAY = 'today';
  PERIOD_THIS_MONTH = 'thisMonth';
  PERIOD_THIS_WEEK = 'thisWeek';
  PERIOD_MONTHS_3 = 'months3';

  patientDetails: PatientInterface;

  type: string;
  records: IRecord[] = [];
  statistic: IRecordStatistic;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  loading = false;

  chart: RecordChartComponent;

  activePeriod = '';

  private routeParamsSub: Subscription;
  private queryParamsSub: Subscription;

  constructor(
    private _patientService: PatientService,
    private recordService: RecordService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(LOCALE_ID) public locale: string,
    private calendar: NgbCalendar
  ) {

    library.add(fas)
    
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getToday();
  }

  ngOnInit() {

    this._patientService.patientDetails.asObservable().subscribe(patientDetails => {
        this.patientDetails = patientDetails;
    });

    moment().locale(this.locale);
    // @ts-ignore
    moment.tz.setDefault('Europe/Tallinn');

    this.routeParamsSub = this.route.params.subscribe(params => {
      this.type = params.type;
    });

    this.queryParamsSub = this.route.queryParams.subscribe(params => {
      const { fromDate, toDate } = params;

      if (fromDate) {
        this.fromDate = this.toNgbDate(moment(fromDate, this.DATE_PARAM_FORMAT));
      }
      if (toDate) {
        this.toDate = this.toNgbDate(moment(toDate, this.DATE_PARAM_FORMAT));
      }
    }); 

    if (!this.fromDate && !this.toDate) {
      this.thisWeek();
    }

    this.refresh();
  }

  ngOnDestroy() {
    this.routeParamsSub.unsubscribe();
    this.queryParamsSub.unsubscribe();
  }

  public onToDateChanged() {
    this.activePeriod = '';
    this.updateQueryParams();
    this.refresh();
  }

  public onFromDateChanged() {
    this.activePeriod = '';
    this.updateQueryParams();
    this.refresh();
  }

  public today() {
    this.activePeriod = this.PERIOD_TODAY;
    let today = this.calendar.getToday();
    this.fromDate = today;
    this.toDate = today;
    this.updateQueryParams();
    this.refresh();
  }

  public thisWeek() {
    this.activePeriod = this.PERIOD_THIS_WEEK;
    let today = this.calendar.getToday();
    let weekNumber = this.calendar.getWeekday(today);
    this.fromDate = this.calendar.getPrev(today, 'd', weekNumber);
    this.toDate = today;
/*     this.fromDate = moment();
    this.toDate = moment(); */
    this.updateQueryParams();
    this.refresh();
  }

  public thisMonth() {
    this.activePeriod = this.PERIOD_THIS_MONTH;
    let today = this.calendar.getToday();
    this.fromDate = {year: today.year, month: today.month, day: 1};
    this.toDate = today;
    //this.updateQueryParams();
    this.refresh();
  }

  public months3() {
    this.activePeriod = this.PERIOD_MONTHS_3;
    let today = this.calendar.getToday();
    this.fromDate = this.calendar.getPrev(today, 'm', 3);
    this.toDate = today;
    //this.updateQueryParams();
    this.refresh();
  }

  private updateQueryParams() {
    if (typeof this.fromDate === 'string' || typeof this.toDate === 'string') {
      return;
    }
    this.router.navigate([`/records/${this.type}`], {
      queryParams: {
        fromDate: this.fromNgbDate(this.fromDate),
        toDate: this.fromNgbDate(this.toDate)
      },
      replaceUrl: true
    });
  }

  public refresh() {
    const start = this.fromNgbDate(this.fromDate);
    const end = this.fromNgbDate(this.toDate);

    const days = Math.abs(moment.duration(end.diff(start)).asDays());

    const recordsQuery = new RecordQuery(this.type, moment(start, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DDTHH:mm:ss'), 
                moment(end, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DDTHH:mm:ss'), null, days <= 1 ? 'HOUR' : 'DAY');

    this.loading = true;
    this.recordService.query(this.patientDetails.uuid, recordsQuery).subscribe(resp => {
      this.loading = false;
      const records = resp.content;
      //TODO
      if (records.length > 0) {
        this.loadStatistics();
      }
      this.records = records;
    });
  }

  private loadStatistics() {
    const start = this.fromNgbDate(this.fromDate);
    const end = this.fromNgbDate(this.toDate);

    const statisticsQuery = new RecordStatisticQuery(this.type, moment(start, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DDTHH:mm:ss'), 
              moment(end, 'YYYY-MM-DDTHH:mm:ss').format('YYYY-MM-DDTHH:mm:ss'));

    this.loading = true;
    this.recordService.getStatistics(this.patientDetails.uuid, statisticsQuery).subscribe(resp => {
      this.statistic = resp;
      this.loading = false;
    });
  }

  fromNgbDate(ngbDate: NgbDateStruct) : Moment  {
    if(ngbDate) {
      let year = ngbDate.year;
      let month = ngbDate.month;
      let day = ngbDate.day;

      let m = month < 10 ? '0' + month : month;
      let d = day < 10 ? '0' + day : day;
      let dateStr = year + '-' + m + '-' + d;
      return moment(dateStr);
    }
    return moment();
  }

  toNgbDate (date: Moment) : NgbDateStruct {
    if(date)  return {year: 2020, month: 5, day: 8};
    return this.calendar.getToday();
  }

  formatGraphTypeLabel(lbl: string)  {
    if(lbl === 'weight')  return 'Weight';
    else  if(lbl === 'bloodPressure')  return 'Blood Pressure';
    else  if(lbl === 'bloodOxygen')  return 'SpO<sub>2</sub>';
    else return'';
  }
}
