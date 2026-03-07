"use client";

import { motion } from "framer-motion";
import {
  Users,
  MonitorSmartphone,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Global IT & Sales Staffing",
    description:
      "We find, screen and place top IT and sales talent for your organization, worldwide.",
  },
  {
    icon: MonitorSmartphone,
    title: "Conversion-Boosting Website Development",
    description:
      "High-performance websites for service companies that convert visitors into customers.",
  },
  {
    icon: BriefcaseBusiness,
    title: "IT Consulting & Scalable Solutions",
    description:
      "Strategic advice and implementation of scalable technology solutions.",
  },
  {
    icon: TrendingUp,
    title: "Targeted Lead Generation & Marketing",
    description:
      "We help service companies get more customers through Google Ads, Meta Ads and smart online marketing.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0f172a] py-24 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            End-to-end solutions for growth, talent, and digital performance.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            DuoLeadPro supports companies with global staffing, website
            development, IT consulting, and performance-driven lead generation
            services designed to help businesses scale with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-[28px] border border-white/10 bg-white/4 p-7 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div
          id="why-us"
          className="mt-16 grid gap-6 rounded-[32px] border border-white/10 bg-white/3 p-8 md:grid-cols-3 md:p-10"
        >
          <div>
            <p className="text-3xl font-semibold text-white">01</p>
            <h3 className="mt-3 text-xl font-semibold">Global IT Staffing</h3>
            <p className="mt-3 leading-7 text-slate-300">
              We have placed more than 20 qualified IT professionals at
              companies around the world — from front-end developers in Europe
              to full-stack engineers in the Middle East. Thanks to our
              department in Egypt, we can act quickly and flexibly.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-white">02</p>
            <h3 className="mt-3 text-xl font-semibold">
              Websites for Service Companies
            </h3>
            <p className="mt-3 leading-7 text-slate-300">
              We build professional websites for service companies like
              plumbers, painters and gardeners. Complete with WhatsApp
              integration, contact forms and Google Reviews — designed to
              convert visitors into customers.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-white">03</p>
            <h3 className="mt-3 text-xl font-semibold">Google Ads Campaigns</h3>
            <p className="mt-3 leading-7 text-slate-300">
              We help service companies set up their Google Ads campaigns so
              they are immediately visible when potential customers search for
              their services. Targeted, measurable and scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
