import Image from "next/image";
import { MapPin, Users, Building2, Clock3 } from "lucide-react";

const teamMembers = [
  {
    name: "Léon Rossingh",
    role: "Founder",
    image: "/team/leon.jpg",
    description:
      "With a sharp eye for talent and international markets, Léon leads the operational strategy of DuoLeadPro. His vision: every organization deserves access to the best global talent.",
  },
  {
    name: "Abood Mobarak",
    role: "Co-Founder",
    image: "/team/abood.jpg",
    description:
      "Abood combines technological expertise with deep knowledge of digital marketing. He is the driving force behind the innovative solutions that set DuoLeadPro apart.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <section>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-400">
            About DuoLeadPro
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Two Visions. One Mission: Global Growth
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            At DuoLeadPro B.V., we believe great results come from the right
            connections. By linking international talent with ambitious
            companies, we help organizations grow beyond borders. Operating from
            Amsterdam, we connect continents, cultures, and expertise to create
            new opportunities worldwide.
          </p>
        </section>

        {/* Story + Location */}
        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/4 p-8">
            <div className="mb-4 flex items-center gap-3">
              <Building2 className="h-6 w-6 text-blue-400" />
              <h2 className="text-2xl font-semibold">Our Story</h2>
            </div>

            <p className="leading-8 text-slate-300">
              DuoLeadPro was built around a simple idea: many service businesses
              struggle with websites that look acceptable but do not actually
              generate enough qualified leads. By combining modern frontend
              execution, clearer messaging, and conversion-focused UX, the brand
              aims to help companies turn traffic into real opportunities.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              This redesign positions DuoLeadPro as a stronger digital partner,
              with a more premium visual direction and a clearer presentation of
              value, process, trust, and results.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/4 p-8">
            <div className="mb-4 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-emerald-400" />
              <h2 className="text-2xl font-semibold">Location & Presence</h2>
            </div>

            <div className="space-y-4 text-slate-300">
              <p>
                DuoLeadPro is based in Amsterdam, Netherlands, serving service
                businesses with digital experiences designed for conversion,
                clarity, and growth.
              </p>

              <p className="leading-7">
                <span className="font-medium text-white">Address:</span>
                <br />
                Prins Hendrikkade 21e, 1012 TL Amsterdam, Netherlands
              </p>

              <p className="leading-7">
                <span className="font-medium text-white">Business Hours:</span>
                <br />
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Users className="h-6 w-6 text-blue-400" />
            <h2 className="text-3xl font-semibold">Meet the Team</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-[28px] border border-white/10 bg-white/4 p-7"
              >
                <div className="mb-5 h-20 w-20 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold">{member.name}</h3>

                <p className="mt-2 text-sm text-blue-300">{member.role}</p>

                <p className="mt-4 leading-7 text-slate-300">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Visit Us */}
        <section className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Clock3 className="h-6 w-6 text-emerald-400" />
            <h2 className="text-3xl font-semibold">Visit Us</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/4 p-8">
              <h3 className="text-2xl font-semibold">Office Information</h3>

              <p className="mt-5 leading-8 text-slate-300">
                Our office is located in central Amsterdam, making it easy to
                connect with clients and businesses looking to improve their
                digital lead generation experience.
              </p>

              <div className="mt-8 space-y-4 text-slate-300">
                <p>
                  <span className="font-medium text-white">Address:</span>
                  <br />
                  Prins Hendrikkade 21e, 1012 TL Amsterdam, Netherlands
                </p>

                <p>
                  <span className="font-medium text-white">Hours:</span>
                  <br />
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/4">
              <iframe
                title="DuoLeadPro Location"
                src="https://www.google.com/maps?q=Prins%20Hendrikkade%2021e,%201012%20TL%20Amsterdam,%20Netherlands&output=embed"
                className="h-105 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
