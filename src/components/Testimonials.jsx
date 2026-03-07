"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aleksander Szczepaniak",
    role: "Owner, Local Electrical Company",
    quote:
      "Great experience working with DuoLeadPro. They configured my business addresses and handled email warm-up and first lead generation campaign. Fantastic value for this price.",
  },
  {
    name: "Info Shape4her",
    role: "Marketing Manager, Service Brand",
    quote:
      "De mannen van DuoLeadPro hebben mij inmiddels twee verschillende websites voor 2 van mijn bedrijven geleverd. Ik wou specifiek de optie dat bezoekers hun gegevens konden achterlaten met de optie om foto en/of video toe te voegen, wat gelukt is en ik krijg alles wat ingevuld wordt op de website netjes op de mail binnen. Mocht ik ooit weer een website nodig hebben, ik kom zeker terug!.",
  },
  {
    name: "House Amoura",
    role: "Founder, Home Services Business",
    quote:
      "We had some problems regarding our website, we reached out to DuoLeadPro and within a week our new website was up and running. Friendly people who deliver good work!.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0f172a] py-24 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Testimonials
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            A more trustworthy experience from the first scroll.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Social proof helps reduce hesitation and makes the brand feel more
            established, credible, and conversion-ready.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/4 p-7"
            >
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>

              <p className="mt-6 leading-7 text-slate-300">“{item.quote}”</p>

              <div className="mt-8">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
