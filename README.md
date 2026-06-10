# VaultPoint Systems Website

Landing site for VaultPoint Systems (vaultpoint.systems).

## Stack
- Next.js 15 (App Router) + React 19
- Tailwind CSS v4
- TypeScript

## Develop
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build
```bash
npm run build
npm start
```

## Deploy
Designed to deploy on Vercel, Cloudflare Pages, or any Node host. Point the
production domain (vaultpoint.systems) at the deployment.

### Cloudflare Pages
1. Create a new Pages project and connect this repository.
2. Set the framework preset to `Next.js`.
3. Use `npm install` as the install command.
4. Use `npm run build` as the build command.
5. Use `.next` as the build output directory if prompted.
6. Configure your custom domain in Cloudflare Pages and remove any old Vercel DNS records.
### Local CLI deployment with Wrangler
- Install Wrangler locally: `npm install`
- Start Pages locally: `npm run pages:dev`
- Deploy to Pages: `npm run pages:deploy`

Replace `YOUR_PAGES_PROJECT_NAME` with the Cloudflare Pages project name before deploying.
