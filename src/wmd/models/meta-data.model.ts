export interface IRecordType {
  id?: string;
  name?: string;
  icon?: string;
}
export interface IInput {
  id?: string;
  name?: string;
  units?: string[];
}
export interface IUnit {
  id?: string;
  code?: string;
  system?: string;
}
export enum UnitSystem {
  si = 'si',
  uk = 'uk',
  us = 'us'
}
