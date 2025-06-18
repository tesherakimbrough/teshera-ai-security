# Teshera Kimbrough - AI & Cybersecurity Portfolio

A modern, responsive portfolio website showcasing expertise in AI and cybersecurity, built with React, TypeScript, and Tailwind CSS.

## 🌟 Live Demo

**URL**: https://tesherakimbrough.dev

## 🚀 Features

### Core Sections
- **Hero Section** - Dynamic introduction with animated elements
- **Projects Portfolio** - Showcase of AI and cybersecurity projects
- **About Me** - Professional background and expertise
- **Resume Integration** - Interactive PDF viewer with download functionality
- **Current Work** - Live updates on ongoing projects with progress tracking
- **Security Review** - Specialized cybersecurity insights and analysis
- **Contact Form** - Functional contact form with validation and error handling

### Technical Features
- **Responsive Design** - Optimized for all device sizes
- **Smooth Scrolling Navigation** - Seamless user experience
- **Loading States** - Enhanced UX with loading spinners for PDF content
- **Form Validation** - Comprehensive client-side validation with error messages
- **Toast Notifications** - User feedback for form submissions and actions
- **PDF Integration** - Direct resume viewing and download capabilities
- **Progress Tracking** - Visual progress bars for current projects

### UI/UX Enhancements
- **Dark Theme** - Professional cybersecurity-focused design
- **Backdrop Blur Effects** - Modern glassmorphism styling
- **Hover Animations** - Interactive element transitions
- **Accessibility Features** - ARIA labels and keyboard navigation support
- **Mobile-First Design** - Responsive navigation with mobile menu

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with validation
- **State Management**: React hooks and context
- **Charts**: Recharts for data visualization
- **Routing**: React Router DOM
- **Notifications**: Custom toast system

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── Navbar.tsx       # Navigation with smooth scrolling
│   ├── Hero.tsx         # Landing section
│   ├── Projects.tsx     # Portfolio showcase
│   ├── About.tsx        # Professional background
│   ├── Resume.tsx       # Resume section
│   ├── CurrentWork.tsx  # Live project updates
│   ├── SecurityReview.tsx # Security insights
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Site footer
├── hooks/
│   ├── useContactForm.ts # Form handling logic
│   └── use-toast.ts     # Toast notification system
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   ├── ResumePage.tsx   # Dedicated resume viewer
│   └── NotFound.tsx     # 404 error page
└── lib/
    └── utils.ts         # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📧 Contact Form Setup

The contact form is configured to work with Formspree. To set it up:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the `formAction` URL in `src/hooks/useContactForm.ts`:
   ```typescript
   const formAction = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

## 📄 Resume Integration

The portfolio includes integrated PDF resume functionality:
- Direct PDF viewing in dedicated resume page
- Download functionality
- Fallback for browsers without PDF support
- Mobile-optimized viewing experience

## 🎨 Customization

### Colors and Theming
The project uses a dark cybersecurity theme with blue accents. Main colors can be customized in `tailwind.config.ts`.

### Content Updates
- Update personal information in component files
- Replace resume PDF in `public/` directory
- Modify project showcases in `Projects.tsx`
- Update current work items in `CurrentWork.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Collapsible navigation menu
- Optimized layouts for tablets and desktops
- Touch-friendly interactions

## 🔒 Security Features

- Content Security Policy ready
- No inline scripts or styles
- Secure external link handling
- Form validation and sanitization

## 🚀 Deployment Options

### Lovable Platform (Recommended)
1. Open [Lovable Project](https://lovable.dev/projects/38ecebcc-c67f-4997-979c-8d59a9a16c46)
2. Click Share → Publish
3. Custom domain connection available with paid plans

### Other Platforms
The built code is compatible with:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Contact

- **Email**: hello@tesherakimbrough.dev
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

## 📝 License

This project is open source and available under the MIT License.

---

*Built with ❤️ using Lovable - The AI-powered web development platform*
