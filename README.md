# Amin Shabaninejad — portfolio

Single-page Next.js site (static export-friendly).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Editing

- **All copy, links, projects, skills:** `src/content/profile.ts`
- **Styles / design tokens:** `src/app/globals.css` (tokens at the top)
- **Case-study screenshots:** `public/shots/` — each case in `profile.ts` points at its images
- **Portrait:** add `public/assets/portrait.jpg` (square) and set `portrait: "/assets/portrait.jpg"` in `profile.ts`
- **CV:** replace `public/Amin_Shabaninejad_CV.pdf`

## Deploy

Pushing to `main` deploys automatically to https://aminshabani94.github.io via GitHub Actions
(`.github/workflows/deploy.yml`). The build is a static export written to `out/`.
