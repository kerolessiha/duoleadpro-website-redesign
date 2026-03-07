"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Wrench, Zap, Paintbrush } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    title: "Plumbing Company",
    category: "Lead Generation Website",
    summary:
      "A complete website for a plumbing company in Amsterdam featuring a professional dark theme with orange accents, WhatsApp integration, Google Maps support, project portfolio slideshow, and a responsive contact experience.",
    metrics: [
      { label: "Design style", value: "Dark + Orange" },
      { label: "Key focus", value: "Lead Generation" },
    ],
    icon: Wrench,
  },
  {
    title: "Electric Company",
    category: "Service Business Website",
    summary:
      "A professional electrical company website with an elegant dark design and golden accents, including a family story section, six service specializations, project gallery, FAQ section, and responsive contact form.",
    metrics: [
      { label: "Design style", value: "Dark + Gold" },
      { label: "Key focus", value: "Trust + Clarity" },
    ],
    icon: Zap,
  },
  {
    title: "Painting Company",
    category: "Modern Business Website",
    summary:
      "An elegant website for a painting company with a warm cream and gold visual direction, including a before-and-after gallery, service area overview, experience counter, FAQ section, and quote request form.",
    metrics: [
      { label: "Design style", value: "Cream + Gold" },
      { label: "Key focus", value: "Premium Brand Feel" },
    ],
    icon: Paintbrush,
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="bg-[#0b1220] py-24 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
              Case studies
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Selected website concepts built for service businesses.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              These project directions show how DuoLeadPro can create tailored
              digital experiences for service companies through stronger design,
              mobile responsiveness, and conversion-focused structure.
            </p>
          </div>

          <a
            href="/our-web-design"
            className="inline-flex items-center text-sm font-medium text-white transition hover:text-emerald-300"
          >
            Explore all designs
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cases.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/4 p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/6"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">{item.summary}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {item.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-[#111827] p-4"
                    >
                      <p className="text-sm text-slate-400">{metric.label}</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/our-web-design"
                  className="mt-8 inline-flex items-center text-sm font-medium text-white transition group-hover:text-emerald-300"
                >
                  View full project
                  <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
