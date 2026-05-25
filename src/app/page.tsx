import Link from "next/link";

const CONTACT_EMAIL = "hello@appifysheets.com";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=AppifySheets%20demo%20request`;
const COMPONENTS_URL = "https://demos.devexpress.com/blazor/";

const WHATSAPP_NUMBER = "995555668688";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I'd like to chat about AppifySheets.",
)}`;

type PortfolioEntry = {
  client: string;
  sector: string;
  did: string;
  quote?: { text: string; name: string; role?: string };
  draft?: boolean;
};

const PORTFOLIO: PortfolioEntry[] = [
  {
    client: "KFC",
    sector: "💼 HR & Payroll",
    did: "Spreadsheet-driven HR and salary calculations replaced with a system. What used to take days now runs on demand.",
  },
  {
    client: "SRLine",
    sector: "🚚 Logistics",
    did: "Freight operations moved out of Excel and into a single webapp. Bookings, routing, billing in one place.",
  },
  {
    client: "Geoskills",
    sector: "📚 Education",
    did: "Learning management system built from the ground up. Courses, students, instructors, assessment.",
  },
  {
    client: "GIPA",
    sector: "🏛️ Operations",
    did: "Asset and inventory management for an academic institution.",
  },
  {
    client: "Eurocredit",
    sector: "🏦 Financial services",
    did: "Loan management with banking integration. Loan officers stopped switching tabs to enter the same data twice.",
  },
  {
    client: "Lilo1",
    sector: "TBD",
    did: "TODO: one-line description of what we built for Lilo1.",
    draft: true,
  },
  {
    client: "Emergency Services of Georgia",
    sector: "Public sector",
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
      <a
        href={MAILTO}
        className="inline-flex items-center gap-2 rounded-full bg-peach px-4 py-2 text-sm font-medium text-bg hover:bg-peach-soft transition-colors"
      >
        Book a demo
        <Arrow />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-28 md:pt-28 md:pb-40">
      <div className="hero-glow" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/60 px-3 py-1 text-xs text-fg-muted backdrop-blur-sm">
          <span>💡</span>
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
          Code got cheap. The hard part is knowing what the code should do, and the only
          people who really know are already in your company. Your operations lead. Your
          accountant. Your warehouse manager. They write the code themselves, with Claude
          and other AI tools as their pair programmer. We supervise. That&apos;s the whole
          team.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href={MAILTO}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-peach px-6 py-3 text-sm font-medium text-bg hover:bg-peach-soft transition-colors"
          >
            Book a demo
            <Arrow />
          </a>
          <a
            href="#case-study"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-bg-elevated/40 px-6 py-3 text-sm font-medium text-fg hover:border-border-strong hover:bg-bg-elevated transition-colors"
          >
            See the case study
          </a>
        </div>
        <div
          className="animate-fade-up mt-16 grid grid-cols-3 gap-6 sm:gap-12 mx-auto max-w-2xl text-left sm:text-center"
          style={{ animationDelay: "0.3s" }}
        >
          {[
            { emoji: "🚫", k: "NO DEV HIRES", v: "for the entire rebuild" },
            { emoji: "👥", k: "BUSINESS PEOPLE", v: "build with Claude + AI" },
            { emoji: "🎯", k: "WE SUPERVISE", v: "own the architecture" },
          ].map((it) => (
            <div key={it.k}>
              <div className="font-mono text-xs uppercase tracking-wider text-peach">
                <span className="mr-1">{it.emoji}</span>
                {it.k}
              </div>
              <div className="mt-1 text-sm text-fg-muted">{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const nodes = [
    {
      emoji: "🧠",
      title: "Your domain expert",
      sub: "knows what the business actually needs",
    },
    {
      emoji: "🤖",
      title: "Claude + AI",
      sub: "writes the code, prompted by your team",
    },
    {
      emoji: "📦",
      title: "Working software",
      sub: "owned by your team, day one",
    },
  ];
  return (
    <section className="relative px-6 py-16 md:py-24 border-y border-border bg-bg-elevated/30">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-peach">
            🔄 The model
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-medium text-fg">
            How the work actually flows
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2">
          {nodes.map((n, i) => (
            <div key={n.title} className="contents">
              <div className="flex-1 rounded-2xl border border-border bg-bg p-5 text-center">
                <div className="text-3xl">{n.emoji}</div>
                <div className="mt-2 font-medium text-fg">{n.title}</div>
                <div className="mt-1 text-xs text-fg-muted">{n.sub}</div>
              </div>
              {i < nodes.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>

        <div className="mt-10 relative">
          <div className="absolute inset-x-8 md:inset-x-16 top-1/2 h-px bg-peach/25" aria-hidden />
          <div className="relative flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-peach/40 bg-bg px-4 py-2 text-xs font-mono uppercase tracking-wider text-peach">
              <span>👀</span>
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
    <div className="flex items-center justify-center text-peach shrink-0 md:px-1" aria-hidden>
      <svg className="hidden md:block" width="28" height="20" viewBox="0 0 28 20" fill="none">
        <path d="M2 10h22m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="md:hidden" width="20" height="28" viewBox="0 0 20 28" fill="none">
        <path d="M10 2v22m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="🛠️ Services"
          title="What we actually do"
          subtitle="Two ways in. The pattern is the same either way: your business people drive it, AI writes the code, we supervise."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-5">
          <ServiceCard
            className="lg:col-span-3"
            icon={<IconMigrate />}
            title="Replace your legacy line-of-business app"
            highlight
            body="The system your business actually runs on. Built when people who&apos;ve since left were here. Held together by tribal knowledge and a single consultant who answers the phone twice a year. We rebuild it without hiring programmers. Your operations team writes the code themselves, using Claude and other AI tools. We own the architecture and catch the traps."
            bullets={[
              "No developer hires. Your business team writes the code with Claude.",
              "They know the business. AI does the typing. We make the calls.",
              "We&apos;re accountable for architecture and integrity",
              "When we leave, the team running it is the team that built it",
            ]}
          />
          <ServiceCard
            className="lg:col-span-2"
            icon={<IconSheet />}
            title="Replace business-critical spreadsheets"
            body="The workflow running on five linked spreadsheets and one person who &lsquo;just knows how it works.&rsquo; We rebuild it as a real application, without hiring a developer. That same person writes the code themselves, with Claude and other AI tools. The workflow stops breaking when someone deletes a row, and the knowledge stops walking out the door with employees."
            bullets={[
              "Built around the process you already have",
              "Audit log and permissions from day one",
              "The person who knows the workflow writes the code for it",
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
      emoji: "💬",
      t: "Prompting",
      d: "How to ask Claude for what your business actually needs, in language that gets the right code back.",
    },
    {
      emoji: "👁️",
      t: "Reading the output",
      d: "Knowing what good code looks like without writing it yourself. Spotting when the AI made something up.",
    },
    {
      emoji: "🔁",
      t: "Iterating safely",
      d: "When to push back, when to accept, and when to call us instead.",
    },
  ];
  return (
    <section id="training" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="🎓 Training"
          title="Your team learns while building"
          subtitle="Your business people can&apos;t write code with Claude if they don&apos;t know how to work with Claude. We train them on the AI workflow as part of the engagement. They learn on the actual project, not in a classroom. Reading the new stack in a course never works. Reading their own code does."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.t}
              className="card-glow group rounded-2xl border border-border bg-bg-elevated/60 p-6 transition-all"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-peach">
                <span className="mr-1.5">{s.emoji}</span>
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
          eyebrow="🧩 What you get"
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
  const steps = [
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
      t: "Business people write the code, with AI as their pair programmer",
      d: "You don&apos;t hire programmers. The people who actually use the system, your operations leads, your accountants, your warehouse manager, write the code themselves, with Claude and other AI tools doing the typing. We make the architectural calls and catch the traps. By the end, the people who run your business also run the software.",
    },
    {
      n: "04",
      t: "Ship safely. Stay sovereign.",
      d: "We set up the same release discipline the big software companies use, scaled to your size. The day we leave, your team is the team that runs it. No support contract. No dependency. Nobody calling you about a renewal.",
    },
  ];

  return (
    <section id="process" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="⚙️ How we work"
          title="Oversight, not outsourcing"
          subtitle="We&apos;re not the team that disappears with the source code."
        />
        <ol className="mt-16 grid gap-5 md:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="card-glow group relative rounded-2xl border border-border bg-bg-elevated/60 p-7 transition-all"
            >
              <div className="font-mono text-xs tracking-widest text-peach">{s.n}</div>
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
          eyebrow="⭐ Featured case study"
          title="GEPHA"
          subtitle="A pharmaceutical company that wanted to own its software instead of renting it."
        />
        <div className="mt-12 rounded-3xl border border-border bg-bg p-8 md:p-14">
          <div className="flex flex-col md:flex-row gap-8 md:gap-14">
            <div className="md:w-1/3">
              <div className="font-mono text-xs uppercase tracking-wider text-peach">Outcome</div>
              <p className="mt-3 text-2xl md:text-3xl font-medium text-fg leading-tight">
                Their team <span className="text-peach">builds without us now.</span>
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
  return (
    <section id="portfolio" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="💼 Portfolio"
          title="Recent work"
          subtitle="Different industries, same model. Their team builds, we supervise, AI helps."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.filter((p) => !p.draft).map((p) => (
            <article
              key={p.client}
              className="card-glow group flex flex-col rounded-2xl border border-border bg-bg-elevated/60 p-6 transition-all"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-peach">
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
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={MAILTO}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-peach px-6 py-3 text-sm font-medium text-bg hover:bg-peach-soft transition-colors"
          >
            Book a demo
            <Arrow />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-bg-elevated/40 px-6 py-3 text-sm font-medium text-fg hover:border-border-strong hover:bg-bg-elevated transition-colors"
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
        <div className="text-xs text-fg-subtle">
          🌍 We work in <span className="text-fg-muted">English</span> ·{" "}
          <span className="text-fg-muted">ქართული</span> ·{" "}
          <span className="text-fg-muted">Русский</span>
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
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-peach px-4 py-3 text-sm font-medium text-bg shadow-lg shadow-black/40 hover:bg-peach-soft transition-all hover:scale-105"
    >
      <IconWhatsApp />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-xs uppercase tracking-widest text-peach">{eyebrow}</div>
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
        <div className="absolute -top-3 left-7 rounded-full bg-peach px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-bg">
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
    <span className="relative inline-flex size-8" aria-label="AppifySheets">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
        <g transform="translate(45 30) rotate(-25)">
          <path d="M -32 0 Q 0 -14 32 0 Q 0 14 -32 0 Z" fill="#D77A1F" />
          <path d="M -36 0 L 28 0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <g transform="translate(55 65) rotate(60)">
          <path d="M -32 0 Q 0 -14 32 0 Q 0 14 -32 0 Z" fill="#1F8B47" />
          <path d="M -36 0 L 28 0" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </span>
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
