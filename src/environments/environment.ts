// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiUri: 'https://api-dev.withmydoc.com',
  loginUri: 'https://sso-dev.withmydoc.com/auth/realms/aptitudio/protocol/openid-connect/auth?client_id=withmydoc&redirect_uri=http://localhost:4200&response_type=code',
  logoutUri: 'https://sso-dev.withmydoc.com/auth/realms/aptitudio/protocol/openid-connect/logout?redirect_uri=http://localhost:4200',
  client_id: 'withmydoc',
  client_secret: 'a6cccff9-12e7-460b-8bf7-3a4ed9a9c748',
  redirect_uri: 'http://localhost:4200',
  token_uri: 'https://sso-dev.withmydoc.com/auth/realms/aptitudio/protocol/openid-connect/token'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
