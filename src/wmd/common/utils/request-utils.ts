import { HttpParameterCodec, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

class CustomEncoder implements HttpParameterCodec {
    encodeKey(key: string): string {
        return encodeURIComponent(key);
    }

    encodeValue(value: string): string {
        return encodeURIComponent(value);
    }

    decodeKey(key: string): string {
        return decodeURIComponent(key);
    }

    decodeValue(value: string): string {
        return decodeURIComponent(value);
    }
}

export const createRequestOption = (req?: any): HttpParams => {
    let options: HttpParams = new HttpParams({ encoder: new CustomEncoder() });
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                let value = req[key];
                if (value === undefined || value === null) {
                    return;
                }
                if (value instanceof Date) {
                    value = moment(value).toISOString(true);
                }
                options = options.set(key, value);
            }
        });
        if (req.sort) {
            req.sort.forEach(val => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};
