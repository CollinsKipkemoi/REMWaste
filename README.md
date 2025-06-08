# REMWaste - Skip Rental Platform

A modern, responsive web application for skip rental services built with React, TypeScript, and Tailwind CSS. REMWaste provides an intuitive interface for customers to browse, select, and book waste disposal skips with real-time pricing and availability.

## 🚀 Features

### Core Functionality

- **Skip Selection**: Browse available skip sizes with detailed information
- **Real-time Pricing**: Dynamic pricing with VAT calculations
- **Service Timeline**: Visual progress indicator for the booking process
- **Location-based Services**: Skip availability by postcode and area
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### User Experience

- **Modern UI**: Clean, professional design with smooth animations
- **Dark/Light Theme**: Built-in theme switcher with system preference support
- **Toast Notifications**: User feedback with elegant toast messages
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions
- **Accessible**: Screen reader support and keyboard navigation

### Technical Features

- **TypeScript**: Full type safety and developer experience
- **Component Architecture**: Modular, reusable React components
- **Responsive Grid**: Adaptive layout system
- **API Integration**: Real-time data fetching from external services
- **Theme System**: Comprehensive design system with CSS custom properties

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4 with custom theme system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner toast library
- **Theme Management**: Custom theme provider with localStorage persistence
- **Animations**: CSS transitions and transforms

## 📦 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── drawer.tsx       # Skip details modal
│   ├── skip.tsx         # Skip card component
│   ├── skip-chooser.tsx # Main skip selection interface
│   ├── time-frame.tsx   # Service timeline component
│   ├── theme-provider.tsx # Theme context provider
│   └── theme-toggle.tsx # Theme switcher component
├── types/               # TypeScript type definitions
├── lib/                 # Utility functions
├── assets/              # Static assets (images, icons)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/CollinsKipkemoi/REMWaste.git
   cd REMWaste
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## 🎨 Design System

### Theme Variables

The application uses a comprehensive theme system with CSS custom properties that automatically adapt to light and dark modes:

- **Colors**: Primary, secondary, accent, muted, destructive
- **Typography**: Consistent font scales and weights
- **Spacing**: Systematic spacing scale
- **Borders**: Consistent border radius and styling
- **Shadows**: Layered shadow system for depth

### Component Styling

- **Gradient Backgrounds**: Subtle gradients for visual depth
- **Backdrop Blur**: Modern frosted glass effects
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Animations**: Smooth transitions and micro-interactions

## 📱 Responsive Features

### Mobile Optimizations

- **Horizontal Timeline Scroll**: Timeline adapts to small screens with custom scrollbar
- **Stacked Layout**: Card layouts stack vertically on mobile
- **Touch-Friendly**: Large tap targets and gesture support
- **Bottom Navigation**: Theme toggle positioned for thumb accessibility

### Desktop Enhancements

- **Grid Layouts**: Multi-column skip card displays
- **Hover Effects**: Interactive states for better UX
- **Keyboard Navigation**: Full keyboard accessibility support

## 🔧 API Integration

The application integrates with external APIs for real-time data:

```typescript
// Skip data structure
interface SkipData {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  // ... additional properties
}
```

**Endpoint**: `https://app.wewantwaste.co.uk/api/skips/by-location`

- Query parameters: `postcode`, `area`
- Response: Array of available skip options with pricing

## 🎯 Key Components

### SkipChooser

Main interface component that:

- Fetches and displays available skips
- Handles skip selection and drawer opening
- Manages application state

### Skip Card

Individual skip display component featuring:

- Skip size and pricing information
- Service area and restrictions
- Expandable details section
- Booking action buttons

### Drawer Component

Modal component for skip details:

- Responsive design with mobile optimization
- Gradient styling matching theme
- Action buttons for booking flow
- Toast notification integration

### Timeline Component

Service process indicator:

- Visual progress representation
- Responsive icon-only display on mobile

## 🔄 State Management

The application uses React's built-in state management:

- **useState**: Component-level state for UI interactions
- **useEffect**: Data fetching and side effects
- **Context API**: Theme management across components

## 🎯 Development Approach

### Methodology

**Technology Decisions**

- **React + TypeScript**: Provides compile-time error checking and IntelliSense for better code quality and fewer runtime bugs
- **Tailwind CSS + shadcn/ui**: Enables rapid prototyping with utility-first CSS while maintaining accessible, pre-tested component primitives
- **Vite**: Delivers instant hot module replacement and optimized builds, significantly faster than traditional bundlers
- **Mobile-first approach**: Ensures optimal performance on mobile devices where 70%+ of service industry users browse

**Development Phases**

1. **Architecture**: Built modular component structure with clear data flow, TypeScript interfaces for API contracts, and separation of concerns
2. **Theme System**: Implemented CSS custom properties for dynamic theming with React Context for global state management across components
3. **Responsive Design**: Created fluid layouts that adapt gracefully, custom horizontal scrolling for timeline, and fixed viewport overflow issues
4. **UX Enhancements**: Added contextual toast notifications, smooth micro-interactions, and comprehensive accessibility features for all users

### Key Challenges & Solutions

**Mobile Responsiveness**

- _Problem_: Timeline components caused horizontal overflow on small screens, theme toggle button was partially hidden
- _Solution_: Implemented horizontal scrolling with hidden scrollbars for timeline, repositioned toggle outside overflow containers with proper z-indexing
- _Result_: Seamless mobile experience with no layout shifts or hidden UI elements

**Theme Consistency**

- _Problem_: Toast notifications used default styling that clashed with the application's design system
- _Solution_: Created comprehensive CSS custom properties system that automatically adapts toast styling to match current theme
- _Result_: Unified visual language across all components with smooth light/dark mode transitions

**Code Quality Standards**

- **Component Architecture**: Single-responsibility components with props-based composition for maximum reusability
- **Type Safety**: Strict TypeScript configuration catches potential errors at compile time and provides autocomplete for API responses
- **Performance**: Optimized re-renders with proper React keys, CSS transforms for animations, and lazy loading where applicable
- **Testing**: Cross-device validation on mobile (320px+), tablet (768px+), and desktop (1024px+) with real device testing via ngrok
- **Accessibility**: WCAG 2.1 compliance with semantic HTML, ARIA labels, keyboard navigation, and screen reader support

**Key Insights**

- **Mobile-first development** streamlined responsive design by starting with mobile layouts first, making it easier to progressively enhance for larger screens
- **CSS custom properties** provided unprecedented theme flexibility compared to traditional SCSS variables
- **Component composition** created a maintainable codebase that's easier to test and extend than monolithic components

This systematic approach prioritized user experience and code maintainability while delivering a production-ready web application for the skip rental industry.

### Theme System Improvements

- Integrated comprehensive CSS custom properties
- Added support for system theme preferences
- Enhanced toast notification styling to match theme

### Mobile Experience

- Improved touch interactions and button sizing
- Fixed viewport constraints and overflow handling
- Optimized component layouts for mobile-first design

## 🚀 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
