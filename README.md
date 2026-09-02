# 👑 Gezellig Royal Desserts - Website & Free Hosting Guide

This repository contains the complete, high-performance website for **Gezellig Royal Desserts**, designed specifically for **GitHub Pages** free static web hosting with custom domain support.

---

## 🚀 How to Host on GitHub Pages (100% Free Hosting)

### Step 1: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name your repository (e.g., `gezellig-royal` or `gezelligroyal`).
3. Set visibility to **Public** (required for free GitHub Pages).
4. Click **Create repository**.

### Step 2: Push Your Code to GitHub
Run the following commands in your terminal inside this project folder:

```bash
git init
git add .
git commit -m "Initial commit for Gezellig Royal website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.name.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. On GitHub, navigate to your repository **Settings** tab.
2. In the left sidebar, click **Pages** (under *Code and automation*).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` / `(root)`.
4. Click **Save**.
5. Your site will automatically build and go live at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`!

---

## 🌐 Connecting Your Custom Domain (gezelligroyal.com / www.gezelligroyal.com)

### 1. CNAME File
The `CNAME` file in this repository is set to:
```
www.gezelligroyal.com
```

### 2. DNS Settings in Hostinger
Add the following DNS records in Hostinger DNS Zone Manager:

#### A Records (For apex domain `gezelligroyal.com`):
- **Type**: `A` | **Name**: `@` | **Points to**: `185.199.108.153`
- **Type**: `A` | **Name**: `@` | **Points to**: `185.199.109.153`
- **Type**: `A` | **Name**: `@` | **Points to**: `185.199.110.153`
- **Type**: `A` | **Name**: `@` | **Points to**: `185.199.111.153`

#### CNAME Record (For `www.gezelligroyal.com`):
- **Type**: `CNAME` | **Name**: `www` | **Points to**: `pavandange007.github.io`


### 3. Enforce HTTPS on GitHub
In your GitHub Repo **Settings** -> **Pages**:
- Check the box **Enforce HTTPS** (GitHub provides free SSL certificates automatically).

---

## 🎨 Local Preview
To test locally, open `index.html` directly in your browser or run:
```bash
npx serve .
```
or
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.
