#!/bin/sh
set -eu

template='/usr/share/nginx/html/runtime-config.template.js'
target='/usr/share/nginx/html/runtime-config.js'

envsubst '${API_BASE_URL} ${AUTH0_DOMAIN} ${AUTH0_CLIENT_ID} ${AUTH0_AUDIENCE}' < "$template" > "$target"
