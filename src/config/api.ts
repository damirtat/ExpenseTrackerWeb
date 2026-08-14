const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim()

export const apiBaseUrl = (configuredBaseUrl || 'http://localhost:5000').replace(/\/$/, '')
