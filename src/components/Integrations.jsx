"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Users,
  TrendingUp,
  MessageCircle,
  Mail,
  ShieldCheck,
} from "lucide-react";

const integrations = [
  {
    icon: Globe,
    title: "Global Sourcing & Vetting",
    description:
      "We search international talent pools and conduct thorough screenings to find the perfect match.",
    tools: [
      "Global Talent Network",
      "Technical Screening",
      "Background Checks",
    ],
  },
  {
    icon: Users,
    title: "Seamless Integration & Onboarding",
    description:
      "A smooth onboarding process that seamlessly integrates talent into your team and company culture.",
    tools: ["Onboarding Support", "Team Integration", "Culture Alignment"],
  },
  {
    icon: TrendingUp,
    title: "Performance Monitoring & Support",
    description:
      "Continuous monitoring, feedback and support to ensure maximum performance.",
    tools: ["Performance Reviews", "Progress Tracking", "Team Feedback"],
  },
  {
    icon: MessageCircle,
    title: "Direct Communication Channels",
    description:
      "Maintain strong communication with dedicated channels between your team and our placed professionals.",
    tools: ["Slack", "Teams", "WhatsApp"],
  },
  {
    icon: Mail,
    title: "Client Updates & Reporting",
    description:
      "Regular updates and reporting ensure you always know how your team and projects are progressing.",
    tools: ["Email Reports", "Weekly Updates", "Client Dashboards"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Security",
    description:
      "We ensure contracts, compliance and security standards are maintained across international hiring.",
    tools: ["Contract Management", "Compliance Checks", "Data Protection"],
  },
];

export default function Integrations() {
  return (
    <section className="bg-[#0f172a] py-24 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Our Process
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            How we help companies build high-performing teams.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            Our approach focuses on sourcing top global talent, integrating them
            smoothly into your company, and supporting long-term performance
            through strong communication and continuous monitoring.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {integrations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/4 p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-[#111827] px-3 py-1 text-sm text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
