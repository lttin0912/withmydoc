export interface IDevice {
    uuid?: string;
    type?: DeviceType;
    status?: DeviceStatus;
    lastDataPull?: Date;
    retryCount?: number;
    lastError?: Date;
}

export class Device implements IDevice {
    constructor(
        public uuid?: string,
        public type?: DeviceType,
        public status?: DeviceStatus,
        public lastDataPull?: Date,
        public retryCount?: number,
        public lastError?: Date
    ) {
        this.uuid = uuid ? uuid : null;
        this.type = type ? type : null;
        this.status = status ? status : null;
        this.lastDataPull = lastDataPull ? lastDataPull : null;
        this.retryCount = retryCount ? retryCount : null;
        this.lastError = lastError ? lastError : null;
    }
}

export enum DeviceType {
    FITBIT = 'FITBIT',
    IHEALTH = 'IHEALTH',
    GARMIN = 'GARMIN'
}
export enum DeviceStatus {
    ACTIVE = 'ACTIVE',
    ERROR = 'ERROR',
    INACTIVE = 'INACTIVE'
}
