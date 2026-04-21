# Aaryan Portfolio (React + Vite)

Modern recruiter-facing portfolio built with React, TypeScript, Framer Motion, and custom visual styling.

## Local development

1. Install dependencies:
   npm install
2. Start dev server:
   npm run dev
3. Build production bundle:
   npm run build

## Free deployment option: GitHub Pages

This project already includes deployment scripts.

1. Create a new GitHub repository named react-portfolio (or any name you prefer).
2. Update the homepage value in package.json to:
   https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME
3. Initialize and push:
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
4. Deploy:
   npm run deploy

Your live URL will be:
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME

## Notes

- Resume file is served from public/Aaryan_Agarwal_RA.pdf
- For best recruiter impact, keep project links and LinkedIn URL updated in src/App.tsx
