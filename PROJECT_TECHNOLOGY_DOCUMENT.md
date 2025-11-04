# Zia Pizza Franchise Hub - Technology Stack & Features Documentation

## Project Overview

The Zia Pizza Franchise Hub is a modern, responsive web application designed to showcase multiple restaurant locations, menus, deals, and provide an exceptional user experience for customers across all devices.

---

## Core Technologies

### Frontend Framework
- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **TypeScript 5.8.3** - Type-safe JavaScript for enhanced code quality and maintainability
- **Vite 5.4.19** - Lightning-fast build tool and development server

### Routing & Navigation
- **React Router DOM 6.30.1** - Client-side routing for single-page application navigation

### State Management & Data Fetching
- **TanStack React Query 5.83.0** - Powerful data synchronization library for React applications

---

## UI Component Library

### shadcn/ui Components
Built on **Radix UI** primitives, providing accessible and customizable components:

- **Navigation Components**: Accordion, Navigation Menu, Menubar, Breadcrumb
- **Overlay Components**: Dialog, Alert Dialog, Popover, Hover Card, Tooltip, Toast, Sonner
- **Form Components**: Input, Textarea, Label, Select, Checkbox, Radio Group, Switch, Slider
- **Data Display**: Table, Card, Avatar, Badge, Separator, Progress, Calendar, Chart
- **Layout Components**: Tabs, Collapsible, Scroll Area, Resizable Panels, Sidebar, Sheet, Drawer
- **Interactive Components**: Button, Toggle, Toggle Group, Dropdown Menu, Context Menu, Command (Command Palette)

### Additional UI Libraries
- **Lucide React 0.462.0** - Beautiful, consistent icon library
- **react-pageflip 2.0.3** - Interactive page-flip animations for menu display
- **react-snowfall 2.3.0** - Animated snowfall effects for seasonal pages
- **recharts 2.15.4** - Composable charting library built on React components

---

## Styling & Design

### CSS Framework
- **Tailwind CSS 3.4.17** - Utility-first CSS framework for rapid UI development
- **Tailwind CSS Typography 0.5.16** - Beautiful typographic defaults
- **tailwindcss-animate 1.0.7** - Animation utilities for Tailwind CSS
- **Autoprefixer 10.4.21** - Automatic vendor prefixing
- **PostCSS 8.5.6** - CSS transformation tool

### Fonts
- **Playfair Display** - Used for headings (h1-h6) and HeroSection text
- **Raleway** - Global body font
- **Italiana** - Navigation items
- **Poppins** - Additional sans-serif option

### Design System
- Custom brand color palette (Charcoal Navy, Logo Red, Gold Highlight)
- Responsive design with mobile-first approach
- Dark mode support via class-based theming
- Custom animations and transitions

---

## Forms & Validation

- **React Hook Form 7.61.1** - Performant forms with easy validation
- **Zod 3.25.76** - TypeScript-first schema validation
- **@hookform/resolvers 3.10.0** - Validation library resolvers for React Hook Form

---

## Additional Libraries & Features

### Utilities
- **class-variance-authority 0.7.1** - For component variant management
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 2.6.0** - Merge Tailwind CSS classes intelligently
- **date-fns 3.6.0** - Modern JavaScript date utility library
- **cmdk 1.1.1** - Command menu component

### Media & Interactions
- **embla-carousel-react 8.6.0** - Carousel/slider component
- **react-resizable-panels 2.1.9** - Resizable panel layouts

---

## Development Tools

### Build & Development
- **Vite** - Fast development server with HMR (Hot Module Replacement)
- **@vitejs/plugin-react-swc 3.11.0** - Fast React refresh using SWC compiler
- **lovable-tagger 1.1.9** - Development tooling for component tagging

### Code Quality
- **ESLint 9.32.0** - JavaScript/TypeScript linting
- **TypeScript ESLint 8.38.0** - TypeScript-specific linting rules
- **ESLint React Hooks Plugin** - React Hooks linting rules
- **ESLint React Refresh Plugin** - Fast Refresh linting rules

### Deployment
- **gh-pages 6.3.0** - GitHub Pages deployment support

---

## Application Features

### Pages & Routes

1. **Home Page (/)** - Hero section, location chooser, offers, and reviews
2. **Locations Page (/locations)** - Browse all restaurant locations
3. **Location Detail Page (/location/:locationId)** - Detailed information for each location
4. **Menu Page (/menu)** - Interactive menu with page-flip animations
5. **About Us (/about)** - Company information, features carousel, and brand story
6. **Deals Page (/deals)** - Current promotions and special offers
7. **Christmas Page (/christmas)** - Seasonal page with special animations
8. **Blog Page (/blog)** - News and updates
9. **Contact Page (/contact)** - Contact form and information
10. **Privacy Policy (/privacy)** - Privacy policy page
11. **Terms & Conditions (/terms)** - Terms of service
12. **Cookies Policy (/cookies)** - Cookie policy information
13. **404 Not Found** - Custom error page for invalid routes

### Key Components

- **Navigation** - Fixed, responsive navigation with geolocation support
- **HeroSection** - Engaging hero section with video/image backgrounds
- **LocationChooser** - Interactive location selection component
- **OffersSection** - Promotional offers display
- **ReviewsSection** - Customer testimonials
- **Footer** - Site footer with links and information
- **ScrollToTop** - Auto-scroll to top on route changes
- **ScrollToTopButton** - Floating button to scroll to top
- **StickyNotification** - Persistent notification banner

### User Experience Features

- **Geolocation Integration** - Find nearest restaurant location
- **Smooth Scrolling** - Enhanced scroll experience throughout the site
- **Responsive Design** - Fully responsive across all device sizes
- **Toast Notifications** - User feedback via toast messages
- **Loading States** - Optimistic UI updates with React Query
- **Accessibility** - WCAG-compliant components via Radix UI primitives
- **Performance Optimized** - Fast load times and smooth animations

---

## Technical Architecture

### Project Structure
```
src/
├── api/              # API configuration and utilities
├── assets/           # Images, videos, and media files
├── components/       # Reusable React components
│   └── ui/          # shadcn/ui component library
├── data/            # Static data (locations, reviews)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── pages/           # Route components
└── App.tsx          # Main application component
```

### Build Configuration
- **TypeScript** - Strict type checking configured
- **Path Aliases** - `@/*` alias for `src/*` directory
- **Vite Optimizations** - Fast builds and optimized production bundles
- **CSS Processing** - PostCSS with Tailwind and Autoprefixer

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

---

## Performance Features

- **Code Splitting** - Route-based code splitting for optimal loading
- **Image Optimization** - Efficient image handling and lazy loading
- **Tree Shaking** - Unused code elimination in production builds
- **Fast Refresh** - Instant feedback during development
- **Optimized Builds** - Production builds optimized for performance

---

## Security & Best Practices

- **TypeScript** - Type safety prevents runtime errors
- **ESLint** - Code quality enforcement
- **React Best Practices** - Hooks, component composition, and performance patterns
- **Accessible Components** - ARIA-compliant UI components
- **SEO-Friendly** - Semantic HTML and proper meta tags

---

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## Summary

This project leverages modern web technologies to deliver a fast, responsive, and user-friendly experience. The combination of React, TypeScript, Vite, and Tailwind CSS provides a robust foundation, while shadcn/ui components ensure consistency and accessibility. The application is optimized for performance, SEO, and cross-device compatibility.

---

*Document generated for: Zia Pizza Franchise Hub*
*Last updated: 2025*


