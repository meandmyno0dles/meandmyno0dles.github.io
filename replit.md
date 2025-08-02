# Portfolio Website

## Overview

This is a full-stack web application built as a personal portfolio for Tyler Rossitto, a security/networking professional. The application is a modern single-page application (SPA) with a React frontend and Node.js/Express backend, featuring a cybersecurity-themed design with animations and interactive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Static Site Architecture (GitHub Pages Ready)
- **Framework**: React 18 with TypeScript (Static Site)
- **Styling**: Tailwind CSS with custom cyber-themed variables
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and effects
- **Contact Form**: Static mailto links (no backend required)
- **Build Tool**: Vite for fast development and optimized static builds
- **Deployment**: GitHub Actions workflow for automatic deployment

### Embedded Game Architecture
- **Game Engine**: Python/Pygame running via Pyodide in browser
- **Assets**: Local game assets served statically
- **Integration**: Standalone HTML wrapper with game controls
- **Compatibility**: Cross-browser support via WebAssembly

## Key Components

### Frontend Components
- **Portfolio Page**: Main landing page with animated sections
- **Contact Form**: React Hook Form with Zod validation and mutation handling
- **Terminal Animation**: Simulated terminal with typing effect
- **Skill Bars**: Animated progress bars for technical skills
- **Project Cards**: Interactive cards showcasing projects
- **Timeline Items**: Career/education timeline with alternating layout
- **UI Components**: Comprehensive set of reusable components (buttons, forms, dialogs, etc.)

### Backend Components
- **API Routes**: RESTful endpoints for contact form submission and data retrieval
- **Storage Layer**: Abstracted storage interface supporting both in-memory and database persistence
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Custom middleware for API request logging

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, subject, message, created_at)

## Data Flow (Static Site)

1. **Contact Form Submission**:
   - Frontend collects form data using controlled components
   - Creates mailto link with pre-filled subject and body
   - Opens user's default email client for sending
   - Success notification via toast system

2. **Game Integration**:
   - DragonBall JezzBall game loads via Pyodide
   - Python/Pygame code executes in browser WebAssembly
   - Assets served statically from game directory
   - Independent game loop with canvas rendering

3. **Static Content**:
   - Portfolio content (skills, projects, timeline) stored as static data in components
   - Animated on scroll using Framer Motion
   - No server-side data fetching required

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI/UX**: Radix UI components, Tailwind CSS, Framer Motion
- **Data Fetching**: TanStack React Query
- **Validation**: Zod, @hookform/resolvers
- **Icons**: Lucide React, React Icons
- **Utilities**: clsx, tailwind-merge, date-fns

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod, drizzle-zod
- **Session**: express-session, connect-pg-simple
- **Build Tools**: esbuild, tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite, TypeScript, PostCSS, Autoprefixer
- **Database**: Drizzle Kit for migrations and schema management
- **Linting/Formatting**: ESLint, Prettier (implied by setup)

## Deployment Strategy (GitHub Pages)

### Build Process
1. **Static Build**: Vite builds React app to `dist/` directory
2. **Game Assets**: DragonBall JezzBall game and assets copied to `dist/jezzball/`
3. **GitHub Actions**: Automated deployment workflow on push to main branch

### Environment Configuration
- **Development**: Vite dev server with hot reloading
- **Production**: Static files served from GitHub Pages CDN
- **No Backend**: Fully client-side application with no server requirements

### Hosting Requirements
- GitHub repository with Pages enabled
- No server runtime required
- No database or environment variables needed
- CDN delivery for global performance

### Scripts
- `dev`: Development server with hot reloading
- `build`: Production static build process
- `preview`: Preview production build locally
- `check`: TypeScript type checking

### Deployment Files
- `.github/workflows/deploy.yml`: GitHub Actions workflow
- `README.md`: Complete deployment instructions
- `deploy-instructions.md`: Step-by-step deployment guide

The application is now optimized for static hosting on GitHub Pages with automatic deployment, embedded Python game functionality, and no server dependencies.