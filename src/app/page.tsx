import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Certificate,
  Envelope,
  FileArrowDown,
  GitBranch,
  GithubLogo,
  GraduationCap,
  LinkedinLogo,
  Trophy,
} from "@phosphor-icons/react/dist/ssr";
import { SiteHeader } from "@/components/SiteHeader";
import { Reveal } from "@/components/Reveal";
import { CaseVisual } from "@/components/CaseVisual";
import { about, cases, education, experience, profile, repos, skills, stats } from "@/content/profile";

function Num({ value, suffix }: { value: string; suffix?: string }) {
  return (
    <b>
      {value}
      {suffix && <em>{suffix}</em>}
    </b>
  );
}

function SectionHead({ index, label, title, children }: { index: string; label: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="section-head" data-reveal>
      <div>
        <p className="kicker">
          {index} · {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}

const year = new Date().getFullYear();

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Reveal />
      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="hero" id="top">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="kicker">{profile.role}</p>
                <h1>
                  {profile.firstName}
                  <br />
                  {profile.lastName}
                </h1>
                <p className="hero-lede">{profile.lede}</p>
                <ul className="chip-row" aria-label="Core stack">
                  {profile.focus.map((f) => (
                    <li key={f} className="tag">
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="cta-row">
                  <a className="btn btn-primary btn-lg" href="#work">
                    See the work
                    <ArrowDown size={16} />
                  </a>
                  <a className="btn btn-secondary btn-lg" href={profile.github} target="_blank" rel="noopener">
                    <GithubLogo size={17} />
                    GitHub
                  </a>
                  <a className="btn btn-secondary btn-lg" href={profile.linkedin} target="_blank" rel="noopener">
                    <LinkedinLogo size={17} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <figure className="code-panel" aria-label="Kotlin code sample">
                <div className="code-bar">
                  <span className="code-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="code-file">TransferViewModel.kt</span>
                  <span className="code-lang">Kotlin</span>
                </div>
                <pre>
                  <code>
                    <span className="k">class</span> <span className="t">TransferViewModel</span>(
                    {"\n    "}
                    <span className="k">private val</span> sendTransfer: <span className="t">SendTransferUseCase</span>,
                    {"\n"}) : <span className="t">MviViewModel</span>&lt;<span className="t">TransferIntent</span>, <span className="t">TransferState</span>&gt;(<span className="t">TransferState</span>.Idle) {"{"}
                    {"\n\n    "}
                    <span className="k">override fun</span> <span className="f">handle</span>(intent: <span className="t">TransferIntent</span>) = <span className="k">when</span> (intent) {"{"}
                    {"\n        "}
                    <span className="k">is</span> <span className="t">TransferIntent</span>.Submit -&gt; <span className="f">sendTransfer</span>(intent.draft)
                    {"\n            "}.map {"{ "}it.<span className="f">toState</span>(){" }"}
                    {"\n            "}.onStart {"{ "}emit(<span className="t">TransferState</span>.Sending){" }"}
                    {"\n            "}.catch {"{ "}emit(<span className="t">TransferState</span>.Failed(it)){" }"}
                    {"\n    }"}
                    {"\n}"}
                  </code>
                </pre>
                <figcaption className="code-foot">
                  <GitBranch size={14} />
                  MVI · Coroutines · Flow · Koin
                </figcaption>
              </figure>
            </div>

            <dl className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>
                    <Num value={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── 01 Work ─────────────────────────────────────────── */}
        <section className="band-dark" id="work">
          <div className="wrap">
            <SectionHead index="01" label="Selected work" title="Selected work, in detail">
              <p>What each project needed, what I did, and what it runs on.</p>
            </SectionHead>

            {cases.map((c, i) => (
              <article className="case" key={c.id} id={`case-${c.id}`} data-reveal>
                <CaseVisual visual={c.visual} priority={i === 0} />
                <div className="case-body">
                  <div className="case-meta">
                    <span className="tag tag-dark">{c.tag}</span>
                    <time>{c.period}</time>
                  </div>
                  <h3>{c.title}</h3>
                  <p className="case-role">{c.role}</p>
                  <p className="case-summary">{c.summary}</p>
                  <ul className="case-points">
                    {c.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <dl className="metrics">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <dt>{m.label}</dt>
                        <dd>
                          <Num value={m.value} suffix={m.suffix} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="case-foot">
                    {c.stack.map((s) => (
                      <span key={s} className="mono-tag">
                        {s}
                      </span>
                    ))}
                    {c.link && (
                      <a className="btn btn-ghost" href={c.link.href} target="_blank" rel="noopener">
                        {c.link.label}
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 02 Experience ───────────────────────────────────── */}
        <section className="section-light" id="experience">
          <div className="wrap split">
            <div data-reveal>
              <p className="kicker">02 · Experience</p>
              <h2>Where I&apos;ve worked</h2>
            </div>
            <ol className="timeline">
              {experience.map((r) => (
                <li className="role" key={r.company} data-reveal>
                  <span className="period">{r.period}</span>
                  <div>
                    <div className="role-title">
                      <h3>{r.title}</h3>
                      <span className="company">
                        {r.company}
                      </span>
                    </div>
                    <p>{r.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 03 Education ────────────────────────────────────── */}
        <section className="section-light" id="education">
          <div className="wrap split">
            <div data-reveal>
              <p className="kicker">03 · Education</p>
              <h2>Study &amp; credentials</h2>
            </div>
            <ul className="timeline">
              {education.map((e) => {
                const Icon = e.kind === "degree" ? GraduationCap : e.kind === "award" ? Trophy : Certificate;
                return (
                  <li className="role" key={e.title} data-reveal>
                    <span className="period">{e.period}</span>
                    <div>
                      <div className="role-title">
                        <h3>
                          <Icon size={18} className="role-icon" />
                          {"href" in e ? (
                            <a href={e.href} target="_blank" rel="noopener">
                              {e.title}
                              <ArrowUpRight size={13} />
                            </a>
                          ) : (
                            e.title
                          )}
                        </h3>
                        <span className="company">{e.org}</span>
                      </div>
                      {"body" in e && <p>{e.body}</p>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ── 04 Skills ───────────────────────────────────────── */}
        <section className="section-light" id="skills">
          <div className="wrap split">
            <div data-reveal>
              <p className="kicker">04 · Depth</p>
              <h2>What I actually work with</h2>
            </div>
            <dl className="skill-list" data-reveal>
              {skills.map((s) => (
                <div key={s.group}>
                  <dt>{s.group}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── 05 Open source ──────────────────────────────────── */}
        <section className="band-dark" id="open-source">
          <div className="wrap">
            <SectionHead index="05" label="Open source" title="Things I build on the side">
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener">
                All repositories
                <ArrowUpRight size={14} />
              </a>
            </SectionHead>
            <div className="post-grid">
              {repos.map((r) => (
                <a className="post" key={r.name} href={r.href} target="_blank" rel="noopener" data-reveal>
                  <span className="type">
                    <GithubLogo size={14} />
                    Repository
                  </span>
                  <h3>{r.name}</h3>
                  <p className="post-meta">{r.meta}</p>
                  <p>{r.body}</p>
                  <ArrowUpRight size={18} className="post-go" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 About ────────────────────────────────────────── */}
        <section className="section-light" id="about">
          <div className="wrap split about">
            <div data-reveal>
              <div className="portrait">
                {profile.portrait ? (
                  <Image src={profile.portrait} alt={`Portrait of ${profile.name}`} width={560} height={700} sizes="(max-width: 900px) 240px, 320px" />
                ) : (
                  <span className="monogram" aria-hidden="true">
                    {profile.initials}
                  </span>
                )}
              </div>
            </div>
            <div data-reveal>
              <p className="kicker">06 · About</p>
              <h2>{about.heading}</h2>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ─────────────────────────────────────────── */}
        <section className="band-dark" id="contact">
          <div className="wrap">
            <div className="contact-grid" data-reveal>
              <div>
                <p className="availability">
                  <i aria-hidden="true" />
                  Open to senior and lead Android roles
                </p>
                <h2>
                  Let&apos;s build something
                  <br />
                  people can rely on.
                </h2>
                <p className="contact-lede">
                  Hiring for Android leadership, senior Android engineering or Kotlin Multiplatform work? I&apos;m open to relocation and
                  remote roles. Feel free to reach out.
                </p>
              </div>
              <div className="contact-list">
                <a href={`mailto:${profile.email}`}>
                  <Envelope size={20} className="lead" />
                  <span>
                    Email<small>{profile.email}</small>
                  </span>
                  <ArrowUpRight size={18} className="go" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener">
                  <LinkedinLogo size={20} className="lead" />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={18} className="go" />
                </a>
                <a href={profile.github} target="_blank" rel="noopener">
                  <GithubLogo size={20} className="lead" />
                  <span>GitHub</span>
                  <ArrowUpRight size={18} className="go" />
                </a>
                <a href={profile.cv} target="_blank" rel="noopener">
                  <FileArrowDown size={20} className="lead" />
                  <span>Download CV</span>
                  <ArrowUpRight size={18} className="go" />
                </a>
              </div>
            </div>
            <footer className="site-footer">
              <span>© {year} {profile.name}</span>
              <span className="mono">Kotlin by day. This page is TypeScript.</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
