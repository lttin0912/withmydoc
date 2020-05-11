import { IRecordValue } from './record.model';

export interface IRecordStatistic {
    recordType?: string;
    nrOfRecords?: number;
    firstRecord?: Date;
    lastRecord?: Date;
    statistics?: IRecordValueStatistic[];
}

export interface IRecordValueStatistic {
    type?: string;
    values?: IRecordValue[];
}

export interface IRecordStatisticQuery {
    type?: string;
    start?: string;
    end?: string;
}

export class RecordStatisticQuery implements IRecordStatisticQuery {
    constructor(public type?: string, public start?: string, public end?: string) {
        this.type = type ? type : null;
        this.start = start ? start : null;
        this.end = end ? end : null;
    }
}
