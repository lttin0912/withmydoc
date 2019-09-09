import { AddressInterface } from '../interfaces/common/address.interface';

export class Address implements AddressInterface {
    // ToDo: This needs to be cast to true boolean on the api side.
    primaryAddress: boolean | 'true' | 'false' = true;
    address1 = null;
    city = null;
    stateProv = null;
    zip = null;
    url = null;
    logo = null;
    addressId = null;
    address2 = null;
    address3 = null;
    seasonDate1 = null;
    seasonDate2 = null;
    zip4 = null;
    addressUTCOffset = null;
}
    