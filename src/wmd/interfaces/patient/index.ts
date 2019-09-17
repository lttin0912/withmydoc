import { AddressInterface } from '../common/address.interface';
import { ContactPhoneInterface } from '../common/contact-phone.interface';
import { ContactEmailInterface } from '../common/contact-email.interface';

export interface PatientInterface {
    firstName: string;
    nameLast: string;
    addressOther?: boolean;
    namePrefix?: string;
    nameMiddle?: string;
    nameSuffix?: string;
    local?: string;
    address?: AddressInterface[];
    contactPhone?: ContactPhoneInterface[];
    contactEmail?: ContactEmailInterface[];
    uuid?: string;
    userId?: string;
    createdDate?: string;
    createdBy?: string;
    lastModifiedDate?: string;
    lastModifiedBy?: string;
    status?: string;
}
