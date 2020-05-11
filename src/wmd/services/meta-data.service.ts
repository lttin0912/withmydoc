import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
const UcumLhcUtils = require('@lhncbc/ucum-lhc').UcumLhcUtils;

import {
  IInput,
  IUnit,
  UnitSystem,
  IRecordType
} from './../models/meta-data.model';
import { MetadataRestService } from './meta-data-rest.service';
import { IRecordValue, RecordValueType } from '../models/record.model';

@Injectable({ providedIn: 'root' })
export class MetadataService {
    private recordTypes: Subject<IRecordType[]> = new ReplaySubject();
    private inputs: Subject<IInput[]> = new ReplaySubject();
    private units: Subject<IUnit[]> = new ReplaySubject();
    private ucum: any;

    constructor(private metadataService: MetadataRestService, private translateService: TranslateService) {
        this.loadRecordTypes();
        this.loadInputs();
        this.loadUnits();

        this.ucum = UcumLhcUtils.getInstance();
    }

    public typeIcon(typeKey: string): Observable<string> {
        return this.recordTypes.pipe(map(types => this.getTypeIcon(typeKey, types)));
    }

    public typeName(typeKey: string): Observable<string> {
        return this.recordTypes.pipe(map(types => this.findType(typeKey, types).name));
    }

    public inputName(inputKey: string): Observable<string> {
        return this.inputs.pipe(
            map(inputs => {
                const input = this.findInput(inputKey, inputs);
                return input ? input.name : null;
            })
        );
    }

    public inputValue(value: IRecordValue, system: UnitSystem): Observable<number | any> {
        if (value.type === RecordValueType.NUMBER) {
            return this.getInput(value.input).pipe(
                flatMap(input => {
                    if (input) {
                        const targetUnit = input.units[system];
                        const currentUnit = value.unit;

                        if (this.isSameUnit(currentUnit, targetUnit)) {
                            return this.convert(value, currentUnit, targetUnit);
                        } else {
                            return of(value.value);
                        }
                    } else {
                        return of(value.value);
                    }
                })
            );
        }
        return of(value.value);
    }

    private isSameUnit(currentUnit, targetUnit) {
        return currentUnit && targetUnit && currentUnit !== targetUnit;
    }

    private convert(value: IRecordValue, currentUnit, targetUnit) {
        return forkJoin(this.getUnit(currentUnit), this.getUnit(targetUnit)).pipe(
            map(units => {
                const current = units[0];
                const target = units[1];

                const currentValid = this.ucum.validateUnitString(current.code, true);
                const targetValid = this.ucum.validateUnitString(target.code, true);

                if (currentValid && targetValid) {
                    const result = this.ucum.convertUnitTo(current.code, value.value, target.code);

                    if (result.status === 'succeeded') {
                        value.value = result.toVal;
                        value.unit = target.id;
                    }
                }

                return value.value;
            })
        );
    }

    private getInput(inputKey: string): Observable<IInput> {
        return this.inputs.pipe(
            map(inputs => {
                const input = this.findInput(inputKey, inputs);
                return input ? input : null;
            })
        );
    }

    private getUnit(unitKey: string): Observable<IUnit> {
        return this.units.pipe(
            map(units => {
                const unit = this.findUnit(unitKey, units);
                return unit ? unit : null;
            })
        );
    }

    private getTypeIcon(typeKey: string, types: IRecordType[]): string {
        const type = this.findType(typeKey, types);
        if (type && type.icon) {
            return type.icon;
        }
        return 'file';
    }

    private findType(typeKey: string, types: IRecordType[]): IRecordType {
        return types.find(rt => typeKey === rt.id);
    }

    private findInput(inputKey: string, inputs: IInput[]): IInput {
        return inputs.find(rt => inputKey === rt.id);
    }

    private findUnit(unitKey: string, units: IUnit[]): IUnit {
        return units.find(rt => unitKey === rt.id);
    }

    private loadRecordTypes() {
        this.metadataService
            .getRecordTypes()
            .pipe(
                map(resp => {
                    return resp.body;
                })
            )
            .subscribe(types => {
                this.recordTypes.next(types);
                this.recordTypes.complete();
            });
    }

    private loadInputs() {
        this.metadataService
            .getInputs()
            .pipe(
                map(resp => {
                    return resp.body;
                })
            )
            .subscribe(inputs => {
                this.inputs.next(inputs);
                this.inputs.complete();
            });
    }

    private loadUnits() {
        this.metadataService
            .getUnits()
            .pipe(
                map(resp => {
                    return resp.body;
                })
            )
            .subscribe(units => {
                this.units.next(units);
                this.units.complete();
            });
    }
}
