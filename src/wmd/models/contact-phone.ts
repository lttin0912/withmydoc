import { ContactPhoneInterface } from '../interfaces/common/contact-phone.interface';

export class ContactPhone implements ContactPhoneInterface {
    countryCode = null;
    phoneNumber = null;
    phoneExtension = null;
    phoneType = null;
    // ToDo: This needs to be cast to true boolean on the api side.
    phonePrimary: boolean | 'true' | 'false' = true;
}
