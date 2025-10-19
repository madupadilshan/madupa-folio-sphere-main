# EmailJS Setup Instructions

## 📧 Setting Up Contact Form Email Integration

මෙම portfolio එකේ contact form එක EmailJS service එක use කරනවා emails යවන්න. මෙහෙම setup කරන්න:

### 1️⃣ EmailJS Account එකක් Create කරන්න

1. Visit: https://www.emailjs.com/
2. Click **"Sign Up"** and create a free account
3. Verify your email address

### 2️⃣ Email Service එකක් Add කරන්න

1. EmailJS dashboard එකේ **"Email Services"** වලට යන්න
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions
5. **Service ID** එක copy කරන්න (e.g., `service_xxxxxxx`)

### 3️⃣ Email Template එකක් Create කරන්න

1. Go to **"Email Templates"** tab
2. Click **"Create New Template"**
3. Use this template structure:

**Template Name:** `contact_form`

**Subject:** `New Message from {{from_name}}`

**Content:**

```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. **Template ID** එක copy කරන්න (e.g., `template_xxxxxxx`)

### 4️⃣ Public Key එක ගන්න

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (e.g., `xxxxxxxxxxxx`)
3. Copy it

### 5️⃣ Portfolio Code එකේ Update කරන්න

1. Open: `src/components/Contact.tsx`
2. Line 28-30 වල මේවා replace කරන්න:

```typescript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

**Example:**

```typescript
const serviceId = 'service_abc123'
const templateId = 'template_xyz789'
const publicKey = 'abcdefg1234567'
```

### 6️⃣ Test කරන්න

1. Save the file
2. Browser එක refresh කරන්න
3. Contact form එක fill කරලා submit කරන්න
4. Your email inbox එක check කරන්න!

---

## 🆓 Free Tier Limits

EmailJS Free plan එකේ:

- **200 emails/month**
- Perfect for portfolio websites!

---

## 🔒 Security Note

- Public Key එක code එකේ තියෙන එක safe ය (එය "public" කියලා හැඳින්වෙන්නෙ එයාලගෙම)
- Never share your Private Key!
- EmailJS automatically prevents spam

---

## 🐛 Troubleshooting

**Email නොයන්නෙ නම්:**

1. Browser console එක check කරන්න errors වලට
2. EmailJS dashboard එකේ Service එක properly connected ද බලන්න
3. Template variables (`{{from_name}}`, `{{from_email}}`, etc.) correctly set කරලා තියෙනවද check කරන්න
4. Free tier limit එක exceed වෙලා නැද්ද බලන්න

**Still not working?**

- EmailJS documentation: https://www.emailjs.com/docs/
- Check EmailJS dashboard logs

---

## 🎉 Done!

දැන් ඔබේ portfolio contact form එක fully functional! 🚀
