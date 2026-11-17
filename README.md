# CBM Site Framework: Check It Church

Next.js site built by CBM Agency. Deploys on Vercel.

## Reuse for a new client
1. Duplicate this repo.
2. Edit `site.config.ts` (name, colors, contact, services, pastors/team, links, give options).
3. Replace photos in `public/images/` (keep the same file names, or update the paths in the config).
4. Push to GitHub and import into Vercel.

## Run locally
npm install
npm run dev

## Structure
- `site.config.ts`: all client content + theme colors
- `app/`: pages (Home, New Here, About, Watch, Give)
- `components/`: shared nav, footer, membership drawer, photo frames
- Forms currently show a thank-you state only; connect to GoHighLevel/email before launch.
