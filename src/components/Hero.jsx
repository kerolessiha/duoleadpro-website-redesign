"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(16,185,129,0.12),transparent_25%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-16 md:px-10 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Built for local service businesses
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connect Your Business with Global Talent.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              At DuoLeadPro B.V., we connect businesses with skilled talent
              across the world. Through international lead generation, staffing,
              and digital solutions, we help companies expand, scale, and
              succeed globally. Your trusted partner for bridging talent and
              opportunity.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="h-12 rounded-full bg-white px-6 text-black hover:bg-slate-200">
                Book a strategy call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-white/5 px-6 text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4" />
                See how it works
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Faster lead capture
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Modern UX/UI
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                Built for growth
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[24px] border border-white/10 bg-[#111827] p-4">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Lead Performance</p>
                    <h3 className="text-lg font-semibold text-white">
                      Conversion Dashboard
                    </h3>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    +28% this month
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-sm text-slate-400">Monthly Leads</p>
                    <h4 className="mt-2 text-3xl font-semibold">148</h4>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[72%] rounded-full bg-blue-400" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                    <p className="text-sm text-slate-400">Booked Calls</p>
                    <h4 className="mt-2 text-3xl font-semibold">39</h4>
                    <div className="mt-4 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[58%] rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/3 p-4 sm:col-span-2">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm text-slate-400">
                        Conversion Funnel Overview
                      </p>
                      <span className="text-xs text-slate-500">
                        Last 30 days
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="mb-1 flex justify-between text-sm text-slate-300">
                          <span>Visitors</span>
                          <span>4,280</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-full rounded-full bg-slate-500" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex justify-between text-sm text-slate-300">
                          <span>Leads</span>
                          <span>148</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[62%] rounded-full bg-blue-400" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex justify-between text-sm text-slate-300">
                          <span>Qualified Calls</span>
                          <span>39</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[34%] rounded-full bg-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#0f172a]/90 px-4 py-3 shadow-xl backdrop-blur md:block">
                <p className="text-xs text-slate-400">Lead Quality</p>
                <p className="text-lg font-semibold text-white">
                  High-intent traffic
                </p>
              </div>

              <div className="absolute -right-5 -top-5 hidden rounded-2xl border border-white/10 bg-[#0f172a]/90 px-4 py-3 shadow-xl backdrop-blur md:block">
                <p className="text-xs text-slate-400">Average Response</p>
                <p className="text-lg font-semibold text-white">&lt; 5 min</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
