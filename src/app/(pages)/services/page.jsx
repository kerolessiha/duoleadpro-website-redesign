import ServiceImpactChart from "@/components/ServiceImpactChart";

const services = [
  {
    title: "Global IT & Sales Staffing",
    description:
      "We find, screen and place top IT and sales talent for your organization, worldwide.",
    intro:
      "Our staffing team connects businesses with qualified IT professionals around the world. Whether you're looking for full-time employees or specialists for a single project, we have the right match.",
    points: [
      "Front-end Developers — React, Vue, Angular for user-friendly interfaces and responsive websites.",
      "Back-end Developers — Node.js, Python, Java for robust APIs, databases and server logic.",
      "Full-stack Developers — combining front-end and back-end, ideal for startups and smaller teams.",
      "Mobile Developers — iOS, Android, React Native, Flutter for native and cross-platform apps.",
      "DevOps Engineers — CI/CD, AWS, Azure, GCP for automation and scaling.",
      "UI/UX Designers — wireframes, prototypes and user research for intuitive experiences.",
    ],
    highlightTitle: "Egypt Department",
    highlight:
      "In addition to full-time placements, our department in Egypt also offers the option to hire IT professionals for individual assignments and projects. This gives you the flexibility to deploy specialist talent when you need it, without long-term contracts. Ideal for short sprints, MVP development or temporary capacity expansion.",
    cta: "Hire IT Talent",
  },
  {
    title: "Conversion-Boosting Website Development",
    description:
      "High-performance websites for service companies that convert visitors into customers.",
    intro:
      "We build websites specifically for service companies — from plumbers and painters to gardeners and cleaning companies. Every website is designed to generate leads and convert customers.",
    points: [
      "WhatsApp integration — customers can contact you directly via WhatsApp.",
      "Lead & contact form — receive inquiries directly in your inbox.",
      "Google Reviews connection — show your ratings automatically on your website.",
      "Responsive design — perfect on desktop, tablet and mobile.",
      "SEO-optimized — easily found on Google.",
      "Design of your choice — you choose the style that fits your business.",
    ],
    highlightTitle: "Design Flexibility",
    highlight:
      "Check out our example styles below and tell us which design appeals to you — we’ll make it exactly how you want.",
    cta: "Get a Free Website Quote",
  },
  {
    title: "IT Consulting & Scalable Solutions",
    description:
      "Strategic advice and implementation of scalable technology solutions.",
    intro:
      "From choosing the right tech stack to setting up scalable cloud infrastructure, our consulting team helps you make the right decisions for your business.",
    points: [
      "Cloud migration & infrastructure consulting",
      "Software architecture & technical audits",
      "Digital transformation strategy",
      "Team building & technical leadership",
    ],
    cta: "Talk to a Consultant",
  },
  {
    title: "Targeted Lead Generation & Marketing",
    description:
      "We help service companies get more customers through Google Ads, Meta Ads and smart online marketing.",
    intro:
      "We help service companies set up their marketing so they consistently attract new customers. From Google Ads to Meta (Facebook/Instagram) ads, we handle it for you.",
    points: [
      "Google Ads (SEA) — paid ads at the top of Google for customers actively searching for your service.",
      "Meta Ads — visual ads on Facebook and Instagram to reach people in your service area.",
      "Campaign Optimization — continuous monitoring and optimization for the best results at the lowest cost.",
      "Reporting & Insights — monthly reports so you know exactly what your investment delivers.",
    ],
    subsections: [
      {
        title: "SEO (Search Engine Optimization)",
        text: "SEO ensures your website appears organically (free) high in Google. It takes time to see results, usually 3–6 months, but then delivers continuous traffic.",
      },
      {
        title: "SEA (Search Engine Advertising)",
        text: 'SEA refers to paid ads at the top of Google with the "Sponsored" label. You pay per click, but you see immediate results. Ideal if you want new customers quickly.',
      },
    ],
    note:
      "Our websites are SEO-optimized by default, and SEA setup is available as an optional service when you're ready.",
    highlightTitle: "Why marketing for service companies?",
    highlightList: [
      "Customers search Google daily for services like yours.",
      "Your competitors are already advertising — don’t fall behind.",
      "Measurable results: you know exactly how many customers your ads generate.",
      "Flexible budget: start small and scale up when you see results.",
      "Local reach: target only customers in your service area.",
    ],
    cta: "Start Marketing Growth",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <section>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-400">
            Services
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Complete Services for Growth, Talent, and Digital Performance
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            DuoLeadPro supports businesses with global staffing, website
            development, IT consulting, and targeted marketing solutions. Our
            services are designed to help companies grow faster, strengthen
            their digital presence, and build reliable systems for long-term
            success.
          </p>
        </section>

        <section className="mt-16 space-y-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[32px] border border-white/10 bg-white/4 p-8 md:p-10"
            >
              <h2 className="text-2xl font-semibold md:text-3xl">
                {service.title}
              </h2>

              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-200">
                {service.description}
              </p>

              {service.intro && (
                <p className="mt-5 max-w-4xl leading-8 text-slate-300">
                  {service.intro}
                </p>
              )}

              {service.points?.length > 0 && (
                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 leading-7 text-slate-300"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {service.subsections?.length > 0 && (
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {service.subsections.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/3 p-6"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 leading-8 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {service.note && (
                <div className="mt-8 rounded-[24px] border border-emerald-400/20 bg-emerald-400/10 p-6">
                  <p className="leading-8 text-emerald-100">{service.note}</p>
                </div>
              )}

              {service.highlight && (
                <div className="mt-8 rounded-[24px] border border-blue-400/20 bg-blue-400/10 p-6">
                  {service.highlightTitle && (
                    <h3 className="text-xl font-semibold text-white">
                      {service.highlightTitle}
                    </h3>
                  )}
                  <p className="mt-4 leading-8 text-slate-200">
                    {service.highlight}
                  </p>
                </div>
              )}

              {service.highlightList?.length > 0 && (
                <div className="mt-8 rounded-[24px] border border-blue-400/20 bg-blue-400/10 p-6">
                  {service.highlightTitle && (
                    <h3 className="text-xl font-semibold text-white">
                      {service.highlightTitle}
                    </h3>
                  )}

                  <ul className="mt-5 space-y-3">
                    {service.highlightList.map((item) => (
                      <li key={item} className="leading-7 text-slate-200">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* لو عايز ترجع الزرار شغّله */}
              {/* <button className="mt-8 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-slate-200">
                {service.cta}
              </button> */}
            </div>
          ))}
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-emerald-400">
              Expected Impact
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              How these services support business growth.
            </h2>
          </div>

          <ServiceImpactChart />
        </section>
      </div>
    </main>
  );
}