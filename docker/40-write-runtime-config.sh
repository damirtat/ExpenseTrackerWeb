#!/bin/sh
set -eu

template='/usr/share/nginx/html/runtime-config.template.js'
target='/usr/share/nginx/html/runtime-config.js'

encode_runtime_value() {
  printf %s "$1" | base64 | tr -d '\n'
}

API_BASE_URL_BASE64="$(encode_runtime_value "${API_BASE_URL:-}")"
AUTH0_DOMAIN_BASE64="$(encode_runtime_value "${AUTH0_DOMAIN:-}")"
AUTH0_CLIENT_ID_BASE64="$(encode_runtime_value "${AUTH0_CLIENT_ID:-}")"
AUTH0_AUDIENCE_BASE64="$(encode_runtime_value "${AUTH0_AUDIENCE:-}")"

export API_BASE_URL_BASE64 AUTH0_DOMAIN_BASE64 AUTH0_CLIENT_ID_BASE64 AUTH0_AUDIENCE_BASE64

envsubst '${API_BASE_URL_BASE64} ${AUTH0_DOMAIN_BASE64} ${AUTH0_CLIENT_ID_BASE64} ${AUTH0_AUDIENCE_BASE64}' < "$template" > "$target"
