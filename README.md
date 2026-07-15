# Madupa Dilshan — Portfolio

A fast, responsive personal portfolio for **Madupa Dilshan** — Cloud & DevOps enthusiast,
MERN-stack developer, and Network Technology student. Single-page site with animated
sections, a certificate showcase, and a contact form.

🌐 **Live:** [madupadilshan.live](https://madupadilshan.live/)

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tooling and dev server
- **Tailwind CSS** — styling with an HSL design-token system (see `src/index.css`)
- **Framer Motion** — section and card animations
- **Lucide React** — icons
- **EmailJS** — contact-form delivery
- Two [shadcn/ui](https://ui.shadcn.com/) primitives (`toast`, `toaster`) for notifications

## Getting Started

Requires **Node.js 18+** and npm.

```sh
# 1. Install dependencies
npm install

# 2. (Optional) configure the contact form
cp .env.example .env   # then fill in your EmailJS credentials

# 3. Start the dev server (http://localhost:8080)
npm run dev
```

## Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start the Vite dev server         |
| `npm run build`     | Production build to `dist/`       |
| `npm run build:dev` | Development-mode build            |
| `npm run preview`   | Preview the production build      |
| `npm run lint`      | Run ESLint                        |

## Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/). If no credentials are set, it
gracefully falls back to opening the visitor's email client with a pre-filled message, so
the form always works. To send messages directly through EmailJS instead, create a free
account and set these variables in a `.env` file (see `.env.example`):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template should expose `from_name`, `from_email`, `subject`, `message`, and
`to_name` fields.

## Editing Content

All content is plain data arrays inside the section components — no CMS required:

| Section      | File                              |
| ------------ | --------------------------------- |
| Hero / bio   | `src/components/Hero.tsx`         |
| About        | `src/components/About.tsx`        |
| Education    | `src/components/Education.tsx`    |
| Skills       | `src/components/Skills.tsx`       |
| Certificates | `src/components/Certificates.tsx` |
| Projects     | `src/components/Projects.tsx`     |
| Contact      | `src/components/Contact.tsx`      |

Images, the CV, and other static assets live in `public/`. Reference them through
`getAssetPath()` (`src/lib/assets.ts`) so paths resolve correctly under any base URL.

## Project Structure

```
├── public/                 # Static assets (images, CV, favicon, CNAME, robots.txt)
├── src/
│   ├── components/         # Section + layout components
│   │   └── ui/            # toast, toaster (shadcn/ui)
│   ├── hooks/             # use-toast
│   ├── lib/              # assets.ts, utils.ts
│   ├── pages/            # Index, NotFound
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css         # Tailwind layers + design tokens
├── index.html
├── tailwind.config.ts
└── vite.config.ts
```

## Deployment

Every push to `main` is built and deployed to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The site is served from the
custom domain in `public/CNAME` (`madupadilshan.live`).

## Author

**Madupa Dilshan**
[GitHub](https://github.com/madupadilshan) ·
[LinkedIn](https://www.linkedin.com/in/madupa-dilshan-3226711b1) ·
madupadilshan111@gmail.com

## License

Released under the [MIT License](LICENSE).
