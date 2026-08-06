# Expense Tracker Web

Desktop-first React client for the Expense Tracker API.

## Local development

```powershell
Copy-Item .env.example .env.local
npm.cmd install
npm.cmd run dev
```

`VITE_API_BASE_URL` points to the API base URL. No secrets belong in this repository.

## Commands

```powershell
npm.cmd run lint
npm.cmd run build
```

## Documentation

See [docs/README.md](docs/README.md) for the roadmap, implementation record, and milestone plans.

## Deliberate bootstrap boundaries

- The app shell is present, but it does not yet authenticate or call the API.
- React Router is deferred because the currently available release line is flagged by
  `npm audit`. The initial shell does not need client-side routing yet.
