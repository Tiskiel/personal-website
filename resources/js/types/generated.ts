export type MailFormRequestData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_zone: PhoneZoneEnum;
  phone: string;
  company: string;
  message: string;
};
export enum PhoneZoneEnum {
  'BE' = 'BE',
  'US' = 'US',
  'CA' = 'CA',
  'FR' = 'FR',
}
