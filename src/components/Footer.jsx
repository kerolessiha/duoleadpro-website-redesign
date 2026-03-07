import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold">DuoLeadPro</h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              DuoLeadPro helps service businesses grow through modern websites,
              better UX, and conversion-focused digital experiences designed to
              generate qualified leads.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-slate-400">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>

              <Link href="/about" className="transition hover:text-white">
                About
              </Link>

              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h4>

            <div className="mt-5 flex flex-col gap-4 text-slate-400">
              <a
                href="mailto:info@duoleadpro.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail size={16} />
                info@duoleadpro.com
              </a>

              <a
                href="tel:+31636547428"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone size={16} />
                +31 6 36547428
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                <p className="text-sm leading-6">
                  Prins Hendrikkade 21e <br />
                  1012 TL Amsterdam <br />
                  Netherlands
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Business Hours
            </h4>

            <div className="mt-5 text-slate-400">
              <p>Monday - Friday</p>
              <p className="mt-2">9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} DuoLeadPro. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
