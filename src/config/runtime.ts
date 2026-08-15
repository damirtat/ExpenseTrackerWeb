export interface ExpenseTrackerRuntimeConfiguration {
  apiBaseUrl?: string
  auth0Domain?: string
  auth0ClientId?: string
  auth0Audience?: string
}

declare global {
  interface Window {
    __expenseTrackerRuntimeConfig?: ExpenseTrackerRuntimeConfiguration
  }
}

export const runtimeConfiguration = window.__expenseTrackerRuntimeConfig ?? {}

export function configuredValue(runtimeValue: string | undefined, buildTimeValue: string | undefined) {
  if (hasConfiguredValue(runtimeValue)) {
    return runtimeValue.trim()
  }

  if (hasConfiguredValue(buildTimeValue)) {
    return buildTimeValue.trim()
  }

  return undefined
}

function hasConfiguredValue(value: string | undefined): value is string {
  return typeof value === 'string' && value.trim().length > 0
}
