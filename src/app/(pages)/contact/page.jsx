import { Mail, Phone, MapPin, Clock3, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <section className="px-6 pt-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-emerald-400">
            Contact
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Let’s discuss your next lead generation website.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Reach out to discuss your goals, website redesign needs, or the type
            of digital experience you want to build for your business.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-[28px] border border-white/10 bg-white/4 p-6">
              <Mail className="h-6 w-6 text-blue-400" />
              <h2 className="mt-4 text-xl font-semibold">Email Us</h2>
              <a
                href="mailto:info@duoleadpro.com"
                className="mt-3 inline-block text-slate-300 transition hover:text-white"
              >
                info@duoleadpro.com
              </a>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/4 p-6">
              <Phone className="h-6 w-6 text-emerald-400" />
              <h2 className="mt-4 text-xl font-semibold">Call Us</h2>
              <a
                href="tel:+31636547428"
                className="mt-3 inline-block text-slate-300 transition hover:text-white"
              >
                +31 6 36547428
              </a>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/4 p-6">
              <MessageCircle className="h-6 w-6 text-green-400" />
              <h2 className="mt-4 text-xl font-semibold">WhatsApp</h2>
              <a
                href="https://wa.me/31636547428?text=Hi%20DuoLeadPro,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-slate-300 transition hover:text-white"
              >
                Start WhatsApp Chat
              </a>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/4 p-6">
              <MapPin className="h-6 w-6 text-blue-400" />
              <h2 className="mt-4 text-xl font-semibold">Visit Us</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Prins Hendrikkade 21e, 1012 TL Amsterdam, Netherlands
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/4 p-6">
              <Clock3 className="h-6 w-6 text-emerald-400" />
              <h2 className="mt-4 text-xl font-semibold">Business Hours</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </main>
  );
}
