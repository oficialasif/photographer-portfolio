# Videographer Portfolio - Sifat

A modern, responsive single-page portfolio website for a videographer built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- 🎬 **Dark-Orange Cinematic Theme** - Professional dark gradient background with orange accents
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ✨ **Smooth Animations** - Framer Motion powered entrance, hover, and scroll animations
- 🎨 **Modern UI** - Bold typography with Bebas Neue and Poppins fonts
- 🚀 **Fast & Optimized** - Built with Next.js 14 App Router for optimal performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Bebas Neue, Poppins)
- **Language**: TypeScript

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   └── Testimonial.tsx # Testimonial card
└── public/             # Static assets
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- `dark-bg`: `#1A0F0A`
- `dark-lighter`: `#3D1F10`
- `accent-orange`: `#FF7A00`
- `accent-orangeLight`: `#FFB347`

### Content
Update the content in each component file:
- `components/Navbar.tsx` - Navigation links
- `components/Hero.tsx` - Hero text and CTAs
- `components/Testimonial.tsx` - Testimonial content

### Resume Download
Update the `handleDownloadResume` function in `components/Navbar.tsx` to link to your actual resume PDF.

## Features Breakdown

### Navbar
- Fixed navigation bar with backdrop blur
- Smooth scroll navigation
- Download Resume button
- Mobile-responsive menu

### Hero Section
- Animated greeting and heading
- Call-to-action buttons
- Floating icon animations
- 3D character placeholder area

### Testimonial Section
- Scroll-triggered animations
- Glowing border effects
- Avatar with gradient border

## License

This project is open source and available for personal or commercial use.

