import { Component, Input } from '@angular/core';
import { IRecordValueStatistic } from 'src/wmd/models/record-statistics.model';
import { MetadataService } from 'src/wmd/services/meta-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'wmd-record-statistic',
    templateUrl: './record-statistic.component.html',
    styleUrls: ['record-statistic.component.scss']
})
export class RecordStatisticComponent {

    translate: TranslateService;
    @Input() statistic: IRecordValueStatistic;

    constructor(private metadataService: MetadataService)       {
        this.translate = metadataService.translateService;
    }
}
