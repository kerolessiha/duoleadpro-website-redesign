import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#0b1220] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10 lg:px-16">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
          Ready to grow?
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Let’s build a website that generates more qualified leads.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Get in touch to discuss your business goals, website redesign, or the
          kind of conversion-focused experience you want to create.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-slate-200"
          >
            Contact Us
          </Link>

          <a
            href="https://wa.me/31636547428?text=Hi%20DuoLeadPro,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
