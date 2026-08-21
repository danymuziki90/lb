"use client";

import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

export type Realisation = {
  title: string;
  category: string;
  description: string;
  year?: string;
  impact?: string;
  tags: string[];
  href?: string;
  image?: string;
  featured?: boolean;
};

type RealisationsProps = {
  label: string;
  title: string;
  subtitle?: string;
  projects: Realisation[];
  viewProjectLabel?: string;
};

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function ProjectVisual({ project, featured = false }: { project: Realisation; featured?: boolean }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt=""
        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative h-full w-full overflow-hidden bg-night"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(214,176,92,0.45),transparent_30%),linear-gradient(135deg,#0a1d40_0%,#132d5b_48%,#07152e_100%)]" />
      <div className="absolute -right-10 top-8 h-40 w-40 rounded-full border border-white/15" />
      <div className="absolute right-10 top-24 h-28 w-28 rounded-full border border-gold/50" />
      <div className="absolute bottom-0 left-0 h-[40%] w-full bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_45%,transparent_46%)]" />
      <div className="absolute bottom-7 left-7 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
        {featured ? "Étude de cas" : project.category}
      </div>
    </div>
  );
}

export default function Realisations({
  label,
  title,
  subtitle,
  projects,
  viewProjectLabel = "Découvrir le projet",
}: RealisationsProps) {
  const [featuredProject, ...otherProjects] = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ];

  if (!featuredProject) return null;

  return (
    <section id="realisations" className="relative overflow-hidden bg-[#f6f8fb] py-20 dark:bg-night md:py-28">
      <div aria-hidden="true" className="absolute left-0 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-institutional/[0.06] blur-3xl dark:bg-gold/[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          variants={reveal}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-institutional dark:text-gold">{label}</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-night dark:text-white sm:text-4xl md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-5 max-w-xl text-base leading-7 text-night/65 dark:text-white/65 md:text-lg">{subtitle}</p>}
        </motion.div>

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          variants={reveal}
          className="group mt-12 grid overflow-hidden rounded-3xl border border-night/10 bg-white shadow-[0_24px_70px_-35px_rgba(11,30,63,0.45)] dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-[1.08fr_0.92fr]"
        >
          <div className="relative min-h-72 overflow-hidden lg:min-h-[30rem]">
            <ProjectVisual project={featuredProject} featured />
            <div className="absolute inset-0 bg-gradient-to-t from-night/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
          <div className="flex flex-col p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.16em] text-institutional dark:text-gold">
              <span>{featuredProject.category}</span>
              {featuredProject.year && <span className="text-night/40 dark:text-white/40">{featuredProject.year}</span>}
            </div>
            <h3 className="mt-8 font-display text-3xl font-bold tracking-tight text-night dark:text-white sm:text-4xl">{featuredProject.title}</h3>
            <p className="mt-5 text-base leading-7 text-night/65 dark:text-white/65">{featuredProject.description}</p>
            {featuredProject.impact && (
              <p className="mt-6 border-l-2 border-gold pl-4 text-sm font-semibold leading-6 text-night dark:text-white">{featuredProject.impact}</p>
            )}
            <div className="mt-8 flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-night/[0.045] px-3 py-1.5 text-xs font-medium text-night/70 dark:bg-white/[0.08] dark:text-white/70">{tag}</span>
              ))}
            </div>
            {featuredProject.href && (
              <a href={featuredProject.href} target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-bold text-institutional transition-colors hover:text-gold dark:text-gold">
                {viewProjectLabel}<HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
          </div>
        </motion.article>

        {otherProjects.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                variants={reveal}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-night/10 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-night/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-black/20"
              >
                <div className="aspect-[16/10] overflow-hidden"><ProjectVisual project={project} /></div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-institutional dark:text-gold">
                    <span>{project.category}</span>{project.year && <span className="text-night/40 dark:text-white/40">{project.year}</span>}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-night dark:text-white">{project.title}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-night/60 dark:text-white/60">{project.description}</p>
                  {project.href && (
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${viewProjectLabel} : ${project.title}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-night transition-colors hover:text-institutional dark:text-white dark:hover:text-gold">
                      {viewProjectLabel}<HiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
