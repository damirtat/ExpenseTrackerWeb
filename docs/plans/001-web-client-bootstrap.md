# Plan: Web Client Bootstrap

## Goal

Create a maintainable React foundation that can implement the approved desktop-first expense-tracker experience without coupling the web client to local secrets or deployment details.

## Scope

- Vite, React, TypeScript, linting, production build.
- Environment-based API base URL configuration.
- Static application shell matching the design direction.
- Roadmap and implementation-record documentation.

## Acceptance criteria

- `npm.cmd run lint` passes.
- `npm.cmd run build` passes.
- The application renders without making API calls.
- API base URL is supplied through `VITE_API_BASE_URL`.

## Not in scope

- Auth0 login or token handling.
- API requests, expense forms, routing, data caching, and persistence.
- Mobile-first optimization, household management, or deployment.
