# Implementation Record

Chronological record of meaningful product and implementation changes.

## 2026-08-05 - Web-client bootstrap

### Changed

- Created the standalone React client repository.
- Added a desktop-first application shell guided by the approved expense-tracker wireframes.
- Added environment-based API base URL configuration and project documentation.

### Validation

- `npm.cmd run lint` passed.
- `npm.cmd run build` passed.

### Follow-up

- Implement Auth0 before calling protected API endpoints.
- Implement the expense-entry vertical slice before broader dashboard features.

## 2026-08-06 - Auth0 and API-client foundation

### Changed

- Added Auth0 SPA configuration through `.env.local`, without committing credentials or secrets.
- Added sign-in, sign-out, session-loading, and configuration-required states.
- Added a typed authenticated request helper and a current-household connection request to `GET /api/household/me`.

### Required local configuration

- Create an Auth0 Single Page Application.
- Add `http://localhost:5173` as a callback URL, logout URL, and web origin.
- Set the Auth0 API audience to `https://expense-tracker-api`, matching the backend.

### Follow-up

- Run the browser-to-API connection after Auth0 is configured and the local API database has been freshly initialized.
- Build the expense-entry vertical slice on top of the authenticated client.

## 2026-08-15 - K3s image delivery prepared

### Changed

- Added a multi-stage Docker image that serves the Vite build with unprivileged NGINX
  on port 8080.
- Added immutable GHCR image publishing after `main` merges; the workflow has no
  Kubernetes credentials and does not deploy directly.
- Added runtime public configuration so one image can receive the API and Auth0
  endpoints from its Kubernetes environment instead of baking them in at build time.

### Validation

- The local lint and production-build commands remain the validation contract for the
  static client. Container-image validation requires a running local Docker daemon.

### Follow-up

- Supply the public runtime configuration in the development workload.
- Configure the final development web URL in Auth0 callback, logout, and web-origin
  settings.
