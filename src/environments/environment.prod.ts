export const environment = {
  production: true,

  apiUri: '%API_URI%',
  loginUri: '%LOGIN_URI%/auth/realms/aptitudio/protocol/openid-connect/auth?client_id=withmydoc&redirect_uri=%REDIRECT_URI%&response_type=code',
  logoutUri: '%LOGOUT_URI%/auth/realms/aptitudio/protocol/openid-connect/logout?redirect_uri=%REDIRECT_URI%',
  client_id: '%CLIENT_ID%',
  client_secret: '%CLIENT_SECRET%',
  redirect_uri: '%REDIRECT_URI%',
  token_uri: '%TOKEN_URI%/auth/realms/aptitudio/protocol/openid-connect/token'

};
