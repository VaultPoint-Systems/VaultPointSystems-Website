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
- Deploy to Pages manually: `npm run pages:deploy`

> If you already have Cloudflare Pages connected to this repository, pushes to `main` will auto-deploy and you do not need to run `npm run pages:deploy`.

If you do use `npm run pages:deploy`, make sure the Cloudflare Pages project exists in your account. Wrangler will prompt to create a project if the configured project name is not found. For non-interactive use, set the correct Pages project name in `wrangler.toml` or pass `--project-name YOUR_PROJECT_NAME`.
