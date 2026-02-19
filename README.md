# PLWebApp

A full-stack web application for browsing and managing Premier League player statistics. Built with Angular, Spring Boot, and PostgreSQL.

**Live Demo:** [pl-web-app-ten.vercel.app](https://pl-web-app-ten.vercel.app)


*Note: Render may cold start. Allow up to a minute or two.*

---

## Features

- Frontend: Angular
- Backend: Spring Boot
- Database: PostgreSQL
- Jobs: Scheduled daily reset to the original dataset

---

## Deployment

| Service | Provider | URL |
|---------|----------|-----|
| Frontend | Vercel | Auto-deployed on push to `main` |
| Backend | Render | Auto-deployed on push to `main` |
| Database | Neon | Managed PostgreSQL |

### Environment Variables (Backend)

Set the following on Render:

```
DATABASE_URL      = jdbc:postgresql://<neon-host>/neondb?sslmode=require&channel_binding=require
DATABASE_USER     = <neon-username>
DATABASE_PASS     = <neon-password>
```
