// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiUri: 'https://api.withmydoc.com',
  //apiUri: 'https://localhost:8080',
  loginUri: 'https://sso.withmydoc.com/auth/realms/aptitudio/protocol/openid-connect/auth?client_id=withmydoc&redirect_uri=https://patient.withmydoc.com&response_type=code',
  logoutUri: 'https://sso.withmydoc.com/auth/realms/aptitudio/protocol/openid-connect/logout?redirect_uri=https://patient.withmydoc.com',
  client_id: 'withmydoc',
  client_secret: '133c1ea8-c440-45c5-b02b-6329c59de3f9',
  redirect_uri: 'https://patient.withmydoc.com',
  token_uri: 'https://sso.withmydoc.com/auth/realms/aptitudio/protocol/openid-connect/token'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
