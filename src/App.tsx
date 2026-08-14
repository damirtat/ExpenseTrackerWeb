import { apiBaseUrl } from './config/api'
import './index.css'

export function ConfigurationRequiredApp() {
  return (
    <main className="status-screen">
      <section className="setup-panel status-panel" aria-labelledby="setup-title">
        <p className="panel-kicker">Configuration needed</p>
        <h1 id="setup-title">Ready to connect your account.</h1>
        <p>Add the Auth0 domain, client ID, and API audience to <code>.env.local</code>, then restart the development server.</p>
        <dl className="setup-details">
          <div>
            <dt>API base URL</dt>
            <dd>{apiBaseUrl}</dd>
          </div>
          <div>
            <dt>Expected audience</dt>
            <dd>https://expense-tracker-api</dd>
          </div>
        </dl>
      </section>
    </main>
  )
}
