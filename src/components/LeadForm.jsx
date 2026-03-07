"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Please enter your company name"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please add a short project message"),
});

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Thanks! Your project inquiry has been captured.");
    reset();
  };

  return (
    <section id="contact" className="bg-[#0b1220] py-24 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let’s build a website that turns more traffic into leads.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Whether you need a redesign, stronger landing pages, or a cleaner
            frontend experience, this concept is built to support business
            growth through better UX and conversion strategy.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/4 p-6 shadow-2xl backdrop-blur-sm md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Full name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="John Carter"
                className="h-12 w-full rounded-2xl border border-white/10 bg-[#111827] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="john@company.com"
                className="h-12 w-full rounded-2xl border border-white/10 bg-[#111827] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Company
              </label>
              <input
                {...register("company")}
                type="text"
                placeholder="Your company name"
                className="h-12 w-full rounded-2xl border border-white/10 bg-[#111827] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
              />
              {errors.company && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Select a service
              </label>
              <select
                {...register("service")}
                className="h-12 w-full rounded-2xl border border-white/10 bg-[#111827] px-4 text-white outline-none transition focus:border-blue-400"
              >
                <option value="" className="bg-[#111827] text-slate-400">
                  Select a service
                </option>
                <option value="IT & Sales Staffing" className="bg-[#111827]">
                  IT & Sales Staffing
                </option>
                <option value="Website Development" className="bg-[#111827]">
                  Website Development
                </option>
                <option value="IT Consulting" className="bg-[#111827]">
                  IT Consulting
                </option>
                <option
                  value="Lead Generation & Marketing"
                  className="bg-[#111827]"
                >
                  Lead Generation & Marketing
                </option>
              </select>
              {errors.service && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Project details
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us a bit about your goals, current website, or the type of leads you want to generate."
                className="w-full rounded-2xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button className="h-12 w-full rounded-full bg-white text-black hover:bg-slate-200">
              Send inquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
