# Expense Tracker Web

Desktop-first React client for the Expense Tracker API.

## Local development

```powershell
Copy-Item .env.example .env.local
npm.cmd install
npm.cmd run dev
```

`VITE_API_BASE_URL` points to the API base URL. The Auth0 SPA values are public client
configuration, not secrets, and are required before sign-in works:

- `VITE_AUTH0_DOMAIN`
- `VITE_AUTH0_CLIENT_ID`
- `VITE_AUTH0_AUDIENCE`, set to `https://expense-tracker-api`

In Auth0, create a **Single Page Application** and add `http://localhost:5173` to its
allowed callback URLs, logout URLs, and web origins. No secrets belong in this repository.

## K3s delivery

GitHub Actions builds, lints, and publishes an immutable `sha-<commit>` image to
GHCR after a merge to `main`. It has no Kubernetes credentials. A separate reviewed
commit in `ExpenseTrackerGitOps` selects an image; Argo CD then reconciles it to K3s.

The web image is environment-neutral. At container startup, it writes
`/runtime-config.js` from these public environment variables:

- `API_BASE_URL`
- `AUTH0_DOMAIN`
- `AUTH0_CLIENT_ID`
- `AUTH0_AUDIENCE`

This lets development and eventual production use the same image with their own
public endpoint settings. The values are not secrets, but they are supplied by the
Kubernetes deployment rather than committed into a built artifact.

## Commands

```powershell
npm.cmd run lint
npm.cmd run build
```

## Documentation

See [docs/README.md](docs/README.md) for the roadmap, implementation record, and milestone plans.

## Deliberate bootstrap boundaries

- The client authenticates through Auth0 and uses its access token for the current-household API request.
- React Router is deferred because the currently available release line is flagged by
  `npm audit`. The initial shell does not need client-side routing yet.
