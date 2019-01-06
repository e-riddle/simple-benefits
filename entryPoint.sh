#!/bin/bash
set -xe
: "${API_BASE_URL?Need an api url}"

sed -i "s/??API_BASE_URL??/$API_BASE_URL/g" /usr/share/nginx/html/main*.js

exec "$@"