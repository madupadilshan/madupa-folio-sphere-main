# 🚀 GitHub Pages Enable කරන්නේ කොහොමද

## ⚠️ දැන් තියෙන Issue:

```
404 - Page Not Found
```

**හේතුව:** GitHub Pages තවම enable කරලා නැති නිසා

---

## ✅ නිවැරදි පියවර (Step by Step with Screenshots Reference)

### පියවර 1️⃣: Pages Settings වෙත යන්න

**Option A - Direct Link (ඉක්මනින්):**

```
https://github.com/madupadilshan/madupa-folio-sphere-main/settings/pages
```

මේ link එක browser එකේ copy කරලා open කරන්න.

**Option B - Manually Navigate:**

1. Repository එකට යන්න: `github.com/madupadilshan/madupa-folio-sphere-main`
2. ඉහලින් right side එකේ **"Settings"** tab click කරන්න (⚙️ icon)
3. වම් side menu එකේ **"Pages"** click කරන්න
   - ⚠️ **NOT "Runners"!** (Image 1 එකේ තියෙන්නේ වැරදි page එක)
   - "Pages" එක පහළට scroll කරන්න Code and automation section එකේ

---

### පියවර 2️⃣: Source Configure කරන්න

Pages settings page එකේ:

1. **"Build and deployment"** section එක හොයන්න
2. **"Source"** යටතේ dropdown menu එක click කරන්න
3. Options දෙකක් පෙන්වයි:
   - ❌ Deploy from a branch (මේක select කරන්න එපා)
   - ✅ **GitHub Actions** (මේක select කරන්න!)
4. **GitHub Actions** select කරපු ගමන්ම automatically save වෙයි

---

### පියවර 3️⃣: Workflow Trigger වෙනවා බලන්න

GitHub Actions select කරපු ගමන්ම:

1. **Actions** tab එකට යන්න:

   ```
   https://github.com/madupadilshan/madupa-folio-sphere-main/actions
   ```

2. "Deploy to GitHub Pages" workflow එක automatically run වෙන්න පටන් ගන්නවා

3. Workflow status බලන්න:

   - 🟡 **Yellow dot** = Running (wait කරන්න)
   - ✅ **Green checkmark** = Success (complete!)
   - ❌ **Red X** = Failed (error තියෙනවා)

4. Deployment time: සාමාන්‍යයෙන් **1-3 minutes**

---

### පියවර 4️⃣: Website Open කරන්න

Workflow complete වුණාම (green checkmark):

**Your Live Portfolio:**

```
https://madupadilshan.github.io/madupa-folio-sphere-main/
```

මේ link එක browser එකේ open කරන්න!

---

## 🔍 Troubleshooting

### Issue 1: "Build and deployment" section එක නැහැ

**විසඳුම:** Repository එක public දැයි check කරන්න

- Settings → General → Danger Zone → Change visibility → Public

### Issue 2: Workflow run වෙන්නේ නැහැ

**විසඳුම:** Manually trigger කරන්න

1. Actions tab → "Deploy to GitHub Pages"
2. "Run workflow" button → "Run workflow"

### Issue 3: තවමත් 404 error

**විසඳුම:**

1. Actions tab එකේ workflow complete වුණාද බලන්න (green checkmark)
2. Browser cache clear කරන්න (Ctrl + Shift + R)
3. 2-3 minutes wait කරලා refresh කරන්න
4. Pages settings එකේ website URL එක correct ද බලන්න

### Issue 4: Styles load වෙන්නේ නැහැ (blank page)

**විසඳුම:** Already fixed! `vite.config.ts` හරි විදියට configure කරලා තියෙනවා.

---

## 📊 Verification Checklist

Enable කරලා තියෙනවද verify කරන්න:

- [ ] Settings → Pages page එකට ගියා (NOT Runners!)
- [ ] Source = "GitHub Actions" select කරලා තියෙනවා
- [ ] Actions tab එකේ workflow running/completed
- [ ] Green checkmark පෙන්වනවා (success)
- [ ] Website link open වෙනවා (404 නැහැ)

---

## 🎯 Summary (සාරාංශය)

**වැරදි පියවර (Image 1):**

- ❌ Settings → Actions → Runners (මේකට යන්න එපා!)

**නිවැරදි පියවර:**

- ✅ Settings → **Pages** → Source → **GitHub Actions**

**Result:**

- 🌐 Live website: `https://madupadilshan.github.io/madupa-folio-sphere-main/`

---

## 💡 Quick Fix Commands

ඔබට terminal එකෙන් GitHub Pages status check කරන්න පුළුවන්:

```powershell
# Repository එකට යන්න
Set-Location "c:\Users\Madupa Dilshan\Downloads\madupa-folio-sphere-main\madupa-folio-sphere-main"

# Latest workflows බලන්න
gh run list --limit 5
```

(GitHub CLI install කරලා නැත්නම් browser එකෙන්ම කරන්න)

---

## 📞 Need Help?

Still 404? මේ තොරතුරු මට කියන්න:

1. Actions tab එකේ workflow status එක මොකක්ද? (Yellow/Green/Red?)
2. Pages settings එකේ "Source" එකේ මොකද select වෙලා තියෙන්නෙ?
3. Repository එක public නේද?

---

**මතක තබා ගන්න:**

- "Runners" page එක ඔබට අවශ්‍ය නෑ (self-hosted runners සඳහා)
- "Pages" page එක තමයි deploy කරන්න ඕනේ
- GitHub Actions = Automatic deployment ✅
