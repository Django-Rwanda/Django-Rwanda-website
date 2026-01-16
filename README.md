# Django Rwanda Community Website

<div align="center">
  <img src="public/icon.svg" alt="Django Rwanda Logo" width="80" height="80">
  
  **Empowering African Developers Through Django**

  [![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

  [Live Demo](https://djangorwanda.dev) • [Report Bug](https://github.com/djangorwanda/Django-Rwanda-website/issues) • [Request Feature](https://github.com/djangorwanda/Django-Rwanda-website/issues)
</div>

---

## 📖 About

The Django Rwanda Community website is a modern, full-featured platform built to connect, educate, and empower African developers passionate about Django and web development. It serves as the central hub for the Django Rwanda community, featuring workshops, events, open-source projects, and resources for entrepreneurs.

### 🎯 Mission

> *Django Rwanda Community is dedicated to fostering a vibrant, inclusive ecosystem of developers across Africa. We believe in the power of community, collaboration, and open-source innovation to solve local challenges and create global opportunities.*

### 📊 Community Stats

- **500+** Community Members
- **50+** Events Hosted
- **20+** Open Source Projects

---

## ✨ Features

### 🏠 **Homepage**
- Modern hero section with animated backgrounds
- Community mission and values showcase
- Featured workshops carousel
- Upcoming events listing
- Open-source projects showcase
- Entrepreneur resources section

### 👥 **Community**
- **Join Us** - Membership registration with benefits overview
- **Code of Conduct** - Community guidelines and standards
- **Contribute** - Guidelines for contributing to the community
- **Sponsorship** - Partnership opportunities for organizations

### 📚 **Workshops & Learning**
- Comprehensive Django workshops (Beginner to Advanced)
- Workshop catalog with filtering by skill level
- Detailed workshop pages with curriculum
- Registration system for workshops

**Available Workshops:**
| Workshop | Level | Duration |
|----------|-------|----------|
| Django Fundamentals | Beginner | 4 weeks |
| Advanced Django Patterns | Intermediate | 6 weeks |
| Building APIs with Django REST | Intermediate | 4 weeks |
| Full-Stack Django & React | Advanced | 8 weeks |

### 📅 **Events & Meetups**
- Monthly meetups in Kigali
- Quarterly bootcamps
- Open Source Contribution Days
- Event details with registration
- Location and attendee information

### 💻 **Open Source**
Featured community projects:
- **Django-Africa** - Toolkit for localized Django apps for African markets
- **Swahili CMS** - Content management for African media outlets
- **Local Commerce** - E-commerce platform for African small businesses

### 🚀 **Resources for Entrepreneurs**
- **Startup Toolkit** - Essential resources for launching tech startups
- **Funding Directory** - Investors, grants, and accelerators
- **Mentorship Network** - Connect with experienced entrepreneurs
- **Local Problem Solutions** - Ideas for African community challenges

### 🔐 **Authentication**
- User registration with interest selection
- Social sign-up (Google, GitHub)
- Secure login system
- Terms of Service and Privacy Policy

### 📱 **Additional Pages**
- Contact page with form
- Privacy Policy
- Terms of Service
- Sitemap
- Event registration
- Workshop registration

---

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolvers

### UI Components
- **[cmdk](https://cmdk.paco.me/)** - Command palette
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel component
- **[Recharts](https://recharts.org/)** - Charting library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Vaul](https://vaul.emilkowal.ski/)** - Drawer component
- **[React Day Picker](https://react-day-picker.js.org/)** - Date picker

### Utilities
- **[date-fns](https://date-fns.org/)** - Date manipulation
- **[clsx](https://github.com/lukeed/clsx)** - Class name utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
- **[class-variance-authority](https://cva.style/)** - Component variants

### Analytics & Monitoring
- **[@vercel/analytics](https://vercel.com/analytics)** - Web analytics

---

## 📁 Project Structure

```
django-rwanda-website/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── community/                # Community section
│   │   ├── page.tsx
│   │   ├── code-of-conduct/
│   │   ├── contribute/
│   │   ├── join/
│   │   └── sponsorship/
│   ├── contact/                  # Contact page
│   ├── events/                   # Events section
│   │   ├── page.tsx
│   │   └── [id]/                 # Dynamic event pages
│   ├── get-started/              # Onboarding page
│   ├── privacy/                  # Privacy policy
│   ├── register/                 # Registration flows
│   │   ├── events/
│   │   └── workshops/
│   ├── resources/                # Entrepreneur resources
│   │   ├── page.tsx
│   │   ├── funding-directory/
│   │   ├── mentorship/
│   │   ├── problem-solutions/
│   │   └── startup-toolkit/
│   ├── sitemap/                  # Sitemap
│   ├── terms/                    # Terms of service
│   └── workshops/                # Workshops section
│       ├── page.tsx
│       └── [id]/                 # Dynamic workshop pages
├── components/                   # React components
│   ├── ui/                       # Reusable UI components (50+)
│   ├── header.tsx                # Site header
│   ├── footer.tsx                # Site footer
│   ├── hero.tsx                  # Homepage hero
│   ├── community-section.tsx     # Community showcase
│   ├── events-section.tsx        # Events showcase
│   ├── workshops-section.tsx     # Workshops showcase
│   ├── open-source-section.tsx   # Open source projects
│   ├── resources-section.tsx     # Resources showcase
│   └── theme-provider.tsx        # Theme context
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts             # Mobile detection
│   └── use-toast.ts              # Toast notifications
├── lib/                          # Utilities
│   ├── constants.ts              # Site content/data
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
└── styles/                       # Additional styles
    └── globals.css
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **Yarn** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/djangorwanda/Django-Rwanda-website.git
   cd Django-Rwanda-website
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn start` | Start production server |
| `yarn lint` | Run ESLint |

---

## 🎨 UI Components

The project includes a comprehensive UI component library built with Radix UI primitives and styled with Tailwind CSS:

<details>
<summary>View all 50+ UI components</summary>

- Accordion
- Alert & Alert Dialog
- Aspect Ratio
- Avatar
- Badge
- Breadcrumb
- Button & Button Group
- Calendar
- Card
- Carousel
- Chart
- Checkbox
- Collapsible
- Command (cmdk)
- Context Menu
- Dialog
- Drawer
- Dropdown Menu
- Empty State
- Field
- Form
- Hover Card
- Input & Input Group
- Input OTP
- Item
- Kbd
- Label
- Menubar
- Navigation Menu
- Pagination
- Popover
- Progress
- Radio Group
- Resizable Panels
- Scroll Area
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Sonner (Toast)
- Spinner
- Switch
- Table
- Tabs
- Textarea
- Toast & Toaster
- Toggle & Toggle Group
- Tooltip

</details>

---

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id

# Add other environment variables as needed
```

---

## 📦 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/djangorwanda/Django-Rwanda-website)

### Other Platforms

Build the production bundle:
```bash
yarn build
```

The output will be in the `.next` directory, ready for deployment to any Node.js hosting platform.

---

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Please read our [Code of Conduct](https://djangorwanda.dev/community/code-of-conduct) before contributing.

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features when applicable
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Django Rwanda Community**

- 📧 Email: [hello@djangorwanda.dev](mailto:hello@djangorwanda.dev)
- 📱 Phone: +250 (0) 788 123 456
- 📍 Location: Kigali Innovation Hub, Kigali, Rwanda
- 🐙 GitHub: [@djangorwanda](https://github.com/djangorwanda)
- 🐦 Twitter: [@djangorwanda](https://twitter.com/djangorwanda)

---

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform
- [shadcn/ui](https://ui.shadcn.com/) - UI component inspiration
- All our amazing community members and contributors! 

---

<div align="center">
  <p>
    <a href="https://djangorwanda.dev">Website</a> •
    <a href="https://github.com/djangorwanda">GitHub</a> •
    <a href="https://twitter.com/djangorwanda">Twitter</a>
  </p>
</div>
