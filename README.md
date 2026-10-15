# Aspirev Technologies

> **Build with purpose. Create what matters.**

The official web platform and digital portfolio for **Aspirev Technologies** — an emerging technology studio and product venture builder based in Colombo, Sri Lanka, serving domestic and international clients.

---

## ⚡ Overview & Capabilities

Aspirev Technologies designs and engineers high-conversion websites, full-stack web applications, cross-platform mobile apps, and deterministic AI/ML workflows:

* **Web Applications & Platforms**: Custom booking systems, client portals, and responsive websites with sub-second Edge load times.
* **Mobile Applications**: Cross-platform iOS & Android apps built for fluid 60fps performance and offline-first data sync.
* **Custom Software & Cloud Systems**: Scalable backend architectures, admin management dashboards, RBAC security, and PostgreSQL/Redis integrations.
* **ML-Based Systems & Practical AI**: Predictive scoring, automated document parsing, and vector RAG agents that solve real operational bottlenecks.
* **Aspirev Platform (Flagship Venture)**: Company-owned AI career-intelligence platform helping students and job seekers organize their career preparation.

---

## 🛠 Tech Stack

* **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components & Route Handlers)
* **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Design Identity**: Custom Solvance Emerald Forest Theme (`#1A3E38`, `#FAF9F5`, `#A3E5D4`, `#10221E`)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Inquiry & Email Pipeline**: [Nodemailer](https://nodemailer.com/) with Google SMTP + Local JSON logging redundancy

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/AspirevTechnologies/Aspirev-Tech.git
cd Aspirev-Tech
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env.local` file in the root directory (refer to `.env.example`):
```env
# Google SMTP Credentials for Inquiries & Contact Form
GMAIL_USER=hello.aspirev@gmail.com
GMAIL_APP_PASSWORD=your_google_app_password_here
NOTIFICATION_EMAIL=hello.aspirev@gmail.com,nasikmohamednzk2020@gmail.com
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📁 Project Architecture

```text
frontend/
├── public/                  # Assets, team photos, portfolio screenshots & branding
├── src/
│   ├── app/
│   │   ├── about/           # About the Studio, Philosophy & Founder Profile
│   │   ├── api/contact/     # Contact intake API with Gmail SMTP & local backup
│   │   ├── contact/         # Dedicated inquiry intake with LKR / USD switcher
│   │   ├── privacy/         # Privacy Policy
│   │   ├── products/        # Products & Flagship Platform Showcase
│   │   ├── services/        # Services & Technical Capabilities
│   │   ├── terms/           # Terms & Conditions
│   │   ├── work/            # Case studies & Production Portfolio
│   │   ├── globals.css      # Design tokens, fonts, and custom styles
│   │   ├── layout.tsx       # Root layout & metadata
│   │   └── page.tsx         # Interactive Home Page
│   └── components/          # Reusable UI sections and components
├── data/                    # Local storage directory for inquiry backups
├── .env.example             # Environment variable template
└── package.json
```

---

## 🌐 Deployment

The repository is configured for one-click deployment on [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Import the project into Vercel.
3. Add the environment variables (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `NOTIFICATION_EMAIL`) in the Vercel Project Settings.
4. Deploy!

---

## 📬 Contact & Inquiries

* **Official Inquiries**: [hello.aspirev@gmail.com](mailto:hello.aspirev@gmail.com)
* **WhatsApp**: [+94 78 784 4914](https://wa.me/94787844914)
* **Lead Architect**: Mohamed Nazik

© 2026 Aspirev Technologies. All rights reserved.
