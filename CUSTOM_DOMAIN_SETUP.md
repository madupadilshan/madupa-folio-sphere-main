# 🌐 Custom Domain Setup Guide - madupadilshan.live

## සිංහලෙන් (In Sinhala)

### කරන්න ඕනේ දේවල්:

#### පියවර 1️⃣: Domain Registrar එකට Login වෙන්න

ඔබගේ domain (`madupadilshan.live`) register කරපු website එකට login වෙන්න:

- Namecheap
- GoDaddy
- Cloudflare
- Google Domains
- හෝ වෙනත් registrar එකක්

---

#### පියවර 2️⃣: DNS Settings වෙත යන්න

Domain management page එකේ **"DNS Settings"** හෝ **"Manage DNS"** option එක හොයන්න.

---

#### පියවර 3️⃣: මේ DNS Records Add කරන්න

**A Records (4 records):**

| Type | Name/Host | Value/Points to | TTL       |
| ---- | --------- | --------------- | --------- |
| A    | @         | 185.199.108.153 | Auto/3600 |
| A    | @         | 185.199.109.153 | Auto/3600 |
| A    | @         | 185.199.110.153 | Auto/3600 |
| A    | @         | 185.199.111.153 | Auto/3600 |

**CNAME Record (www subdomain):**

| Type  | Name/Host | Value/Points to         | TTL       |
| ----- | --------- | ----------------------- | --------- |
| CNAME | www       | madupadilshan.github.io | Auto/3600 |

**Important Notes:**

- `@` = root domain (madupadilshan.live)
- `www` = www subdomain (www.madupadilshan.live)
- TTL = Time To Live (Auto හෝ 3600 seconds)

---

#### පියවර 4️⃣: Previous DNS Records Remove කරන්න (If Any)

පැරණි records තියෙනවා නම් remove කරන්න:

- Old A records
- Old CNAME records pointing elsewhere
- Parking page records

---

#### පියවර 5️⃣: DNS Propagation Wait කරන්න

DNS changes propagate වෙන්න **10 minutes - 48 hours** ගතවෙයි (සාමාන්‍යයෙන් 1-2 hours).

**Check Propagation:**

- https://www.whatsmydns.net/
- Domain name: `madupadilshan.live`
- Type: `A`

---

#### පියවර 6️⃣: GitHub Pages Custom Domain Enable කරන්න

1. Repository එකට යන්න: https://github.com/madupadilshan/madupa-folio-sphere-main
2. **Settings** → **Pages**
3. **"Custom domain"** section එක හොයන්න
4. Type: `madupadilshan.live`
5. **Save** click කරන්න
6. **"Enforce HTTPS"** checkbox check කරන්න (DNS verify වුණාට පස්සේ)

---

#### පියවර 7️⃣: Verification Wait කරන්න

GitHub Pages DNS check කරයි:

- ✅ Green checkmark = DNS correct
- ⚠️ Warning = DNS propagating
- ❌ Error = DNS incorrect

---

### 🎉 Complete වුණාම:

Your portfolio will be live at:

```
https://madupadilshan.live
https://www.madupadilshan.live
```

Both URLs will work and automatically redirect to HTTPS!

---

## In English

### Step-by-Step Instructions:

#### 1️⃣ Access Your Domain Registrar

Log in to where you registered `madupadilshan.live`:

- Namecheap, GoDaddy, Cloudflare, Google Domains, etc.

#### 2️⃣ Navigate to DNS Management

Find **"DNS Settings"** or **"Manage DNS"** in your domain control panel.

#### 3️⃣ Add These DNS Records

**Four A Records for GitHub Pages:**

```
Type: A    | Host: @   | Value: 185.199.108.153
Type: A    | Host: @   | Value: 185.199.109.153
Type: A    | Host: @   | Value: 185.199.110.153
Type: A    | Host: @   | Value: 185.199.111.153
```

**One CNAME Record for www subdomain:**

```
Type: CNAME | Host: www | Value: madupadilshan.github.io
```

#### 4️⃣ Remove Old DNS Records

Delete any existing:

- Old A records
- Conflicting CNAME records
- Domain parking records

#### 5️⃣ Wait for DNS Propagation

**Timeline:** 10 minutes to 48 hours (usually 1-2 hours)

**Check Status:**

- Visit: https://www.whatsmydns.net/
- Enter: `madupadilshan.live`
- Check: A record values match GitHub IPs

#### 6️⃣ Configure GitHub Pages

1. Go to: https://github.com/madupadilshan/madupa-folio-sphere-main/settings/pages
2. Under **"Custom domain"**, enter: `madupadilshan.live`
3. Click **"Save"**
4. Wait for DNS check to pass
5. Enable **"Enforce HTTPS"** checkbox

#### 7️⃣ Verify and Test

Once DNS verification succeeds:

- ✅ Visit: https://madupadilshan.live
- ✅ Visit: https://www.madupadilshan.live
- ✅ Both should show your portfolio
- ✅ HTTP should redirect to HTTPS

---

## 🔧 Common DNS Provider Instructions

### Namecheap:

1. Dashboard → Domain List → Manage
2. Advanced DNS tab
3. Add A Records and CNAME Record
4. Delete parking page records

### GoDaddy:

1. My Products → Domains → DNS
2. Add A Records (4) and CNAME (1)
3. Remove default parking records

### Cloudflare:

1. Select your domain
2. DNS → Records
3. Add A records (Proxy status: Proxied ON)
4. Add CNAME record
5. SSL/TLS → Full (strict)

### Google Domains:

1. My Domains → Manage → DNS
2. Custom resource records
3. Add A records and CNAME

---

## ✅ Verification Checklist

- [ ] 4 A records added with GitHub IPs
- [ ] 1 CNAME record added (www → madupadilshan.github.io)
- [ ] Old DNS records removed
- [ ] DNS propagation checked (whatsmydns.net)
- [ ] Custom domain saved in GitHub Pages settings
- [ ] DNS verification passed (green checkmark)
- [ ] HTTPS enforced
- [ ] Website accessible at https://madupadilshan.live
- [ ] www subdomain works

---

## 🆘 Troubleshooting

### Issue: DNS Not Propagating

**Solution:** Wait longer (up to 48 hours), clear DNS cache:

```cmd
ipconfig /flushdns
```

### Issue: GitHub Says "DNS Error"

**Solution:**

- Double-check all 4 A record IPs
- Ensure CNAME points to `madupadilshan.github.io` (no https://)
- Wait for full DNS propagation

### Issue: HTTPS Not Working

**Solution:**

- Wait for DNS verification to pass first
- Then enable "Enforce HTTPS" in GitHub Pages settings
- Can take additional 24 hours for SSL certificate

### Issue: Shows 404 Error

**Solution:**

- Check CNAME file exists in repository (public/CNAME)
- Verify custom domain is saved in GitHub Pages settings
- Wait for deployment to complete

### Issue: Old Site Still Showing

**Solution:**

- Clear browser cache (Ctrl + Shift + R)
- Use incognito mode to test
- Check different device/network

---

## 📊 DNS Record Reference

**GitHub Pages A Record IPs:**

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Target:**

```
madupadilshan.github.io
```

---

## 🎯 What We Already Did

✅ Created `public/CNAME` file with `madupadilshan.live`
✅ Updated `vite.config.ts` to use root path (`/`)
✅ Updated router to remove basename
✅ Deployed changes to GitHub

---

## 📝 Next Steps (YOU Need to Do)

1. **Go to your domain registrar** (where you bought madupadilshan.live)
2. **Add the DNS records** listed above (4 A records + 1 CNAME)
3. **Wait 1-2 hours** for DNS propagation
4. **Configure GitHub Pages** custom domain setting
5. **Enable HTTPS** after DNS verification

---

## 🌐 Final Result

Once complete, your portfolio will be accessible at:

- https://madupadilshan.live ✨
- https://www.madupadilshan.live ✨
- Both with SSL/HTTPS security 🔒

The old URL will still work:

- https://madupadilshan.github.io/madupa-folio-sphere-main/

---

**Need Help?** Check your registrar's documentation for DNS management:

- Namecheap: https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/
- GoDaddy: https://www.godaddy.com/help/add-an-a-record-19238
- Cloudflare: https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/
