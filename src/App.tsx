import { apiBaseUrl } from './config/api'
import './index.css'

const navigationItems = ['Overview', 'Expenses', 'Categories & budgets', 'Settings']

function App() {
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
                <button type="button" className={index === 0 ? 'nav-item nav-item-active' : 'nav-item'}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <span className="status-dot" aria-hidden="true" />
          <span>Local setup</span>
        </div>
      </aside>

      <main id="overview" className="workspace">
        <header className="workspace-header">
          <div>
            <p className="eyebrow">Web client foundation</p>
            <h1>Ready for your expenses</h1>
          </div>
          <button type="button" className="primary-action" disabled>
            Add expense
          </button>
        </header>

        <section className="setup-panel" aria-labelledby="setup-title">
          <p className="panel-kicker">Bootstrap complete</p>
          <h2 id="setup-title">The client shell is in place.</h2>
          <p>
            The next milestone will connect Auth0 and the Expense Tracker API, then implement the approved expense-entry flow.
          </p>

          <dl className="setup-details">
            <div>
              <dt>API base URL</dt>
              <dd>{apiBaseUrl}</dd>
            </div>
            <div>
              <dt>Design target</dt>
              <dd>Desktop-first expense entry</dd>
            </div>
          </dl>
        </section>
      </main>
    </div>
  )
}

export default App
