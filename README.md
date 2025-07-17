overview-
A modern, responsive website built with Next.js 14 and React 19, styled using Tailwind CSS, and deployed on Vercel.

🔗 Live Site: https://new-website-six-beta.vercel.app
📁 GitHub Repo: Pulkit2099/new-website

---

📦 Project Setup Instructions
To run this project locally:
git clone https://github.com/Pulkit2099/new-website.git
cd new-website
npm install
npm run dev

---

🧱 Component Architecture Overview
All reusable UI components are placed inside the components/ directory:

Navbar.jsx – Sticky top navigation bar for all screen sizes.

Footer.jsx – Responsive footer with links and copyright.

Form.jsx – Contact form with basic fields and validation.

Vehicle.jsx – Section showcasing a video of the vehicle with description.

Fonts/ – Custom Manrope font integration.

## Each component is modular, clean, and uses Tailwind for styling.

📱 Responsive Design Strategy
Fully responsive across mobile, tablet, and desktop using Tailwind's responsive utilities (sm:, md:, lg: breakpoints).

Flex and grid layouts ensure adaptive structure.

Mobile-first development approach.

Navigation collapses into a hamburger menu for smaller screens.

---

⚡ Performance Optimization Techniques Employed
Optimized fonts via next/font/google (Manrope).

Lazy loading for video/media where possible.

Image optimization via Next.js's next/image (if images are added in future).

Static generation (next export) ready.

Minimal external dependencies to reduce bundle size.

---

♿ Accessibility Considerations
Semantic HTML used across components (header, main, footer).

Accessible forms with proper label tags.

Manrope font chosen for readability.

Color contrast and font sizes tuned for legibility on all devices.

---

📚 Third-Party Libraries Used
Tailwind CSS – Utility-first CSS framework.

Next.js – React framework for fast static and server-rendered apps.

React 19 – Latest version for enhanced performance and features.

Vercel – Seamless deployment and hosting.

---

🧠 Assumptions & Decisions Made
Chose Tailwind for faster UI development and responsiveness.

Manrope font selected for modern, clean aesthetics.

All video assets assumed to be hosted and available via standard URLs.

Decided not to include external UI libraries (like Bootstrap/Chakra) to keep bundle size minimal.

---

🐛 Challenges Faced & Solutions
Responsiveness across all devices: Resolved with Tailwind's mobile-first approach and testing with Chrome dev tools.

Font rendering consistency: Used next/font/google to manage font loading properly across devices.

Video integration: Ensured responsiveness and cross-browser playback for the vehicle showcase section.

---

🌱 Suggested Upcoming Features & Improvements
Dark mode toggle with useTheme.

Contact form integration with a backend service (e.g., Firebase or EmailJS).

SEO enhancements (meta tags, OG tags).

Add smooth scroll & animations using framer-motion or AOS.

Integrate Google Analytics or Vercel Analytics for traffic tracking.
