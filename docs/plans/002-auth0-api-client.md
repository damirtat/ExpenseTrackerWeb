# Plan: Auth0 and authenticated API client

## Goal

Connect the React client to Auth0 and establish the smallest verified protected API request.

## Scope

- Auth0 SPA provider configured from environment variables.
- Sign-in, sign-out, loading, and missing-configuration states.
- Access-token-bearing request helper.
- `GET /api/household/me` as the initial protected API connection.

## Acceptance criteria

- Without Auth0 configuration, the app explains what is missing and remains runnable.
- With valid configuration, a user can sign in and sign out.
- Authenticated requests include an Auth0 bearer token.
- `npm.cmd run lint`, `npm.cmd run build`, and `npm.cmd audit --omit=dev` pass.

## Not in scope

- Expense creation, routes, dashboard data, or category and budget screens.
- Auth0 tenant creation or production callback URLs.
