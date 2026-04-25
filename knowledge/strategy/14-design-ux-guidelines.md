# 14 — Design and UX Guidelines

**Document:** Design and UX Guidelines
**Knowledge Base:** FortunaDelClub Website Strategy
**Last Updated:** 2026-04-25

---

## Design Philosophy

FortunaDelClub's design must communicate:
- **Trust** — Clean, professional, not flashy or casino-like
- **Accessibility** — Easy to use on mobile, fast to load
- **Community** — Warm, welcoming, not corporate
- **Clarity** — Information is easy to find and understand

The design should NOT look like a casino or gambling site. It should look like a trusted information and community platform.

---

## Mobile-First Design

The majority of Brazilian internet users access content via smartphone. All design decisions must prioritize mobile experience:

- Design for 375px width minimum (iPhone SE) as baseline
- Test all pages on mobile before publishing
- Touch targets minimum 44x44px
- No horizontal scrolling on mobile
- Font size minimum 16px for body text on mobile
- Adequate spacing between interactive elements

---

## Color Guidelines

### Primary Colors
- **Brand color:** To be defined — should convey trust and community (blues, greens, or warm neutrals work well)
- **WhatsApp green:** #25D366 — used exclusively for WhatsApp CTAs
- **Accent color:** Used for primary CTAs and highlights

### Color Rules
- Avoid overly bright, casino-style color schemes (neon, flashing)
- Maintain sufficient contrast ratios for accessibility (WCAG AA minimum)
- Use color consistently — same color always means the same thing
- Red should be reserved for warnings/errors, not decorative use

---

## Typography

- **Body text:** Minimum 16px, high readability font (system fonts or Google Fonts)
- **Headings:** Clear hierarchy — H1 > H2 > H3, visually distinct
- **Line height:** 1.5–1.7 for body text (improves readability on mobile)
- **Line length:** 60–75 characters per line for optimal readability
- **Font weight:** Use bold sparingly to highlight truly important information

---

## Layout Principles

### Page Structure
Every content page should follow this general structure:
1. Header with navigation
2. Breadcrumbs (sub-pages)
3. H1 title + intro paragraph
4. Table of contents (for long pages)
5. Main content with clear H2/H3 sections
6. WhatsApp CTA (mid-page on long content)
7. FAQ section (where applicable)
8. End-of-page WhatsApp CTA
9. Footer with legal links

### Content Width
- Maximum content width: 800px for readability
- Full-width sections allowed for CTAs, tables, and comparison blocks
- Adequate padding on mobile (minimum 16px sides)

---

## Navigation UX

- Main navigation: sticky header on scroll (stays visible)
- Mobile navigation: hamburger menu or bottom navigation bar
- Active page clearly indicated in navigation
- Breadcrumbs on all sub-pages
- Search functionality recommended (especially for FAQ and reviews)

---

## Trust and Credibility Design Elements

Include these elements to build visual trust:
- **Ratings/scores** — Visual star ratings or score badges on reviews
- **Last updated dates** — Visible on all reviews and guides
- **"Verificado" badges** — For verified platform information
- **Responsible gambling badge** — Visible in footer or sidebar
- **18+ notice** — In footer, always visible
- **Affiliate disclosure** — In footer and on review pages

---

## CTA Design

### WhatsApp CTA Button
- Color: #25D366 (WhatsApp green)
- Icon: WhatsApp logo
- Text: Clear action ("Falar no WhatsApp")
- Size: Large enough to tap easily on mobile
- Floating button: Fixed bottom-right, z-index above content

### Platform/Affiliate CTA Buttons
- Distinct from WhatsApp buttons (different color)
- Clear label: "Visitar [Platform]" or "Cadastre-se"
- Should not be confused with WhatsApp CTAs

---

## Image Guidelines

- Use relevant, high-quality images
- Compress all images (target under 100KB for most images)
- Use WebP format where supported
- Always include descriptive alt text
- Avoid stock photos that look generic or untrustworthy
- Platform logos: use official logos, keep up to date
- No images of people gambling in distress or celebrating excessively

---

## Accessibility Requirements

- WCAG AA compliance minimum
- All images have alt text
- Color is not the only way to convey information
- Forms have proper labels
- Keyboard navigation works
- Screen reader compatible structure (proper heading hierarchy, ARIA labels)

---

## Page Speed Targets

- **Largest Contentful Paint (LCP):** Under 2.5 seconds
- **First Input Delay (FID) / INP:** Under 200ms
- **Cumulative Layout Shift (CLS):** Under 0.1
- Test with Google PageSpeed Insights regularly
- Prioritize mobile scores

---

*Previous: [13 - WhatsApp Integration](./13-whatsapp-integration.md) | Next: [15 - Risk Areas and Monitoring](./15-risk-areas-monitoring.md)*