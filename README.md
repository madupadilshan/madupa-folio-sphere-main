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
- Two [shadcn/ui](https://ui.shadcn.com/) primitives (`toast`, `toaster`) for notifications

## Getting Started

Requires **Node.js 18+** and npm.

```sh
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:8080)
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

## Contact Form

The contact form needs no backend or configuration. On submit it opens the visitor's own
email app with a pre-filled message addressed to the site owner. To change the recipient,
edit `CONTACT_EMAIL` in `src/components/Contact.tsx`.

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
