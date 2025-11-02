# 🚀 Madupa Dilshan - Portfolio Website# 


A modern, responsive personal portfolio website showcasing my skills, projects, certifications, and experience as a Cloud & DevOps Enthusiast, MERN-Stack Developer, and Network Technologist.## Project info







## ✨ FeaturesThere are several ways of editing your application.



- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations**Use Lovable**

- 🌓 **Dark/Light Mode** - Toggle between dark and light themes

- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)Simply visit the [Lovable Project](https://lovable.dev/projects/75158207-e15e-43d7-bb67-aec50decbb38) and start prompting.

- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times

- 🎯 **Interactive Sections** - Smooth scrolling navigation with active section highlightingChanges made via Lovable will be committed automatically to this repo.

- 🏆 **Dynamic Certificates** - Showcase certifications with verification links

- 💼 **Project Showcase** - Display projects with live demos and source code links**Use your preferred IDE**

- 📧 **Contact Form** - EmailJS integration for direct messaging

- 🔝 **Back to Top** - Quick navigation buttonIf you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

- 🎭 **Floating Badges** - Animated certification badges on hero section

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

## 🛠️ Technologies Used

Follow these steps:

### Frontend

- **React 18** - Modern React with hooks```sh

- **TypeScript** - Type-safe code# Step 1: Clone the repository using the project's Git URL.

- **Vite** - Next-generation frontend toolinggit clone <YOUR_GIT_URL>

- **Tailwind CSS** - Utility-first CSS framework

- **shadcn/ui** - High-quality React components# Step 2: Navigate to the project directory.

cd <YOUR_PROJECT_NAME>

### Libraries & Tools

- **Lucide React** - Beautiful icon library# Step 3: Install the necessary dependencies.

- **React Router DOM** - Client-side routingnpm i

- **EmailJS** - Email service integration

- **Typewriter Effect** - Animated text effects# Step 4: Start the development server with auto-reloading and an instant preview.

- **React Hook Form** - Form handlingnpm run dev

- **Zod** - Schema validation```

- **TanStack Query** - Data fetching and caching

**Edit a file directly in GitHub**

## 🚀 Getting Started

- Navigate to the desired file(s).

### Prerequisites- Click the "Edit" button (pencil icon) at the top right of the file view.

- Node.js (v16 or higher)- Make your changes and commit the changes.

- npm or yarn

**Use GitHub Codespaces**

### Installation

- Navigate to the main page of your repository.

1. **Clone the repository**- Click on the "Code" button (green button) near the top right.

```bash- Select the "Codespaces" tab.

git clone https://github.com/madupadilshan/madupa-folio-sphere-main.git- Click on "New codespace" to launch a new Codespace environment.

```- Edit files directly within the Codespace and commit and push your changes once you're done.



2. **Navigate to project directory**## What technologies are used for this project?

```bash

cd madupa-folio-sphere-mainThis project is built with:

```

- Vite

3. **Install dependencies**- TypeScript

```bash- React

npm install- shadcn-ui

```- Tailwind CSS



4. **Start development server**## How can I deploy this project?

```bash

npm run devSimply open [Lovable](https://lovable.dev/projects/75158207-e15e-43d7-bb67-aec50decbb38) and click on Share -> Publish.

```

## Can I connect a custom domain to my Lovable project?

5. **Open in browser**

```Yes, you can!

http://localhost:8080

```To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.



## 📦 Build & DeployRead more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)


### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📂 Project Structure

```
madupa-folio-sphere-main/
├── public/
│   ├── certificates/       # Certificate images
│   ├── projects/          # Project screenshots
│   ├── pho.jpg           # Profile picture
│   └── Madupa_Dilshan_CV.pdf
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Skills.tsx
│   │   ├── Certificates.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ui/           # shadcn/ui components
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── lib/
│   │   ├── assets.ts
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Update Personal Information
Edit the following files:
- `src/components/Hero.tsx` - Name, roles, bio
- `src/components/About.tsx` - About section content
- `src/components/Skills.tsx` - Skills and technologies
- `src/components/Projects.tsx` - Project list
- `src/components/Certificates.tsx` - Certificates and badges
- `src/components/Contact.tsx` - Contact information

### Add New Certificate
1. Add certificate image to `public/certificates/`
2. Update `src/components/Certificates.tsx`:
```tsx
{
  date: "Month Year",
  title: "Certificate Name",
  provider: "Provider Name",
  description: "Description",
  image: getAssetPath("/certificates/your-cert.png"),
  verifyUrl: "https://verification-url.com",
}
```

### Configure EmailJS
Follow instructions in `EMAILJS_SETUP.md`

## 🌐 Deployment

This project is configured for GitHub Pages deployment. See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Madupa Dilshan**

- GitHub: [@madupadilshan](https://github.com/madupadilshan)
- LinkedIn: [Madupa Dilshan](https://www.linkedin.com/in/madupa-dilshan-3226711b1)
- Twitter: [@MadupaDil](https://twitter.com/MadupaDil)
- Email: madupadilshan111@gmail.com

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Lucide Icons](https://lucide.dev/) - Icon library

---

⭐ If you found this helpful, please give it a star on GitHub!
