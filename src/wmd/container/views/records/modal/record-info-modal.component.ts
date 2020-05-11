import { Component, Input, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import * as moment from 'moment';
import { IRecord } from 'src/wmd/models/record.model';

@Component({
    selector: 'wmd-record-info-modal',
    templateUrl: './record-info-modal.component.html',
    styleUrls: ['./record-info-modal.component.scss']
})
export class RecordInfoModalComponent implements OnInit {
    @Input() record: IRecord;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit() {}

    public toLocalDate(date) {
        return moment(date)
            .local(true)
            .toDate();
    }
}
