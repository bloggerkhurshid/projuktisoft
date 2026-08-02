<div align="center">
  <img src="public/logo.svg" alt="ProjuktiSoft Logo" width="90" height="90" />
  <h1>ProjuktiSoft</h1>
  <p><strong>Learn Today, Lead Tomorrow.</strong></p>
  <p>Modern, high-performance Web Application, Mobile App & SEO Engineering Studio — creators of <a href="https://www.dailyaxom.in">DailyAxom</a>.</p>

  <div>
    <img src="https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Framer_Motion-12.0-violet?style=for-the-badge&logo=framer" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  </div>
</div>

---

## 🚀 About ProjuktiSoft

**ProjuktiSoft** is an independent software development studio run by full-stack MERN engineers based in Kokrajhar, Assam, India. We design and build production-grade web applications, native-feel Android apps, digital SEO strategies, and custom business platforms like **DailyAxom** (serving 5,000+ competitive exam learners across Assam).

---

## ✨ Key Features

- 🎨 **Modern Glassmorphic UI/UX**: Built with an elegant light theme, crisp `#37B37F` emerald accents, smooth backdrop-blur glass panels, and ambient grid background effects.
- ⚡ **Next.js 16 App Router & Static Export**: Blazing-fast static generation (`output: 'export'`), SEO optimized, and fully compatible with Apache cPanel / static hosting servers.
- 🎓 **Flagship Product Showcase**: Dedicated spotlight for **DailyAxom**, featuring bilingual practice test engines (Assamese & English) and real-time student analytics.
- 💼 **Careers & Internship Portal (`/careers`)**: Dedicated hiring hub for *Content Writer Interns (DailyAxom)* and *Junior Developer Interns (ProjuktiSoft Studio)* with direct portfolio submission.
- 💬 **Seamless Outreach & WhatsApp Integration**: Direct inquiry routing via FormSubmit AJAX to `contact@projuktisoft.com` and pre-filled 1-click WhatsApp messaging (`+91 7002820458`).
- 📱 **100% Fully Responsive Design**: Flawlessly optimized across mobile, tablet, and desktop viewports with zero horizontal overflow.

---

## 🛠️ Tech Stack & Architecture

| Component | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Static Export) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Glassmorphism Utilities |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Hosting / Server** | Apache (via custom `.htaccess`) / Vercel / Netlify |

---

## 📂 Repository Structure

```
Pjksoft/
├── public/
│   ├── .htaccess                # Apache rewrite rules for clean URLs & 403 prevention
│   └── logo.svg                 # Official ProjuktiSoft logo asset
├── src/
│   ├── app/
│   │   ├── careers/
│   │   │   └── page.tsx         # Dedicated Careers & Internship Hub
│   │   ├── globals.css          # Core design tokens, backdrop filters & keyframes
│   │   ├── icon.svg             # Favicon asset route
│   │   ├── layout.tsx           # Root metadata & layout wrapper
│   │   ├── page.tsx             # Main single-page studio landing
│   │   └── sitemap.ts           # Dynamic XML sitemap generator
│   └── components/
│       ├── Navbar.tsx           # Glassmorphic header with navigation drawer
│       ├── Hero.tsx             # Hero section with interactive tech marquee
│       ├── Services.tsx         # Core services (01–04) with detail modal
│       ├── WhyUs.tsx            # Engineering principles & ownership model
│       ├── ProofStats.tsx       # DailyAxom EdTech showcase & live stats
│       ├── Industries.tsx       # Targeted sectors & use cases
│       ├── ContactSection.tsx   # Project brief form & direct WhatsApp CTA
│       ├── BookingModal.tsx     # 1-on-1 strategy call booking modal
│       ├── CookieConsentBanner.tsx # GDPR/Privacy cookie consent banner
│       └── Footer.tsx           # Studio footer & privacy/terms modals
├── next.config.ts               # Next.js configuration (static export output)
├── package.json
└── README.md
```

---

## 💻 Local Development & Build

### Prerequisites
- Node.js 18.x or later installed
- npm or pnpm package manager

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bloggerkhurshid/projuktisoft.git
   cd projuktisoft
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build Static Export (`out/`)**:
   ```bash
   npm run build
   ```

---

## 🌐 Hosting & Apache Setup

This project uses Next.js Static Export (`output: "export"`). The generated `out/` directory contains standard static assets that can be uploaded directly to Apache/cPanel web servers. 

The repository includes a custom [public/.htaccess](file:///Users/khurshidalom/Downloads/Pjksoft/public/.htaccess) configured to:
- Serve `DirectoryIndex index.html` cleanly.
- Rewrite extensionless URLs to their `.html` counterparts without 403 Forbidden errors.

---

## 📬 Studio Location & Contact

- **Studio Location**: Kokrajhar, Assam, India (783370)
- **Direct Email**: [contact@projuktisoft.com](mailto:contact@projuktisoft.com)
- **WhatsApp Support**: [+91 70028 20458](https://wa.me/917002820458)
- **Live Flagship Product**: [DailyAxom](https://www.dailyaxom.in)

---

<div align="center">
  <p>© 2026 ProjuktiSoft. All rights reserved.</p>
</div>

