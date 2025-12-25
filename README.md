# aravindsanjeev.com

Personal portfolio and blog website built with Astro, showcasing projects, blog posts, and professional expertise.

## 🚀 Tech Stack

- **Framework**: [Astro 5.16.6](https://astro.build) - Static site generator with content collections
- **Styling**: [Tailwind CSS 3.4.7](https://tailwindcss.com) - Utility-first CSS framework
- **Content**: MDX for rich, interactive content
- **Performance**:
  - Image optimization with Astro's built-in `<Image>` and `<Picture>` components
  - Partytown for third-party script optimization (Google Tag Manager)
  - Inline stylesheets for faster initial page loads
- **SEO**:
  - Automatic sitemap generation
  - Semantic HTML with proper landmarks
  - Optimized meta tags and structured data
- **Code Highlighting**: Shiki with Dracula theme
- **Typography**: Tailwind Typography plugin for beautiful prose

## 📁 Project Structure

```
/
├── public/              # Static assets (robots.txt, favicons, etc.)
├── src/
│   ├── assets/         # Optimized images (profile, project covers, etc.)
│   ├── components/     # Reusable Astro components
│   │   ├── Hero.astro
│   │   ├── Project.astro
│   │   ├── Tag.astro
│   │   └── ...
│   ├── content/        # Content collections
│   │   ├── blog/      # Blog posts (MDX)
│   │   ├── projects/  # Project showcases (MDX)
│   │   └── config.ts  # Collection schemas
│   ├── layouts/       # Page layouts
│   │   └── Layout.astro
│   ├── lib/           # Utility functions
│   ├── pages/         # File-based routing
│   │   ├── index.astro
│   │   ├── blog/
│   │   ├── projects/
│   │   ├── contact.astro
│   │   └── ...
│   └── styles/        # Global styles
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (preferred package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/aravindsanjeev.com.git
cd aravindsanjeev.com

# Install dependencies
pnpm install
```

### Available Scripts

```bash
# Start development server (http://localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro
```

## 📝 Content Management

### Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
publishedAt: "2025-12-26"
summary: "Brief description of your post"
image: ./path-to-image.jpg # Optional, relative to src/assets
tags: ["tag1", "tag2"] # Optional
---

Your content here...
```

### Adding a Project

Create a new `.mdx` file in `src/content/projects/`:

```mdx
---
title: "Project Name"
description: "Brief project description"
imageUrl: ./project-cover.jpg # Required, relative to src/assets
url: "https://project-url.com" # Optional
tags: ["React", "TypeScript"] # Optional
priority: 1 # Optional, for custom ordering
---

Detailed project description...
```

## 🎨 Key Features

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Dark Theme**: Custom dark theme with accent colors (fuchsia/purple palette)
- **Image Optimization**: Automatic image optimization with lazy loading and responsive images
- **SEO Optimized**:
  - Semantic HTML structure
  - Meta tags and Open Graph support
  - Automatic sitemap generation
  - robots.txt configuration
- **Accessibility**:
  - ARIA labels on interactive elements
  - Proper heading hierarchy
  - High contrast ratios
  - Keyboard navigation support
- **Performance**:
  - Inline critical CSS
  - Deferred third-party scripts
  - Optimized image loading (eager for above-fold, lazy for below-fold)
  - Minimal JavaScript footprint

## 🔧 Configuration

### Site Configuration

Edit `astro.config.mjs` to update:

- Site URL
- Build settings
- Markdown/MDX options
- Integration settings

### Styling

- Global styles: `src/styles/global.css`
- Tailwind config: `tailwind.config.js`
- Custom color palette defined in Tailwind config

## 📊 Performance Optimizations

- **Images**: All images moved to `src/assets/` for Astro's automatic optimization
- **CSS**: Inline stylesheets for faster initial render
- **Scripts**: Google Tag Manager loaded via Partytown for non-blocking execution
- **Fonts**: System font stack for instant text rendering
- **Code Splitting**: Automatic route-based code splitting by Astro

## 🚢 Deployment

The site is configured for static deployment. Build output goes to the `dist/` directory.

```bash
# Build for production
pnpm build

# The dist/ folder contains your static site
```

Deploy to your preferred hosting platform (Vercel, Netlify, Cloudflare Pages, etc.).

## 📄 License

This project is the personal website of Aravind Sanjeev. All rights reserved.

## 📧 Contact

- Email: [hi@aravindsanjeev.com](mailto:hi@aravindsanjeev.com)
- Website: [https://aravindsanjeev.com](https://aravindsanjeev.com)

---

Built with ❤️ using Astro
