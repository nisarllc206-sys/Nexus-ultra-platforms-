# Nexus Ultra Platforms

A Next.js web application deployable on Vercel.

## Local Development

```bash
cd Web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

### Option 1 — Automatic (via `vercel.json`)

The repository includes a `vercel.json` at the root that configures Vercel automatically:

```json
{
  "rootDirectory": "Web",
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
```

Just import the GitHub repository in Vercel — no extra settings needed.

### Option 2 — Manual Vercel Settings

If you prefer to configure via the Vercel dashboard:

| Setting | Value |
|---|---|
| Framework Preset | **Next.js** |
| Root Directory | **`Web`** (capital W) |
| Build Command | `npm run build` |
| Install Command | `npm install` |
| Output Directory | `.next` |

## Project Structure

```
Web/                  # Next.js application (Vercel root directory)
├── app/
│   ├── layout.tsx    # Root layout with Vercel Analytics
│   └── page.tsx      # Home page
├── next.config.js
├── package.json
└── tsconfig.json
vercel.json           # Vercel configuration (root directory = Web)
```

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel Analytics](https://vercel.com/analytics)
