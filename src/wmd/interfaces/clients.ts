import { VitalDetails } from './vital-details';

export interface Client {
    [key: string]: any;
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    vitals?: VitalDetails[]
}