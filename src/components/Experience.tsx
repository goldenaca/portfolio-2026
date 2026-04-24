import { experience } from "../data/experience";
import { SectionHead } from "./SectionHead";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  return (
    <section className="sec" id="experience">
      <SectionHead
        tag="/02 · Experience"
        title="Working across"
        accent="teams."
        aside="Healthcare, e-commerce, aeronautics, B2B platforms — remote-first collaboration with international teams."
      />
      <ScrollReveal stagger className="exp-list">
        {experience.map((e, i) => (
          <div className="exp" key={e.company}>
            <div className="idx">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h3 className="co">{e.company}</h3>
              <div className="role">{e.role}</div>
              <div className="period">{e.period}</div>
              <div className="loc">{e.location}</div>
            </div>
            <div className="main">
              <p>{e.summary}</p>
              <ul>
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="res">
                {e.results.map((r) => (
                  <div key={r}>{r}</div>
                ))}
              </div>
              <div className="stack">
                {e.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
