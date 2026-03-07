"use client";

import ProjectCarousel from "@/components/ProjectCarousel";

export default function ProjectShowcase({ project }) {
  return (
    <div className="rounded-[32px] border border-white/10 bg-white/4 p-6 md:p-8">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.18em] text-emerald-400">
          {project.category}
        </p>
        <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
          {project.title}
        </h2>
      </div>

      <ProjectCarousel images={project.images} title={project.title} />

      <p className="mt-6 max-w-4xl leading-8 text-slate-300">
        {project.description}
      </p>
    </div>
  );
}
