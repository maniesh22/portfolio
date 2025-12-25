# Manish Prajapati — Portfolio (generated)

This repository is a Vite + React + TypeScript portfolio starter tailored to Manish's resume. It includes:
- React + TypeScript, Vite, TailwindCSS, Framer Motion
- Routing with React Router, sample pages (Home / Projects / Contact)
- Resume PDF included at `/public/Manish_Prajapati_Resume.pdf` (sourced from uploaded resume). fileciteturn0file0

## Quick start

1. Install Node.js (16 or 18 LTS) and npm.
2. Run:
```bash
./install.sh
npm run dev
```

### Scripts
- `npm run dev` — starts dev server
- `npm run build` — builds static site to `dist/`
- `npm run start` — serves the production build (`vite preview`)
- `npm run lint` — runs ESLint
- `npm run format` — runs Prettier
- `npm run test` — run unit tests (vitest)
- `npm run zip` — creates a ZIP of the project (helper script)

### Deploy (GitHub Pages)
Set `homepage` in `package.json` (replace `<USERNAME>` and `<REPO_NAME>`). GitHub Actions workflow included in `.github/workflows/deploy.yml` will build and deploy `dist/` to GitHub Pages.

### Notes / Limitations
- This environment cannot install Node packages (no network). The generated ZIP **does not** contain `node_modules`. Please run `npm ci` locally to install dependencies.
- If you require an offline ZIP with `node_modules` included, I can provide instructions to create it on your machine, or produce a GitHub Actions workflow to create an artifact containing `node_modules` in CI.

