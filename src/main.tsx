import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { ConfigurationRequiredApp } from './App.tsx'
import { auth0Configuration } from './config/auth0.ts'
import { AuthenticatedApp } from './features/auth/AuthenticatedApp.tsx'

const queryClient = new QueryClient()

const app = auth0Configuration ? (
  <Auth0Provider
    domain={auth0Configuration.domain}
    clientId={auth0Configuration.clientId}
    authorizationParams={{
      audience: auth0Configuration.audience,
      redirect_uri: window.location.origin,
    }}
  >
    <AuthenticatedApp />
  </Auth0Provider>
) : <ConfigurationRequiredApp />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>{app}</QueryClientProvider>
  </StrictMode>,
)
