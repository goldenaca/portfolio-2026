import { skills } from '../data/skills';
import { SectionHead } from './SectionHead';
import { ScrollReveal } from './ScrollReveal';

export function Stack() {
  return (
    <section className="sec" id="stack">
      <SectionHead
        tag="/04 · Stack"
        title="Daily"
        accent="toolkit."
        aside="Tools I use on a regular basis — organized by layer."
      />
      <ScrollReveal stagger className="skills">
        {Object.entries(skills).map(([category, items]) => (
          <div className="card sk" key={category}>
            <h4>/ {category}</h4>
            <div className="l">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
