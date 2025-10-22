# Testimator.ai - AI Testing Automation Platform

This is a Next.js application with Vercel Analytics integration.

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Enable Vercel Analytics

1. Deploy to Vercel (or link existing project)
2. Go to your Vercel Dashboard
3. Select this project
4. Click on the **Analytics** tab
5. Click **Enable Web Analytics**

The `@vercel/analytics` package is already installed and the `<Analytics />` component is added to `app/layout.tsx`.

## Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Deploy!

Analytics will start tracking automatically once enabled in the dashboard.

## Project Structure

```
testimatorwebapp/
├── app/
│   ├── layout.tsx       # Root layout with Analytics component
│   ├── page.tsx         # Home page
│   ├── page.module.css  # Page styles
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json         # Dependencies
└── next.config.js       # Next.js configuration
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
