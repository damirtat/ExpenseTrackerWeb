const decodeRuntimeValue = (value) => new TextDecoder().decode(
  Uint8Array.from(atob(value), (character) => character.charCodeAt(0)),
);

window.__expenseTrackerRuntimeConfig = {
  apiBaseUrl: decodeRuntimeValue("${API_BASE_URL_BASE64}"),
  auth0Domain: decodeRuntimeValue("${AUTH0_DOMAIN_BASE64}"),
  auth0ClientId: decodeRuntimeValue("${AUTH0_CLIENT_ID_BASE64}"),
  auth0Audience: decodeRuntimeValue("${AUTH0_AUDIENCE_BASE64}"),
};
