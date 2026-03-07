"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

const data = [
  { subject: "Lead Quality", value: 82 },
  { subject: "Trust Signals", value: 88 },
  { subject: "Mobile UX", value: 91 },
  { subject: "Page Clarity", value: 86 },
  { subject: "Conversion Flow", value: 89 },
  { subject: "Performance", value: 84 },
];

export default function ServiceImpactChart() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/4 p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-white">
          Redesign Value Overview
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-slate-300">
          A conceptual view of the areas improved through better website
          structure, stronger UI decisions, clearer content flow, and modern
          frontend execution.
        </p>
      </div>

      <div className="h-95 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.15)" />
            <PolarAngleAxis dataKey="subject" stroke="#cbd5e1" />
            <PolarRadiusAxis stroke="rgba(255,255,255,0.2)" />
            <Tooltip />
            <Radar
              name="Impact"
              dataKey="value"
              stroke="#60a5fa"
              fill="#60a5fa"
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
