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
