import { authenticatedRequest } from './authenticated-request'

export interface CurrentHousehold {
  householdId: number
  name: string
  myRole: string
  members: Array<{
    userId: number
    name: string
    email: string
    role: string
  }>
}

export function getCurrentHousehold(getAccessToken: () => Promise<string>) {
  return authenticatedRequest<CurrentHousehold>('/api/household/me', getAccessToken)
}
