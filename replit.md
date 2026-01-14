# TireBuddy - Mobile Tire Service Website

## Overview

TireBuddy is a marketing website for a mobile tire change and repair service operating across Ontario, Canada. The site serves as the primary digital presence for the business, focusing on local SEO, service information, and customer acquisition. It's a static React-based single-page application targeting customers in the Toronto, Mississauga, and Brampton areas.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with Vite as the build tool
- Single-page application (SPA) architecture with client-side routing via `react-router-dom`
- No backend server - this is a static marketing site

### Styling Approach
- **Tailwind CSS 3.4** for utility-first styling
- Extended color palette with primary (red #E63946), accent (blue), and dark variants
- Custom component classes: btn-primary, btn-secondary, card-modern, glass-effect, gradient-text
- **Typography**: Inter for body text, Space Grotesk for headings (Google Fonts)
- Modern design features:
  - Glass morphism effects (backdrop-blur, transparent backgrounds)
  - Gradient backgrounds and text gradients
  - Custom shadows (card, card-hover, glow)
  - Animated blob backgrounds and floating effects
  - Smooth hover transitions and scale effects

### Animation & UX
- **AOS (Animate on Scroll)** library for scroll-based animations
- Custom CSS transitions for hover states and fade-in effects
- Smooth scroll behavior enabled globally

### SEO Implementation
- Comprehensive meta tags for local SEO (geo-targeting Ontario/Toronto)
- Open Graph and Twitter Card support for social sharing
- `react-helmet-async` for dynamic head management
- JSON-LD structured data for local business schema
- Canonical URL and robots.txt configured for `tirebuddy.ca`

### Build & Deployment
- Vite for development server and production builds
- Configured for Vercel deployment with SPA rewrites
- Development server runs on port 5000 with all hosts allowed
- Output directory: `dist`

## External Dependencies

### Third-Party Libraries
| Dependency | Purpose |
|------------|---------|
| react-router-dom | Client-side routing |
| react-helmet-async | Dynamic SEO meta tag management |
| aos | Scroll-based animations |

### Deployment Platform
- **Vercel** - Static site hosting with automatic builds
- Custom domain: `tirebuddy.ca`

### External Services
- No database or backend API currently integrated
- No authentication system
- No payment processing

### CDN/Assets
- Favicon and logo assets served from `/public`
- Google Fonts likely loaded externally (Inter, Space Grotesk referenced in config)