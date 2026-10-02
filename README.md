# jnicolow.github.io

Personal portfolio site (Vue + Quasar). Live at [jnicolow.github.io](https://jnicolow.github.io/).

## Local

```bash
npm install
npm run dev
```

Build with `npm run build` (output lands in `dist/spa`).

## Deploying to GitHub Pages

Pushing to `main` runs a GitHub Action that builds the Quasar app and publishes it. For that to work, Pages has to be set to **GitHub Actions**, not “Deploy from a branch.”

If it’s still on “Deploy from a branch” / `main`, GitHub will serve the raw source `index.html` from the repo. That file is only a Quasar shell (empty body until the build injects the app), so the live site looks blank even though the Action may have built fine. The deploy step then fails with a 404 because Actions isn’t the Pages source.

**Fix:** repo Settings → Pages → Source → **GitHub Actions**, then re-run the “Deploy Portfolio to GitHub Pages” workflow if needed.
