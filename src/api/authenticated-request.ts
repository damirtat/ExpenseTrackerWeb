import { apiBaseUrl } from '../config/api'

type AccessTokenProvider = () => Promise<string>

export async function authenticatedRequest<T>(
  path: string,
  getAccessToken: AccessTokenProvider,
  init?: RequestInit,
): Promise<T> {
  const accessToken = await getAccessToken()
  const headers = new Headers(init?.headers)
  headers.set('Accept', 'application/json')
  headers.set('Authorization', `Bearer ${accessToken}`)

  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers,
  })

  if (!response.ok) {
    throw new Error(`The API request failed with status ${response.status}.`)
  }

  return response.json() as Promise<T>
}
