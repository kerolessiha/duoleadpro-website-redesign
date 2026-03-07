import ProjectShowcase from "@/components/ProjectShowcase";

const projects = [
  {
    title: "Plumbing Company",
    category: "Lead Generation Website",
    description:
      "A complete website for a plumbing company in Amsterdam. The website features a professional dark theme with orange accents, WhatsApp integration, a clear services page, Google Maps integration for the service area, a project portfolio with slideshow and a contact form. Fully responsive and optimized for mobile use.",
    images: [
      "/projects/plumber-1.jpg",
      "/projects/plumber-2.jpg",
      "/projects/plumber-3.jpg",
      "/projects/plumber-4.jpg",
      "/projects/plumber-5.jpg",
      "/projects/plumber-6.jpg",
      "/projects/plumber-7.jpg",
    ],
  },
  {
    title: "Electric Company",
    category: "Service Business Website",
    description:
      "A professional website for an electrical company. The website features an elegant dark design with golden accents, a family story section, extensive services page with six specializations, a step-by-step process, project gallery, FAQ section and contact form. Fully responsive with mobile optimization.",
    images: [
      "/projects/electric-1.jpg",
      "/projects/electric-2.jpg",
      "/projects/electric-3.jpg",
      "/projects/electric-4.jpg",
      "/projects/electric-5.jpg",
      "/projects/electric-6.jpg",
      "/projects/electric-7.jpg",
    ],
  },
  {
    title: "Painting Company",
    category: "Modern Business Website",
    description:
      "An elegant website for a painting company with a warm, refined design in cream and gold tones. The website features a hero section with mobile preview, six specialized services, a before-and-after gallery, service area with city overview, company story with experience counter, FAQ section and contact form with quote request. Fully responsive with mobile optimization.",
    images: [
      "/projects/painter-1.jpg",
      "/projects/painter-2.jpg",
      "/projects/painter-3.jpg",
      "/projects/painter-4.jpg",
      "/projects/painter-5.jpg",
      "/projects/painter-6.jpg",
      "/projects/painter-7.jpg",
    ],
  },
];

export default function OurWebDesignPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <section className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-400">
            Our Web Design
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Website projects designed for clarity, trust, and better conversion.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Explore selected website concepts and redesign directions focused on
            helping service businesses present their brand more effectively and
            generate more qualified leads.
          </p>
        </section>

        <section className="mt-16 space-y-12">
          {projects.map((project, index) => (
            <ProjectShowcase key={index} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}
