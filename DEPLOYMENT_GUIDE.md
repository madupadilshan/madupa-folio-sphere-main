# 🚀 GitHub Pages Deployment Guide

## සිංහලෙන් (In Sinhala)

### පියවර 1: GitHub Repository එකක් සාදන්න

1. **GitHub.com** වෙත යන්න
2. ඔබගේ profile එකට යන්න
3. **"Repositories"** tab එක click කරන්න
4. **"New"** button එක click කරන්න
5. Repository name එක **"portfolio"** ලෙස තබන්න
6. **"Public"** select කරන්න
7. **"Create repository"** click කරන්න

### පියවර 2: Code GitHub එකට Upload කරන්න

Terminal එකේ මේ commands ටික execute කරන්න:

```powershell
# Repository එකට navigate කරන්න
Set-Location "c:\Users\Madupa Dilshan\Downloads\madupa-folio-sphere-main\madupa-folio-sphere-main"

# Git remote එක add කරන්න (ඔබගේ username එක use කරන්න)
git remote remove origin
git remote add origin https://github.com/madupadilshan/portfolio.git

# Changes commit කරන්න
git add .
git commit -m "Deploy portfolio to GitHub Pages"

# GitHub එකට push කරන්න
git push -u origin main
```

### පියවර 3: GitHub Pages Enable කරන්න

1. GitHub repository එකට යන්න: `https://github.com/madupadilshan/portfolio`
2. **"Settings"** tab එක click කරන්න
3. වම් side එකේ **"Pages"** option එක click කරන්න
4. **"Source"** dropdown එක click කරන්න
5. **"GitHub Actions"** select කරන්න
6. Save කරන්න

### පියවර 4: Deployment Wait කරන්න

1. Repository එකේ **"Actions"** tab එකට යන්න
2. Deployment workflow එක running වෙනවා බලන්න (yellow dot)
3. Complete වෙනකම් wait කරන්න (green checkmark)
4. Complete වුණාම website link එක පෙන්වයි

### Website Link:
```
https://madupadilshan.github.io/portfolio/
```

---

## In English

### Step 1: Create a New GitHub Repository

1. Go to **GitHub.com**
2. Click on your profile picture → **"Your repositories"**
3. Click the **"New"** button
4. Repository name: **"portfolio"**
5. Choose **"Public"**
6. Click **"Create repository"**

### Step 2: Push Code to GitHub

Run these commands in PowerShell:

```powershell
# Navigate to project directory
Set-Location "c:\Users\Madupa Dilshan\Downloads\madupa-folio-sphere-main\madupa-folio-sphere-main"

# Configure git remote
git remote remove origin
git remote add origin https://github.com/madupadilshan/portfolio.git

# Stage all changes
git add .

# Commit changes
git commit -m "Deploy portfolio to GitHub Pages"

# Push to GitHub
git push -u origin main
```

**Note:** You may be prompted to sign in to GitHub. Use your GitHub username and a Personal Access Token (not password).

### Step 3: Enable GitHub Pages

1. Go to: `https://github.com/madupadilshan/portfolio`
2. Click **"Settings"** tab
3. Click **"Pages"** in the left sidebar
4. Under **"Source"**, select **"GitHub Actions"**
5. Save the settings

### Step 4: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You'll see a workflow running (yellow circle)
3. Wait for it to complete (green checkmark)
4. Once complete, your site will be live!

### Your Live Website:
```
https://madupadilshan.github.io/portfolio/
```

---

## 🔧 Future Updates

When you make changes to your portfolio:

```powershell
# Navigate to project
Set-Location "c:\Users\Madupa Dilshan\Downloads\madupa-folio-sphere-main\madupa-folio-sphere-main"

# Stage changes
git add .

# Commit with a message
git commit -m "Update portfolio content"

# Push to GitHub
git push
```

GitHub Actions will automatically rebuild and redeploy your site!

---

## 🔐 Creating a GitHub Personal Access Token (if needed)

If git push asks for authentication:

1. Go to GitHub.com → Settings → Developer settings
2. Click **"Personal access tokens"** → **"Tokens (classic)"**
3. Click **"Generate new token"** → **"Generate new token (classic)"**
4. Give it a name like "Portfolio Deployment"
5. Check the **"repo"** scope
6. Click **"Generate token"**
7. **Copy the token** (you won't see it again!)
8. Use this token as your password when pushing

---

## ✅ Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Workflow completed successfully
- [ ] Website is live and accessible

---

## 🆘 Troubleshooting

### Issue: "remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/madupadilshan/portfolio.git
```

### Issue: Authentication failed
- Use a Personal Access Token instead of password
- Make sure your GitHub username is correct

### Issue: 404 Page Not Found
- Wait 2-3 minutes after deployment
- Clear browser cache (Ctrl + Shift + R)
- Check if GitHub Pages is enabled in Settings

### Issue: Styles not loading
- The `base: "/portfolio/"` in vite.config.ts is required
- Make sure repository name matches the base path

---

## 📱 Contact

If you need help:
- Email: madupadilshan111@gmail.com
- GitHub: [@madupadilshan](https://github.com/madupadilshan)
