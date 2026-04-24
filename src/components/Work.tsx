import { projects } from '../data/projects';
import { SectionHead } from './SectionHead';
import { ScrollReveal } from './ScrollReveal';

export function Work() {
  return (
    <section className="sec" id="work">
      <SectionHead
        tag="/03 · Selected work"
        title="Things I've"
        accent="shipped."
        aside="A selection of production projects across dental healthcare, aeronautics, e-commerce and property administration."
      />
      <ScrollReveal stagger className="projects">
        {projects.map((p) => (
          <div className="card proj" key={p.name}>
            <div className="phead">
              <span className="ptag">{p.tag}</span>
              <span className="pyr">{p.year}</span>
            </div>
            <div className="pv">{p.name}</div>
            <h3>{p.name}</h3>
            <div className="prole">{p.role}</div>
            <p className="pb">{p.blurb}</p>
            <div className="pm">
              {p.metrics.map((m) => (
                <div key={m.l}>
                  <b>{m.v}</b>
                  <span>{m.l}</span>
                </div>
              ))}
            </div>
            <div className="ps">{p.stack.join(' · ')}</div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
