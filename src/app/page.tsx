"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const CONTACT_EMAIL = "petre.chitashvili@appifysheets.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=AppifySheets%20demo%20request`;
const COMPONENTS_URL = "https://demos.devexpress.com/blazor/";

const WHATSAPP_NUMBER = "995555668688";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like to chat about AppifySheets.",
)}`;

type PortfolioEntry = {
  client: string;
  sector: string;
  sectorIcon: React.ReactNode;
  did: string;
  quote?: { text: string; name: string; role?: string };
  draft?: boolean;
};

const PORTFOLIO: PortfolioEntry[] = [
  {
    client: "KFC",
    sector: "HR & Payroll",
    sectorIcon: <IconBriefcase />,
    did: "Spreadsheet-driven HR and salary calculations replaced with a system. What used to take days now runs on demand.",
  },
  {
    client: "SRLine",
    sector: "Logistics",
    sectorIcon: <IconTruck />,
    did: "Freight operations moved out of Excel and into a single webapp. Bookings, routing, billing in one place.",
  },
  {
    client: "Geoskills",
    sector: "Education",
    sectorIcon: <IconBookOpen />,
    did: "Learning management system built from the ground up. Courses, students, instructors, assessment.",
  },
  {
    client: "GIPA",
    sector: "Operations",
    sectorIcon: <IconBoxes />,
    did: "Asset and inventory management for an academic institution.",
  },
  {
    client: "Eurocredit",
    sector: "Financial services",
    sectorIcon: <IconLandmark />,
    did: "Loan management with banking integration. Loan officers stopped switching tabs to enter the same data twice.",
  },
  {
    client: "Lilo1",
    sector: "TBD",
    sectorIcon: <IconBriefcase />,
    did: "TODO: one-line description of what we built for Lilo1.",
    draft: true,
  },
  {
    client: "Emergency Services of Georgia",
    sector: "Public sector",
    sectorIcon: <IconLandmark />,
    did: "TODO: one-line description of what we built for Emergency Services.",
    draft: true,
  },
];

export default function Home() {
  return (
    <main className="relative isolate flex-1">
      <Header />
      <Hero />
      <HowItWorks />
      <Video />
      <Services />
      <Training />
      <Components />
      <Process />
      <CaseStudy />
      <Portfolio />
      <CTA />
      <Footer />
      <FloatingChat />
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center gap-2 group">
        <Logo />
        <span className="font-medium tracking-tight text-fg">AppifySheets</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm text-fg-muted">
        <a href="#services" className="hover:text-fg transition-colors">Services</a>
        <a href="#training" className="hover:text-fg transition-colors">Training</a>
        <a href="#case-study" className="hover:text-fg transition-colors">Case study</a>
        <a href="#portfolio" className="hover:text-fg transition-colors">Portfolio</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-28 md:pt-28 md:pb-40">
      <div className="hero-glow" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/60 px-3 py-1 text-xs text-fg-muted backdrop-blur-sm">
          <IconLightbulb className="size-3.5 text-peach" />
          AI made code cheap. The bottleneck moved.
        </div>
        <h1
          className="animate-fade-up mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-fg leading-[1.05]"
          style={{ animationDelay: "0.05s" }}
        >
          Replace the legacy app.
          <br />
          <span className="text-peach">Without hiring a developer.</span>
        </h1>
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-base sm:text-lg text-fg-muted leading-relaxed"
          style={{ animationDelay: "0.12s" }}
        >
          Code got cheap. Knowing what to build is the hard part. Two people already on
          your staff solve that. Your domain experts (operations lead, accountant,
          warehouse manager) describe what the system has to do. The person who already
          knows how your software runs, usually the administrator, writes the new code
          with Claude. We supervise. That&apos;s the whole team.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="#case-study"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-bg-elevated/40 px-6 py-3 text-sm font-medium text-fg hover:border-border-strong hover:bg-bg-elevated transition-colors"
          >
            See the case study
          </a>
        </div>
        <div
          className="animate-fade-up mt-20 mx-auto max-w-3xl"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10">
            {[
              { icon: <IconBan className="size-5" />, k: "NO DEV HIRES", v: "for the entire rebuild", tone: "peach" as const },
              { icon: <IconPencil className="size-5" />, k: "YOUR ADMIN + AI", v: "writes the new code", tone: "peach" as const },
              { icon: <IconTarget className="size-5" />, k: "WE SUPERVISE", v: "own the architecture", tone: "green" as const },
            ].map((it, i) => (
              <div
                key={it.k}
                className={`group text-center px-4 sm:px-6 ${i > 0 ? "sm:border-l sm:border-border" : ""}`}
              >
                <div
                  className={`mx-auto flex size-12 items-center justify-center rounded-full ring-1 transition-all group-hover:scale-105 ${
                    it.tone === "green"
                      ? "bg-green/10 text-green ring-green/20 group-hover:bg-green/15 group-hover:ring-green/40"
                      : "bg-peach/10 text-peach ring-peach/20 group-hover:bg-peach/15 group-hover:ring-peach/40"
                  }`}
                >
                  {it.icon}
                </div>
                <div
                  className={`mt-4 text-xs font-semibold uppercase tracking-[0.18em] ${
                    it.tone === "green" ? "text-green" : "text-peach"
                  }`}
                >
                  {it.k}
                </div>
                <div className="mt-1.5 text-sm text-fg-muted leading-relaxed">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const nodes = [
    {
      icon: <IconUsers className="size-8" />,
      title: "Your domain experts",
      sub: "describe what the system has to do",
      tone: "peach" as const,
    },
    {
      icon: <IconPencil className="size-8" />,
      title: "Your software admin + Claude",
      sub: "write the new code on their behalf",
      tone: "peach" as const,
    },
    {
      icon: <IconPackage className="size-8" />,
      title: "Working software",
      sub: "owned by your team, day one",
      tone: "green" as const,
    },
  ];
  return (
    <section className="relative px-6 py-16 md:py-24 border-y border-border bg-bg-elevated/30">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-peach">
            <IconLoop />
            The model
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-fg">
            How the work actually flows
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2">
          {nodes.map((n, i) => (
            <div key={n.title} className="contents">
              <div
                className={`flex-1 rounded-2xl border border-border bg-bg p-5 text-center ${
                  n.tone === "green" ? "node-breathe-green" : "node-breathe"
                }`}
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <div className={`flex justify-center ${n.tone === "green" ? "text-green" : "text-peach"}`}>{n.icon}</div>
                <div className="mt-3 font-medium text-fg">{n.title}</div>
                <div className="mt-1 text-xs text-fg-muted">{n.sub}</div>
              </div>
              {i < nodes.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>

        <div className="mt-10 relative">
          <div className="absolute inset-x-8 md:inset-x-16 top-1/2 h-px bg-peach/25" aria-hidden />
          <div className="relative flex justify-center">
            <div className="supervise-pulse inline-flex items-center gap-2 rounded-full border border-green/50 bg-bg px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-green">
              <IconEye />
              AppifySheets supervises end-to-end
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowArrow() {
  return (
    <>
      <div className="hidden md:flex relative items-center w-16 h-6 shrink-0" aria-hidden>
        <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 border-t border-dashed border-peach/40" />
        <svg className="absolute right-0 top-1/2 -translate-y-1/2 text-peach" width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="m3 1 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="flow-x absolute top-1/2 left-1 size-1.5 -mt-[3px] rounded-full bg-peach" />
        <span className="flow-x absolute top-1/2 left-1 size-1.5 -mt-[3px] rounded-full bg-peach" style={{ animationDelay: "0.7s" }} />
        <span className="flow-x absolute top-1/2 left-1 size-1.5 -mt-[3px] rounded-full bg-peach" style={{ animationDelay: "1.4s" }} />
      </div>
      <div className="md:hidden relative flex items-center justify-center h-9 w-full" aria-hidden>
        <div className="absolute inset-y-1 left-1/2 -translate-x-1/2 border-l border-dashed border-peach/40" />
        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 text-peach" width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="m1 3 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="flow-y absolute left-1/2 top-1 size-1.5 -ml-[3px] rounded-full bg-peach" />
        <span className="flow-y absolute left-1/2 top-1 size-1.5 -ml-[3px] rounded-full bg-peach" style={{ animationDelay: "0.7s" }} />
      </div>
    </>
  );
}

function Video() {
  return (
    <section id="video" className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl shadow-black/40">
          <iframe
            src="https://www.youtube.com/embed/HBF7UNdpexg"
            title="AppifySheets"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={<><IconWrench /> Services</>}
          title="What we actually do"
          subtitle="Two ways in. The pattern is the same either way: your domain experts describe what they need, your software administrator (or PM, or BA) writes the new code with Claude, we supervise."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-5">
          <ServiceCard
            className="lg:col-span-3"
            icon={<IconMigrate />}
            title="Replace your legacy line-of-business app"
            highlight
            body="The system your business actually runs on. Built when people who&apos;ve since left were here. Held together by tribal knowledge and a single consultant who answers the phone twice a year. We rebuild it without hiring programmers. Your domain experts describe the workflows they actually use. The person who already knows how the software runs, your administrator, writes the new code with Claude. We own the architecture and catch the traps."
            bullets={[
              "No developer hires for the entire rebuild",
              "Domain experts describe what they need; your admin writes the code with Claude",
              "We&apos;re accountable for architecture and integrity",
              "When we leave, the team running it is the team that built it",
            ]}
          />
          <ServiceCard
            className="lg:col-span-2"
            icon={<IconSheet />}
            title="Replace business-critical spreadsheets"
            body="The workflow running on five linked spreadsheets and one person who &lsquo;just knows how it works.&rsquo; We rebuild it as a real application, without hiring a developer. The expert describes what the spreadsheets are doing. A power user on your team (your spreadsheet admin, or whoever everyone else asks) writes the new code with Claude. The workflow stops breaking when someone deletes a row, and the knowledge stops walking out the door with employees."
            bullets={[
              "Built around the process you already have",
              "Audit log and permissions from day one",
              "Your spreadsheet admin writes the code; the expert describes the workflow",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function Training() {
  const skills = [
    {
      icon: <IconMessageCircle />,
      t: "Prompting",
      d: "How to ask Claude for what your business actually needs, in language that gets the right code back.",
    },
    {
      icon: <IconEye />,
      t: "Reading the output",
      d: "Knowing what good code looks like without writing it yourself. Spotting when the AI made something up.",
    },
    {
      icon: <IconLoop />,
      t: "Iterating safely",
      d: "When to push back, when to accept, and when to call us instead.",
    },
  ];
  return (
    <section id="training" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={<><IconGraduationCap /> Training</>}
          title="Your admin learns while building"
          subtitle="The person driving Claude (your administrator, or whoever currently keeps the existing software running) needs to know how. We train them on the AI workflow as part of the engagement. They learn on the actual project, not in a classroom. Reading the new stack in a course never works. Reading their own code does."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.t}
              className="card-glow group rounded-2xl border border-border bg-bg-elevated/60 p-6 transition-all"
            >
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-peach">
                {s.icon}
                {s.t}
              </div>
              <p className="mt-3 text-sm text-fg-muted leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Components() {
  const items = [
    { icon: <IconGrid />, name: "Tables that scale", d: "Sort, filter, group, export. The grids your team needs but Excel can&apos;t deliver at company size." },
    { icon: <IconCalendar />, name: "Scheduling and resources", d: "Drag-and-drop calendars, time blocks, resource planning." },
    { icon: <IconDashboard />, name: "Operational dashboards", d: "Live KPIs your team rearranges without calling IT." },
    { icon: <IconReport />, name: "Audit-grade reports", d: "Pixel-perfect, exportable, the kind your auditors expect." },
    { icon: <IconChart />, name: "Charts and trends", d: "Trends, comparisons, breakdowns, all wired to live data." },
    { icon: <IconForm />, name: "Data entry forms", d: "Generated from your data model. Quick to ship, easy to change." },
  ];

  return (
    <section id="components" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={<><IconPuzzle /> What you get</>}
          title="Not built from scratch"
          subtitle="The apps don&apos;t reinvent the UI. They use the same off-the-shelf component library behind a lot of the enterprise software you already use. Your business team assembles these, working with Claude and other AI tools to do the wiring. Nobody draws screens from scratch, and nobody hires developers."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div
              key={c.name}
              className="card-glow group flex items-start gap-4 rounded-2xl border border-border bg-bg p-5 transition-all"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-peach/10 text-peach">
                {c.icon}
              </div>
              <div>
                <div className="font-medium text-fg">{c.name}</div>
                <p className="mt-1 text-sm text-fg-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: c.d }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-bg p-6">
          <div>
            <div className="font-medium text-fg">See them live</div>
            <p className="text-sm text-fg-muted">
              Every component above has an interactive demo. Click around before you talk to us.
            </p>
          </div>
          <a
            href={COMPONENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-peach px-5 py-2.5 text-sm font-medium text-bg hover:bg-peach-soft transition-colors"
          >
            Open the demos
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps: { n: string; t: string; d: string; tone?: "green" }[] = [
    {
      n: "01",
      t: "Start with what you actually have",
      d: "The database is the source of truth. We document what&apos;s in there, including the parts that have been silently broken for years, before anyone writes a line of new code.",
    },
    {
      n: "02",
      t: "Capture the institutional knowledge",
      d: "Your team knows what the app actually does. Including the parts nobody ever wrote down. Before the rebuild starts, we sit with them and get it on paper.",
    },
    {
      n: "03",
      t: "Your admin writes. Experts inform. We supervise.",
      d: "You don&apos;t hire programmers. The people who actually use the system, your operations leads, your accountants, your warehouse manager, describe what they need. The person who already knows how the existing software runs (your administrator, or whoever everyone calls when the system acts up) writes the new code with Claude. We make the architectural calls and catch the traps. By the end, the people who run your business also run the software.",
    },
    {
      n: "04",
      t: "Ship safely. Stay sovereign.",
      d: "We set up the same release discipline the big software companies use, scaled to your size. The day we leave, your team is the team that runs it. No support contract. No dependency. Nobody calling you about a renewal.",
      tone: "green" as const,
    },
  ];

  return (
    <section id="process" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={<><IconSettings /> How we work</>}
          title="Oversight, not outsourcing"
          subtitle="We&apos;re not the team that disappears with the source code."
        />
        <ol className="mt-16 grid gap-5 md:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="card-glow group relative rounded-2xl border border-border bg-bg-elevated/60 p-7 transition-all"
            >
              <div className={`font-mono text-xs tracking-widest ${s.tone === "green" ? "text-green" : "text-peach"}`}>{s.n}</div>
              <h3 className="mt-3 text-xl font-medium text-fg">{s.t}</h3>
              <p className="mt-3 text-sm text-fg-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: s.d }} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section id="case-study" className="relative px-6 py-24 md:py-32 bg-bg-elevated/40">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={<><IconStar /> Featured case study</>}
          title="GEPHA"
          subtitle="A pharmaceutical company that wanted to own its software instead of renting it."
        />
        <div className="mt-12 rounded-3xl border border-border bg-bg p-8 md:p-14">
          <div className="flex flex-col md:flex-row gap-8 md:gap-14">
            <div className="md:w-1/3">
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-green">Outcome</div>
              <p className="mt-3 text-2xl md:text-3xl font-medium text-fg leading-tight">
                Their team <span className="text-green">builds without us now.</span>
              </p>
            </div>
            <div className="md:w-2/3 space-y-6 text-fg-muted leading-relaxed">
              <p>
                GEPHA had decades of business knowledge buried in spreadsheets and an
                aging desktop application. We started with the data: documenting and
                cleaning up what was already there. Then we worked alongside their staff
                to bring the business logic into the new system, one module at a time.
              </p>
              <p>
                By the end, GEPHA&apos;s own employees were extending the system without
                calling us. New screens, new workflows, new reports, none of it routed
                through us. That was the whole point.
              </p>
              <div className="pt-4 border-t border-border">
                <a
                  href={MAILTO}
                  className="inline-flex items-center gap-2 text-sm font-medium text-peach hover:text-peach-soft transition-colors"
                >
                  Talk to someone on the GEPHA team
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollByCard = (dir: -1 | 1) => {
    if (!scrollRef.current) return;
    const step = 336;
    scrollRef.current.scrollBy({ left: step * dir, behavior: "smooth" });
  };
  return (
    <section id="portfolio" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={<><IconBriefcase /> Portfolio</>}
          title="Recent work"
          subtitle="Different industries, same model. Their team builds, we supervise, AI helps."
        />
        <div className="mt-16 relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 size-11 items-center justify-center rounded-full bg-bg-elevated border border-border text-fg shadow-lg shadow-black/40 hover:bg-bg hover:border-peach-dim transition-colors"
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 size-11 items-center justify-center rounded-full bg-bg-elevated border border-border text-fg shadow-lg shadow-black/40 hover:bg-bg hover:border-peach-dim transition-colors"
          >
            <IconChevronRight />
          </button>
          <div
            ref={scrollRef}
            className="no-scrollbar overflow-x-auto snap-x snap-mandatory scroll-smooth"
          >
            <div className="flex gap-4 pb-2">
          {PORTFOLIO.filter((p) => !p.draft).map((p) => (
            <article
              key={p.client}
              className="card-glow group flex flex-col rounded-2xl border border-border bg-bg-elevated/60 p-6 transition-all w-80 shrink-0 snap-start"
            >
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-peach">
                {p.sectorIcon}
                {p.sector}
              </div>
              <h3 className="mt-2 text-xl font-medium text-fg">{p.client}</h3>
              <p className="mt-3 text-sm text-fg-muted leading-relaxed">{p.did}</p>
              {p.quote && (
                <figure className="mt-5 pt-5 border-t border-border">
                  <blockquote className="text-sm text-fg leading-relaxed">
                    &ldquo;{p.quote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-xs text-fg-subtle">
                    {p.quote.name}
                    {p.quote.role ? ` · ${p.quote.role}` : ""}
                  </figcaption>
                </figure>
              )}
            </article>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center relative overflow-hidden rounded-3xl border border-border bg-bg-elevated p-10 md:p-16">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, rgb(255 122 61 / 0.22) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-fg leading-tight">
          Got a spreadsheet that runs your business?
          <br className="hidden sm:block" />
          <span className="text-peach">Let&apos;s give it a proper home.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-fg-muted">
          30 minutes. We look at what you have today and tell you whether our model
          fits. If it doesn&apos;t, we&apos;ll say so.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white hover:bg-[#1da856] transition-colors"
          >
            <IconWhatsApp />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-10">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-fg-subtle">
        <div className="flex items-center gap-2">
          <Logo />
          <span>AppifySheets</span>
        </div>
        <div className="inline-flex items-center gap-1.5 text-xs text-fg-subtle">
          <IconGlobe />
          We work in <span className="text-fg-muted">English</span> ·{" "}
          <span className="text-fg-muted">ქართული</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={MAILTO} className="hover:text-fg transition-colors">
            {CONTACT_EMAIL}
          </a>
          <span className="font-mono text-xs">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingChat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-block transition-transform hover:scale-105"
      style={{ filter: "drop-shadow(0 12px 24px rgb(37 211 102 / 0.35))" }}
    >
      <Image src="/whatsapp.svg" alt="Chat on WhatsApp" width={68} height={68} priority unoptimized />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-peach">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight text-fg leading-tight">
        {title}
      </h2>
      <p className="mt-4 text-fg-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: subtitle }} />
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  body,
  bullets,
  highlight = false,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`card-glow group relative flex flex-col rounded-2xl border p-7 transition-all ${
        highlight
          ? "border-peach-dim bg-gradient-to-b from-bg-elevated to-bg"
          : "border-border bg-bg-elevated/60"
      } ${className}`}
    >
      {highlight && (
        <div className="absolute -top-3 left-7 rounded-full bg-peach px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-bg">
          Flagship
        </div>
      )}
      <div className="flex size-10 items-center justify-center rounded-xl bg-peach/10 text-peach">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-medium text-fg" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="mt-2 text-sm text-fg-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
      <ul className="mt-6 space-y-2 text-sm text-fg-muted">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1.5 size-1 rounded-full bg-peach shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: b }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="AppifySheets"
      width={32}
      height={32}
      className="size-8"
      priority
    />
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSheet() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 9h17M3.5 14.5h17M9 3.5v17M15 3.5v17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconMigrate() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h10m0 0l-3-3m3 3l-3 3M20 17H10m0 0l3 3m-3-3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 8h17M3.5 12.5h17M3.5 17h17M9 3.5v17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="3.5" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3.5" y="15.5" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13.5" y="11.5" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconReport() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 3.5h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3.5v4.5h5M8.5 13h7M8.5 16.5h7M8.5 9.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V8m6 12V4m6 16v-8m6 8V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.5 20.5h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconForm() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 8.5h6M7 12.5h10M7 16.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413z" />
    </svg>
  );
}

type IconProps = { className?: string };
function Icon({ className = "size-3.5", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

function IconLightbulb(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8a6 6 0 0 0-12 0c0 1 .23 2.23 1.5 3.5a4.6 4.6 0 0 1 1.41 2.5" />
    </Icon>
  );
}

function IconBan(p: IconProps) {
  return (
    <Icon {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="m4.9 4.9 14.2 14.2" />
    </Icon>
  );
}

function IconPencil(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </Icon>
  );
}

function IconTarget(p: IconProps) {
  return (
    <Icon {...p}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </Icon>
  );
}

function IconLoop(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </Icon>
  );
}

function IconUsers(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  );
}

function IconPackage(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </Icon>
  );
}

function IconEye(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );
}

function IconWrench(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.121 2.121 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </Icon>
  );
}

function IconGraduationCap(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M22 10v6" />
      <path d="M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </Icon>
  );
}

function IconMessageCircle(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    </Icon>
  );
}

function IconPuzzle(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.236 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.918-.937a2.48 2.48 0 0 0-2.4-1.888c-1.376 0-2.5 1.125-2.5 2.5 0 .43.117.844.288 1.215.146.336.245.74.131 1.16-.114.421-.385.752-.74.961A2.5 2.5 0 0 1 10 21.49a2.5 2.5 0 0 1-1.32-.392c-.355-.209-.626-.54-.74-.961-.114-.42-.015-.824.131-1.16.171-.37.288-.785.288-1.215 0-1.375-1.125-2.5-2.5-2.5a2.48 2.48 0 0 0-2.4 1.888c-.116.457-.448.867-.918.937a.98.98 0 0 1-.837-.276L.093 16.2A2.41 2.41 0 0 1 0 14.496c0-.617.236-1.233.706-1.704l1.568-1.568c.23-.23.338-.556.289-.878a3 3 0 1 1 5.92-.85c.078.342.388.6.738.6h2.5c.35 0 .66-.258.738-.6a3 3 0 1 1 5.98.85Z" />
    </Icon>
  );
}

function IconSettings(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );
}

function IconStar(p: IconProps) {
  return (
    <Icon {...p}>
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </Icon>
  );
}

function IconBriefcase(p: IconProps) {
  return (
    <Icon {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Icon>
  );
}

function IconTruck(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </Icon>
  );
}

function IconBookOpen(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </Icon>
  );
}

function IconBoxes(p: IconProps) {
  return (
    <Icon {...p}>
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
      <path d="m7 16.5-4.74-2.85" />
      <path d="m7 16.5 5-3" />
      <path d="M7 16.5v5.17" />
      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
      <path d="m17 16.5-5-3" />
      <path d="m17 16.5 4.74-2.85" />
      <path d="M17 16.5v5.17" />
      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0Z" />
      <path d="M12 8 7.26 5.15" />
      <path d="m12 8 4.74-2.85" />
      <path d="M12 13.5V8" />
    </Icon>
  );
}

function IconLandmark(p: IconProps) {
  return (
    <Icon {...p}>
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12,2 20,7 4,7" />
    </Icon>
  );
}

function IconGlobe(p: IconProps) {
  return (
    <Icon {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </Icon>
  );
}

function IconChevronLeft(p: IconProps) {
  return (
    <Icon className={p.className ?? "size-5"}>
      <path d="m15 18-6-6 6-6" />
    </Icon>
  );
}

function IconChevronRight(p: IconProps) {
  return (
    <Icon className={p.className ?? "size-5"}>
      <path d="m9 18 6-6-6-6" />
    </Icon>
  );
}
