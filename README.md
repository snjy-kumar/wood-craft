# Ganesh Thakur Woodcraft - Professional Website

A modern, accessible, and SEO-optimized website for Ganesh Thakur's master carpentry business in Pune, Maharashtra, India. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with perfect display on all devices
- **Accessibility**: WCAG AA compliant with screen reader support
- **SEO Optimized**: Comprehensive metadata, sitemap, and structured data
- **Performance**: Optimized images, fonts, and code splitting
- **Modern UI/UX**: Clean, minimalist design with high contrast
- **Dark/Light Mode**: Theme switching with system preference detection
- **Production Ready**: Error handling, loading states, and security headers

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd wood-craft

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Page routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── sitemap.ts        # Auto-generated sitemap
│   ├── error.tsx         # Error boundary
│   ├── not-found.tsx     # 404 page
│   └── loading.tsx       # Loading UI
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── ...               # Feature components
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions
```

## 🛠️ Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

The build outputs to `.next/` directory.

## 📝 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_PHONE="+91 8969892003"
NEXT_PUBLIC_EMAIL="ganeshthakur@gmail.com"
```

## 🎨 Customization

### Colors & Branding

Edit `src/app/globals.css` to customize the color scheme:

```css
:root {
  --primary: #3d2914;        /* Wood brown */
  --background: #ffffff;      /* Pure white */
  --foreground: #0a0a0a;      /* Near black */
}
```

### Content

- **Contact Info**: Update in layout.tsx and relevant components
- **Services**: Modify `src/components/services-list.tsx`
- **Projects**: Update `src/components/featured-projects.tsx`
- **Testimonials**: Edit `src/components/testimonial-carousel.tsx`

## 📱 Key Pages

- `/` - Homepage with hero, services, projects
- `/about` - About Ganesh Thakur and team
- `/services` - Detailed services page
- `/portfolio` - Project showcase with sub-categories
- `/contact` - Contact form and information
- `/qoute` - Quote request form
- `/testimonials` - Client testimonials
- `/blog` - Blog/news section

## 🔧 Technical Features

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **Components**: Radix UI primitives for accessibility
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Inter (sans-serif) + Playfair Display (serif)
- **Performance**: Image optimization, code splitting, caching
- **SEO**: Metadata API, sitemap, robots.txt
- **Analytics Ready**: Google Analytics integration ready

## 🛡️ Security & Performance

- Security headers configured
- Image optimization enabled
- Caching strategies implemented
- Error boundaries for graceful failures
- Loading states for better UX

## 📞 Support

For technical support or customization requests:

- **Email**: ganeshthakur@gmail.com
- **Phone**: +91 8969892003

## 📄 License

This project is proprietary software for Ganesh Thakur Woodcraft.

---

**Built with ❤️ for Ganesh Thakur's master carpentry business in Pune, Maharashtra.**
