import { ContactEmailInterface } from '../interfaces/common/contact-email.interface';

export class ContactEmail implements ContactEmailInterface {
    emailAddress = null;
    emailId = null;
    emailType = null;
    // ToDo: This needs to be cast to true boolean on the api side.
    emailPrimary: boolean | 'true' | 'false' = true;
}
