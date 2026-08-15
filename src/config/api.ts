import { configuredValue, runtimeConfiguration } from './runtime'

const configuredBaseUrl = configuredValue(runtimeConfiguration.apiBaseUrl, import.meta.env.VITE_API_BASE_URL)

export const apiBaseUrl = (configuredBaseUrl || 'http://localhost:5000').replace(/\/$/, '')
