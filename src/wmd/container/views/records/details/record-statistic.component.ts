import { Component, Input } from '@angular/core';
import { IRecordValueStatistic } from 'src/wmd/models/record-statistics.model';

@Component({
    selector: 'wmd-record-statistic',
    templateUrl: './record-statistic.component.html',
    styleUrls: ['record-statistic.component.scss']
})
export class RecordStatisticComponent {
    @Input() statistic: IRecordValueStatistic;
}
