import { SectionHead } from './SectionHead';
import { ScrollReveal } from './ScrollReveal';

export function Education() {
  return (
    <section className="sec" id="education">
      <SectionHead tag="/05 · Education & languages" title="Where it" accent="began." />
      <ScrollReveal className="card edu">
        <div className="yr">2017</div>
        <div>
          <h3>Technician in Automation &amp; Control Systems</h3>
          <div className="sc">Técnica Los Andes (ECTLA) · Bariloche · 2012 — 2017</div>
          <p>
            Programming foundations from Assembly and Arduino to HTML, CSS and JavaScript, plus
            electronics and industrial control — systems thinking now applied to software.
          </p>
        </div>
        <div className="langs">
          <div className="lg">
            <b>Spanish</b>Native
          </div>
          <div className="lg">
            <b>English</b>Full professional · C1
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
