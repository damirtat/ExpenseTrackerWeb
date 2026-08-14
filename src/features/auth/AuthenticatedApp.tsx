import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getCurrentHousehold } from '../../api/household'
import { apiBaseUrl } from '../../config/api'

const navigationItems = ['Overview', 'Expenses', 'Categories & budgets', 'Settings']

export function AuthenticatedApp() {
  const { error, getAccessTokenSilently, isAuthenticated, isLoading, loginWithRedirect, logout, user } = useAuth0()
  const householdQuery = useQuery({
    queryKey: ['current-household'],
    queryFn: () => getCurrentHousehold(getAccessTokenSilently),
    enabled: isAuthenticated,
    retry: false,
  })
  const householdErrorMessage = householdQuery.error instanceof Error
    ? householdQuery.error.message
    : 'An unexpected error occurred while opening your household.'

  if (isLoading) {
    return <StatusScreen title="Checking your session" detail="One moment while we restore your sign-in." />
  }

  if (error) {
    return <StatusScreen title="We could not sign you in" detail={error.message} />
  }

  if (!isAuthenticated) {
    return (
      <StatusScreen
        title="Your expenses, in one place"
        detail="Sign in to create your private household and begin tracking expenses."
        action={<button type="button" className="primary-action" onClick={() => void loginWithRedirect()}>Sign in</button>}
      />
    )
  }

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <a className="brand" href="#overview">
          <span className="brand-mark" aria-hidden="true">E</span>
          <span>Expense Tracker</span>
        </a>

        <nav>
          <ul>
            {navigationItems.map((item, index) => (
              <li key={item}>
                <button type="button" className={index === 0 ? 'nav-item nav-item-active' : 'nav-item'} disabled={index !== 0}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <span className="status-dot" aria-hidden="true" />
          <span>{user?.email || 'Signed in'}</span>
        </div>
      </aside>

      <main id="overview" className="workspace">
        <header className="workspace-header">
          <div>
            <p className="eyebrow">Overview</p>
            <h1>Welcome back{user?.given_name ? `, ${user.given_name}` : ''}.</h1>
          </div>
          <button type="button" className="secondary-action" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Sign out
          </button>
        </header>

        <section className="setup-panel" aria-labelledby="connection-title">
          <p className="panel-kicker">Authenticated connection</p>
          <h2 id="connection-title">{householdQuery.isLoading ? 'Opening your household…' : householdQuery.data?.name || 'Your household'}</h2>
          {householdQuery.isError ? (
            <>
              <p>We could not open your household at {apiBaseUrl}: {householdErrorMessage}</p>
              <button type="button" className="secondary-action" onClick={() => void householdQuery.refetch()}>
                Try again
              </button>
            </>
          ) : (
            <p>
              {householdQuery.isLoading
                ? 'Your first successful API request creates your personal household.'
                : `Connected as ${householdQuery.data?.myRole}. Expense entry is the next feature.`}
            </p>
          )}
        </section>
      </main>
    </div>
  )
}

function StatusScreen({ action, detail, title }: { action?: React.ReactNode; detail: string; title: string }) {
  return (
    <main className="status-screen">
      <section className="setup-panel status-panel">
        <p className="panel-kicker">Expense Tracker</p>
        <h1>{title}</h1>
        <p>{detail}</p>
        {action}
      </section>
    </main>
  )
}
