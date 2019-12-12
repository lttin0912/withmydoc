#!/bin/sh

#API_URI=https://api.withmydoc.com

echo "Configuring Patient Portal Application and Running the server"

echo "The Environment Variable $API_URI"

sed -i -e 's|%API_URI%|'"$API_URI"'|g' -i -e 's|%LOGIN_URI%|'"$LOGIN_URI"'|g' -i -e 's|%REDIRECT_URI%|'"$REDIRECT_URI"'|g' -i -e 's|%LOGOUT_URI%|'"$LOGOUT_URI"'|g' -i -e 's|%CLIENT_ID%|'"$CLIENT_ID"'|g' -i -e 's|%CLIENT_SECRET%|'"$CLIENT_SECRET"'|g' -i -e 's|%TOKEN_URI%|'"$TOKEN_URI"'|g' /usr/share/nginx/html/main.js

nginx -g 'daemon off;'
