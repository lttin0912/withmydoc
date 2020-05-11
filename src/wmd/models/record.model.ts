export interface IRecord {
  id?: string;
  recordType?: string;
  timestamp?: Date;
  values?: RecordValue[];
  originId?: string;
  deviceUuid?: string;
  deviceType?: string;
}

export interface IRecordValue {
  input?: string;
  value?: string;
  type?: RecordValueType;
  unit?: string;
  primary?: boolean;
}

export class Record implements IRecord {
  constructor(
      public id?: string,
      public recordType?: string,
      public timestamp?: Date,
      public values?: RecordValue[],
      public originId?: string,
      public deviceUuid?: string,
      public deviceType?: string
  ) {
      this.id = id ? id : null;
      this.recordType = recordType ? recordType : null;
      this.timestamp = timestamp ? timestamp : null;
      this.values = values ? values : null;
      this.originId = originId ? originId : null;
      this.deviceUuid = deviceUuid ? deviceUuid : null;
      this.deviceType = deviceType ? deviceType : null;
  }
}

export class RecordValue implements IRecordValue {
  constructor(
      public input?: string,
      public value?: string,
      public type?: RecordValueType,
      public unit?: string,
      public primary?: boolean
  ) {
      this.input = input ? input : null;
      this.value = value ? value : null;
      this.type = type ? type : null;
      this.unit = unit ? unit : null;
      this.primary = primary ? primary : true;
  }
}

export enum RecordValueType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE_TIME = 'DATE_TIME'
}
