# 🏃 Aakash's Marathon Plan

A personalised 20-week marathon training plan built with React + Vite, deployed via GitHub Pages.

## Features
- 20-week structured plan (Base → Build → Peak → Taper → Race Week)
- Runna-style run detail modal with full workout breakdown
- Post-run feedback logger with AI coaching analysis
- Auto-advances to next week when all runs are completed
- All data persisted in `localStorage` — survives page refreshes/closes
- Fully responsive mobile design

## Live App
> **https://YOUR_USERNAME.github.io/marathon-plan/**

---

## 🚀 How to Deploy to GitHub Pages

### Step 1 — Create the repo
1. Go to [github.com](https://github.com) → **New repository**
2. Name it exactly: `marathon-plan`
3. Set to **Public**
4. Do NOT initialise with README (you'll push this code)
5. Click **Create repository**

### Step 2 — Enable GitHub Pages
1. In your repo, go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### Step 3 — Push the code
```bash
# In this project folder:
git init
git add .
git commit -m "feat: initial marathon plan app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/marathon-plan.git
git push -u origin main
```

### Step 4 — Wait ~2 minutes
GitHub Actions will automatically build and deploy. Watch progress under the **Actions** tab.

Your app will be live at:
**https://YOUR_USERNAME.github.io/marathon-plan/**

---

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173/marathon-plan/

## Build

```bash
npm run build
```

Output goes to `/dist` — this is what GitHub Pages serves.
