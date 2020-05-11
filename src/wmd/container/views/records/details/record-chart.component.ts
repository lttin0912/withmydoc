import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ChartDataSets, ChartOptions, ChartPoint } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';



import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';
import 'moment-timezone';
import { IRecord, RecordValueType } from 'src/wmd/models/record.model';
import { RecordInfoModalComponent } from '../modal/record-info-modal.component';

@Component({
  selector: 'wmd-record-chart',
  templateUrl: './record-chart.component.html'
})
export class RecordChartComponent implements OnInit, OnChanges {

  @Input() records: IRecord[];

  public chartData: ChartDataSets[] = [];

  public chartOptions: ChartOptions = {
    aspectRatio: 2,
    animation: {
      duration: 1000, // general animation time
      easing: 'easeOutBack'
    },
    hover: {
      animationDuration: 1000, // duration of animations when hovering an item
      mode: 'label'
    },
    responsiveAnimationDuration: 1000, // animation duration after a resize
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom'
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'day',
            stepSize: 1
          },
          // barThickness: 5,
          display: true,
          gridLines: {
            color: '#f3f3f3',
            drawTicks: false
          }
        }
      ],
      yAxes: [
        {
          id: 'primary',
          display: true,
          gridLines: {
            color: '#f3f3f3',
            drawTicks: false
          },
          ticks: {
            min: 0
          }
        },
        {
          id: 'secondary',
          display: false,
          gridLines: {
            display: false
          },
          position: 'right',
          ticks: {
            min: 0
          }
        }
      ]
    }
  };

  public chartColors: Array<any> = [];

  public lineChartColors: Array<any> = [
    {
      fill: false,
      borderDash: [5, 5],
      borderColor: '#9C27B0',
      pointBorderColor: '#9C27B0',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4
    },
    {
      fill: false,
      borderDash: [5, 5],
      borderColor: '#00A5A8',
      pointBorderColor: '#00A5A8',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4
    },
    {
      lineTension: 0,
      fill: false,
      borderColor: '#FF7D4D',
      pointBorderColor: '#FF7D4D',
      pointBackgroundColor: '#FFF',
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4
    }
  ];

  barChartColors: Array<any> = [
    {
      backgroundColor: '#00A5A8',
      borderColor: '#00A5A8',
      pointBackgroundColor: '#00A5A8',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#00A5A8'
    },
    {
      backgroundColor: '#FF7D4D',
      borderColor: '#FF7D4D',
      pointBackgroundColor: '#FF7D4D',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FF7D4D'
    }
  ];

  public chartType = 'line';

  public chartVisible = false;

  @ViewChild(BaseChartDirective, { static: false }) chart: BaseChartDirective;

  constructor(
    private modalService: NgbModal,
    private translateService: TranslateService,
) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.refresh();
  }

  public refresh() {
    this.createChar();
  }

  public chartClicked({ event, active }: { event: MouseEvent; active: any[] }): void {
    if (active && active.length > 0) {
      const index = active[0]._index;

      const modalRef = this.modalService.open(RecordInfoModalComponent);
      modalRef.componentInstance.record = this.records[index];
    }
  }

  private createChar() {
    this.chartVisible = false;

    if (this.records.length < 1) {
      return;
    }

    const inputs = [];
    const dataSets: ChartDataSets[] = [];
    const chartDatas: ChartPoint[][] = [];

    const tz = moment().utcOffset();

    this.records.forEach(r => {
      r.values.forEach(v => {
        if (!v.value || v.type !== RecordValueType.NUMBER || v.primary === false) {
          return;
        }

        let dataSet: ChartDataSets = dataSets[v.input];
        let chartData: ChartPoint[] = chartDatas[v.input];

        if (!dataSet) {
          const primaryAxis = v.unit != null || dataSets.length === 0;

          dataSet = this.createDateSet(v.input, primaryAxis);

          if (!primaryAxis) {
            this.chartOptions.scales.yAxes[1].display = true;
          }

          chartData = [];
          dataSet.data = chartData;

          inputs.push(v.input);
          dataSets[v.input] = dataSet;
          chartDatas[v.input] = chartData;
        }

        const value = parseFloat(v.value).toFixed(2);
        const newVar: ChartPoint = { x: this.toLocalDate(r.timestamp), y: value, r: 10 };
        chartData.push(newVar);
      });
    });

    const result: ChartDataSets[] = [];
    inputs.forEach(input => result.push(dataSets[input]));

    if (result.length > 1) {
      this.chartType = 'line';
      this.chartColors = this.lineChartColors;
    } else {
      this.chartType = 'bar';
      this.chartColors = this.barChartColors;
    }

    this.chartData = result;
    this.chartVisible = true;
  }

  private toLocalDate(date) {
    let d = moment.unix(date).format('YYYY-MM-DD');
    return d;
  }

  private createDateSet(input: string, primaryAxis: boolean) {
    const dataSet: ChartDataSets = {};
    dataSet.fill = false;
    dataSet.pointRadius = 8;
    dataSet.pointHoverRadius = 10;
    dataSet.label = this.translateLabel(input);
    dataSet.yAxisID = primaryAxis ? 'primary' : 'secondary';
    //this.translateService.get(input).subscribe(t => (dataSet.label = t));
    return dataSet;
  }

  // TODO - To be done in better way
  translateLabel(input: string) {
    if(input && input.includes('heartrate'))
      return 'Heart Rate';
    else if(input && input.includes('systolic'))
      return 'Systolic';
    else if(input && input.includes('diastolic'))
      return 'Diastolic';
    else if(input && input.includes('weight.value'))
      return 'Weight';
    else if(input && input.includes('weight.bmi'))
      return 'Body Mass Index';
    else if(input && input.includes('spo2'))
      return 'SpO2';
    return input;
  }
}
