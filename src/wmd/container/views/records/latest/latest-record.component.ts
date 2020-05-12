import { Component, Input, OnInit } from '@angular/core';

import * as moment from 'moment';
import { IRecord } from 'src/wmd/models/record.model';
import { TranslateService } from '@ngx-translate/core';
import { MetadataService } from 'src/wmd/services/meta-data.service';

@Component({
    selector: 'wmd-latest-record',
    templateUrl: './latest-record.component.html',
    styleUrls: ['latest-record.scss']
})
export class LatestRecordComponent implements OnInit {
    @Input() record: IRecord;
    translate: TranslateService;

    constructor(public metaDataService: MetadataService) {
        this.translate = metaDataService.translateService;
    }

    ngOnInit()  {
    }

    public toLocalDate(date) {
        return moment(date)
            .local(true)
            .toDate();
    }
}
