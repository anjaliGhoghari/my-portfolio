import React from "react";

/**
 * Replace the images with real screenshots of your apps (recommended).
 * Replace `live` and `github` with your real links.
 */

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    desc: "Product pages, cart, checkout, responsive UI.",
    image:
      "https://images.unsplash.com/photo-1515165562835-c3b8c2e969c7?q=80&w=1600&auto=format&fit=crop",
    live: "https://your-ecommerce.vercel.app",
    github: "https://github.com/you/ecommerce",
    tags: ["React", "Stripe", "Tailwind"],
  },
  {
    title: "Portfolio v2",
    desc: "Animated portfolio with sections & case studies.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/you/portfolio",
    tags: ["React", "Framer Motion", "Vite"],
  },
  {
    title: "AI Chat Tool",
    desc: "Chat UI, streaming responses, prompt tools.",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1600&auto=format&fit=crop",
    live: "https://your-ai-chat.vercel.app",
    github: "https://github.com/you/ai-chat",
    tags: ["React", "API", "Tailwind"],
  },
];

const otherProjects = [
  {
    title: "Finance Dashboard",
    image:
      "https://images.unsplash.com/photo-1551281044-8d8d0d8f1b56?q=80&w=1200&auto=format&fit=crop",
    live: "https://finance.vercel.app",
  },
  {
    title: "Weather App",
    image:
      "https://images.unsplash.com/photo-1509401934319-c03c7e9de2c2?q=80&w=1200&auto=format&fit=crop",
    live: "https://weather.vercel.app",
  },
  {
    title: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop",
    live: "https://landing.vercel.app",
  },
  {
    title: "Task Manager",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    live: "https://tasks.vercel.app",
  },
  {
    title: "Food Delivery UI",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
    live: "https://food-ui.vercel.app",
  },
  {
    title: "Music Player",
    image:
      "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop",
    live: "https://music-player.vercel.app",
  },
  {
    title: "Blog CMS UI",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    live: "https://blogcms.vercel.app",
  },
  {
    title: "Travel Booking",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    live: "https://travel-booking.vercel.app",
  },
  {
    title: "Crypto Tracker",
    image:
      "https://images.unsplash.com/photo-1518544801976-3e188ea77b3e?q=80&w=1200&auto=format&fit=crop",
    live: "https://crypto-tracker.vercel.app",
  },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-200">
      {children}
    </span>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="w-full bg-[#0a0a0a] text-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Projects I’ve Built
          </h2>
          <p className="mt-3 text-zinc-400">
            <span className="text-zinc-200">Featured</span> work + my{" "}
            <span className="text-zinc-200">learning journey</span>
          </p>
        </div>

        {/* FEATURED (Top 3) — Hero Row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-14">
          {/* Left: biggest featured card */}
          <FeaturedCard project={featuredProjects[0]} big />
          {/* Right: two stacked featured cards */}
          <div className="grid grid-cols-1 gap-6">
            <FeaturedCard project={featuredProjects[1]} />
            <FeaturedCard project={featuredProjects[2]} />
          </div>
        </div>

        {/* OTHER PROJECTS (9) */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-semibold">Other Projects</h3>
          <span className="text-xs text-zinc-400">
            Built while learning & iterating
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {otherProjects.map((p, i) => (
            <OtherCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------- Cards ----------------- */

function FeaturedCard({ project, big = false }) {
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-sm hover:ring-white/20 transition`}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className={`${
          big ? "h-[420px]" : "h-[200px] md:h-[200px]"
        } w-full object-cover transition duration-700 group-hover:scale-[1.05]`}
      />

      {/* Top badges */}
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-full bg-yellow-400/90 px-2.5 py-0.5 text-[11px] font-semibold text-black shadow">
          ⭐ Featured
        </span>
        {project.tags?.slice(0, 3).map((t, i) => <Badge key={i}>{t}</Badge>)}
      </div>

      {/* Overlay (hover reveal) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Text panel (slides up on hover) */}
      <div
        className={`absolute inset-x-0 bottom-0 translate-y-6 px-5 pb-5 transition-[transform,opacity] duration-300 group-hover:translate-y-0`}
      >
        <h3 className={`text-lg md:text-xl font-semibold`}>{project.title}</h3>
        <p className="mt-1 text-sm text-zinc-300">{project.desc}</p>

        {/* CTA buttons */}
        <div className="mt-3 flex gap-2">
          <span className="inline-flex items-center rounded-lg bg-white text-black px-3 py-1.5 text-xs font-semibold group-hover:translate-y-0 transition">
            Live Demo
          </span>
          <a
            href={project.github}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border border-white/20 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </a>
  );
}

function OtherCard({ project }) {
  return (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/[0.035] hover:ring-white/20 transition"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay with title on hover */}
      <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="p-4">
          <h4 className="text-sm font-medium">{project.title}</h4>
        </div>
        <div className="p-4">
          <span className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[11px]">
            View
          </span>
        </div>
      </div>
    </a>
  );
}
