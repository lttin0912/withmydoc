import { Component, OnInit, Input } from '@angular/core';
import { VitalDetails } from 'src/wmd/interfaces/vital-details';

@Component({
  selector: 'wmd-patient-metrics-chart',
  templateUrl: './patient-metrics-chart.component.html',
  styleUrls: ['./patient-metrics-chart.component.scss']
})
export class PatientMetricsChartComponent implements OnInit {
  @Input()
  vitals: VitalDetails[];

  metrics: { 
    name: string, 
    series: { 
      name: string, 
      value: number 
    }[]
  }[] = [];
  
  yAxisLabel = 'Vital Value';
  
  xAxisLabel = 'Event Date';

  showXAxis = true;
  
  showYAxis = true;
  
  gradient = true;
  
  showLegend = true;
  
  showXAxisLabel = true;

  showYAxisLabel = true;
  
  timeline = true;

  colorScheme = {
    domain: [
      '#184551',
      '#383B53',
      '#5D2E46',
      '#AD6A6C',
      '#C7B42C', 
      '#984551',
      '#b4ae2a'
    ]
  };

  autoScale = true;

  mapVitalsToChart() {
    const finalResult = [];
    const userMetricsByDateAndCategory = {};

    const mapVitalRecordToApiFormat = (vital: VitalDetails)=> {
      for (const vitalCategory in vital) {
        if (vital.hasOwnProperty(vitalCategory) 
            && vitalCategory !== 'dateTime' 
            && vitalCategory !== 'id') {
          const vitalValue = vital[vitalCategory];
          const vitalsLayer = userMetricsByDateAndCategory[vitalCategory];

          if (!vitalsLayer) {
              userMetricsByDateAndCategory[vitalCategory] = {
                name: vitalCategory.toUpperCase(),
                series: []
              };
          }

          userMetricsByDateAndCategory[vitalCategory].series.push({
            name: vital.dateTime,
            value: vitalValue
          });
        }
      }
    };
    
    // Group vitals by category.
    this.vitals.forEach(mapVitalRecordToApiFormat);

    // Format the result for ngx chart api. 
    for (const vitalCategory in userMetricsByDateAndCategory) {
      if (userMetricsByDateAndCategory.hasOwnProperty(vitalCategory)) {
        finalResult.push(userMetricsByDateAndCategory[vitalCategory]);
      }
    }

    return finalResult;
  }
      
  constructor() { }

  ngOnInit() {
    this.metrics = this.mapVitalsToChart();
  }
}
