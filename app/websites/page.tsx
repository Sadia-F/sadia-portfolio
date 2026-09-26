import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import DarkModeToggle from "../components/DarkModeToggle";
import { personalInfo, projects } from "../data";

export const metadata: Metadata = {
  title: "Websites for Local Businesses | Sadia Ferdous",
  description:
    "See website and web application work by Sadia Ferdous, including Campus Slate, NYIT Badminton Team Manager, and Mishti.",
};

const featuredProjectNames = [
  "forDalia",
  "Gedeon Construction Corp",
  "Campus Slate CMS",
  "NYIT Badminton Team Manager",
  "mishti-website",
];

const projectAccents = {
  "forDalia": {
    label: "Event and gifting website",
    gradient: "from-[#75423f] via-[#b86e68] to-[#727c64]",
  },
  "Gedeon Construction Corp": {
    label: "Construction website",
    gradient: "from-[#1f382e] via-[#526653] to-[#c9a66b]",
  },
  "Campus Slate CMS": {
    label: "Publishing platform",
    gradient: "from-[#182840] via-[#315b87] to-[#d6a64b]",
  },
  "NYIT Badminton Team Manager": {
    label: "Community platform",
    gradient: "from-[#174e3b] via-[#2c8d67] to-[#e5b94f]",
  },
  "mishti-website": {
    label: "Small-business website",
    gradient: "from-[#7e352c] via-[#c9704f] to-[#f3c66c]",
  },
} as const;

const businessStories = {
  "forDalia": {
    problem: "An event and gifting brand needed an online presence that felt as thoughtful and personal as the gatherings it creates.",
    result: "I created a warm, editorial website that introduces the brand's offerings, shares its story, and makes it easy for prospective clients to start a conversation.",
    link: "https://sadia-f.github.io/fordalia__/",
    linkLabel: "Visit forDalia",
  },
  "Gedeon Construction Corp": {
    problem: "A local renovation company needed a polished online home that builds trust and makes it simple for homeowners to request an estimate.",
    result: "I created a clear, welcoming website that introduces services, showcases renovation inspiration, and gives prospective customers direct ways to call or email.",
    link: "https://sadia-f.github.io/gedeon-constuction-corp/",
    linkLabel: "Visit Gedeon Construction",
  },
  "Campus Slate CMS": {
    problem: "The Campus Slate needed an online home that was easier to manage and no longer depended on an expensive website service.",
    result: "I gave the student publication a place where its team can share stories and updates independently, save money each year, and get campus news in front of readers faster.",
    link: "https://the-campus-slate.vercel.app",
    linkLabel: "Visit Campus Slate",
  },
  "NYIT Badminton Team Manager": {
    problem: "A growing badminton team needed a simpler way to stay organized between practices, events, and tournaments.",
    result: "I brought the team's day-to-day coordination into one easy place, making it simpler for members to keep up with attendance, events, and friendly competition.",
    link: "https://github.com/Sadia-F/Badminton-webapp",
    linkLabel: "See the project",
  },
  "mishti-website": {
    problem: "Mishti needed a warm, welcoming online presence that could introduce its story and make a strong first impression.",
    result: "I created a dedicated website that gives the brand a clear, memorable home online for people to explore.",
    link: "https://mishti-and-mimi-website.vercel.app",
    linkLabel: "Visit Mishti",
  },
} as const;

export default function WebsitesPage() {
  const featuredProjects = featuredProjectNames.map((name) => {
    const project = projects.find((item) => item.title === name);
    if (!project) throw new Error(`Missing featured project: ${name}`);
    return project;
  });

  return (
    <main className="min-h-screen bg-cream text-dark-brown dark:bg-deep-slate dark:text-cream">
      <header className="sticky top-0 z-20 border-b border-warm-brown/10 bg-cream/90 backdrop-blur-md dark:border-white/10 dark:bg-deep-slate/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-xl font-bold text-warm-brown dark:text-terracotta">
            SF<span className="text-sunset">.</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-warm-brown dark:text-gray-300 dark:hover:text-terracotta">
              Personal portfolio
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-sunset/15 blur-3xl" />
        <div className="absolute -right-20 top-24 h-80 w-80 rounded-full bg-warm-brown/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-terracotta">Websites that feel like your business</p>
          <h1 className="text-4xl font-black leading-tight sm:text-6xl">
            A polished online home for the work you care about.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I design and build thoughtful, mobile-friendly websites and tools for local businesses, teams, and organizations.
          </p>
          <a
            href={`mailto:${personalInfo.email}?subject=Website%20project%20inquiry`}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-warm-brown px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#6b4f10] dark:bg-terracotta dark:hover:bg-[#a06030]"
          >
            Let&apos;s talk about your website <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-terracotta">Selected work</p>
            <h2 className="mt-2 text-3xl font-bold">Built around real needs</h2>
          </div>
          <p className="max-w-md text-gray-600 dark:text-gray-300">Each project started with a real group of people and a problem worth making simpler.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const accent = projectAccents[project.title as keyof typeof projectAccents];
            const story = businessStories[project.title as keyof typeof businessStories];
            return (
              <article key={project.title} className="group overflow-hidden rounded-3xl border border-warm-brown/10 bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-[#222238]">
                {project.image ? (
                  <div className="relative aspect-[16/9] overflow-hidden bg-cream">
                    <Image
                      src={project.image}
                      alt={`${project.title} homepage preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className={`relative min-h-48 overflow-hidden bg-gradient-to-br p-7 text-white ${accent.gradient}`}>
                    <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/25" />
                    <div className="absolute -bottom-16 left-8 h-36 w-36 rounded-full bg-white/10" />
                    <div className="relative">
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">{accent.label}</span>
                    </div>
                  </div>
                )}
                <div className="p-7">
                  <h3 className="text-xl font-bold">{project.title === "mishti-website" ? "Mishti Website" : project.title}</h3>
                  <p className="mt-3 text-sm font-bold uppercase tracking-wide text-terracotta">The need</p>
                  <p className="mt-1 leading-relaxed text-gray-600 dark:text-gray-300">{story.problem}</p>
                  <p className="mt-5 text-sm font-bold uppercase tracking-wide text-terracotta">How it helped</p>
                  <p className="mt-1 leading-relaxed text-gray-600 dark:text-gray-300">{story.result}</p>
                  <div className="mt-7">
                    <a href={story.link} target="_blank" rel="noreferrer" className="font-semibold text-warm-brown hover:text-sunset dark:text-terracotta">
                      {story.linkLabel} ↗
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-warm-brown/10 bg-white px-5 py-16 dark:border-white/10 dark:bg-[#222238]">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.35fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-terracotta">What I can help with</p>
            <h2 className="mt-3 text-3xl font-bold">Clear, useful, memorable.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["A website that looks great on phones", "Menus, services, galleries, and contact forms", "Booking, ordering, maps, and social links", "Custom tools when your workflow needs one"].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-cream p-4 dark:bg-deep-slate">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center">
        <h2 className="text-3xl font-bold">Have a website idea?</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-300">Tell me a little about your business and what you want customers to be able to do online.</p>
        <a href={`mailto:${personalInfo.email}?subject=Website%20project%20inquiry`} className="mt-7 inline-block rounded-full border-2 border-warm-brown px-6 py-3 font-semibold text-warm-brown transition-colors hover:bg-warm-brown hover:text-white dark:border-terracotta dark:text-terracotta dark:hover:bg-terracotta dark:hover:text-white">
          Email Sadia
        </a>
      </section>
    </main>
  );
}
