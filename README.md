# DuoLeadPro Website Redesign

A modern redesign concept for the **DuoLeadPro** website built with **Next.js**.
This project focuses on improving **UI/UX, visual hierarchy, and lead conversion** for service businesses.

The redesign presents DuoLeadPro as a stronger digital partner by improving the structure of the website, clarifying the services, and showcasing example projects.

---

## Live Preview

https://duoleadpro-website-redesign.vercel.app/

---

## GitHub Repository

https://github.com/kerolessiha/duoleadpro-website-redesign

---

## Tech Stack

Main technologies used in this project:

- Next.js (App Router)
- React
- JavaScript (JSX)
- Tailwind CSS

---

## Libraries Used

### UI and Styling

- Tailwind CSS
- clsx
- tailwind-merge
- shadcn/ui
- lucide-react

### Animations

- framer-motion

### Forms and Validation

- react-hook-form
- zod
- @hookform/resolvers

### Components

- embla-carousel-react (image carousel)

### Data Visualization

- recharts (service impact chart)

---

## Website Pages

The redesign includes the following pages:

- Home
- Services
- Our Web Design
- About
- Contact
- 404 Not Found
- Loading state

---

## Key Improvements

### 1. Modern Design Direction

The website was redesigned with:

- dark modern UI
- improved spacing
- clearer typography
- stronger section hierarchy
- reusable UI components

### 2. Improved Homepage Structure

The homepage was reorganized to guide visitors through a clearer journey:

- Hero section
- Services overview
- Case studies preview
- Process / integrations section
- FAQ section
- Final CTA

### 3. Updated Services Page

The services page clearly presents DuoLeadPro offerings:

- Global IT & Sales Staffing
- Conversion-Boosting Website Development
- IT Consulting & Scalable Solutions
- Targeted Lead Generation & Marketing

Each service contains structured descriptions, feature lists, and explanatory sections.

### 4. Case Studies Section

A case studies section was added to demonstrate project directions for service businesses.

Examples include:

- Plumbing company website
- Electrical company website
- Painting company website

Each case includes:

- project concept
- design direction
- key focus
- expected impact

### 5. Our Web Design Page

A dedicated page showcases website concepts.

Each project contains:

- title
- category
- detailed description
- image carousel
- responsive layouts

### 6. About Page

The about page includes:

- company story
- team members with photos
- company location
- Google Maps integration
- business hours

### 7. Contact Experience

The contact section includes:

- clickable email
- clickable phone
- WhatsApp chat link
- contact form with service selection
- business information

### 8. Conversion-Focused UX

The redesign focuses on improving lead generation by:

- stronger CTAs
- simplified navigation
- clearer messaging
- improved mobile experience

---

## Project Structure

```text
src
├── app
│   ├── about
│   ├── contact
│   ├── loading.jsx
│   ├── not-found.jsx
│   ├── our-web-design
│   ├── services
│   └── page.jsx
│
├── components
│   ├── ui
│   │   ├── accordion.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   └── textarea.jsx
│   │
│   ├── CaseStudies.jsx
│   ├── FAQ.jsx
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Integrations.jsx
│   ├── LeadForm.jsx
│   ├── Navbar.jsx
│   ├── ProjectCarousel.jsx
│   ├── ProjectShowcase.jsx
│   ├── ServiceImpactChart.jsx
│   ├── Services.jsx
│   ├── Testimonials.jsx
│   └── WhatsAppButton.jsx
│
└── lib
    └── utils.js
```

---

## Running the Project

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Notes

The content in this redesign was rewritten and restructured to better communicate the services and improve clarity.
The goal of the project is to demonstrate how DuoLeadPro's website could look with a stronger modern design and a conversion-focused structure.

---

## Author

Keroles Siha  
Frontend Developer
