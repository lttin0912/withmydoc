import { PatientInterface } from '../interfaces/patient';
import { AddressInterface } from '../interfaces/common/address.interface';
import { ContactPhoneInterface } from '../interfaces/common/contact-phone.interface';
import { ContactEmailInterface } from '../interfaces/common/contact-email.interface';
import { Address } from './address';
import { ContactPhone } from './contact-phone';
import { ContactEmail } from './contact-email';

export class Patient implements PatientInterface {
    constructor(
        public firstName: string = null,
        public nameLast: string = null,
        public namePrefix: string = null,
        public nameMiddle: string = null,
        public nameSuffix: string = null,
        public local: string = 'US/en',
        public address?: AddressInterface[],
        public contactPhone?: ContactPhoneInterface[],
        public contactEmail?: ContactEmailInterface[],
        public createdDate?: string,
        public createdBy?: string,
        public lastModifiedDate?: string,
        public lastModifiedBy?: string,
        public status?: string,
        public addressOther?: boolean,
        public uuid?: string,
        public userId?: string) {
            this.address = [new Address()];
            this.contactPhone = [new ContactPhone()];
            this.contactEmail = [new ContactEmail()];
        }
}
