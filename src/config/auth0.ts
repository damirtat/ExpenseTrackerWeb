import { configuredValue, runtimeConfiguration } from './runtime'

const domain = configuredValue(runtimeConfiguration.auth0Domain, import.meta.env.VITE_AUTH0_DOMAIN)
const clientId = configuredValue(runtimeConfiguration.auth0ClientId, import.meta.env.VITE_AUTH0_CLIENT_ID)
const audience = configuredValue(runtimeConfiguration.auth0Audience, import.meta.env.VITE_AUTH0_AUDIENCE)

export const auth0Configuration = domain && clientId && audience
  ? { domain, clientId, audience }
  : undefined
