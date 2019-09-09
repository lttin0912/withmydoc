export interface ContactPhoneInterface {
  phoneNumber: string;
  phoneId?: string;
  countryCode: string;
  phoneExtension: string;
  phoneType: string;
  // ToDo: This needs to be cast to true boolean on the api side.
  phonePrimary: boolean | 'true' | 'false';
}
