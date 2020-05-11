import { IRecord } from './record.model';

export interface IRecordQuery {
    type?: string;
    start?: string;
    end?: string;
    key?: string;
    aggregation?: string;
    sort?: string;
    page?: number;
    size?: number;
}

export class RecordQuery implements IRecordQuery {
    constructor(
        public type?: string,
        public start?: string,
        public end?: string,
        public key?: string,
        public aggregation?: string,
        public sort?: string,
        public page?: number,
        public size?: number
    ) {
        this.type = type ? type : null;
        this.start = start ? start : null;
        this.end = end ? end : null;
        this.key = key ? key : null;
        this.aggregation = aggregation ? aggregation : null;
        this.sort = sort ? sort : null;
        this.page = page ? page : 0;
        this.size = size ? size : 100;
    }
}

export interface IRecordsPage {
    content?: IRecord[];
    total?: number;
    requestContinuation?: string;
}
