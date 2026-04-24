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
          <div className="sc">Instituto Técnico Superior · Argentina</div>
          <p>
            Electronics, embedded systems and industrial control — logical problem solving and
            systems thinking, now applied to scalable software.
          </p>
        </div>
        <div className="langs">
          <div className="lg">
            <b>Spanish</b>Native · C2
          </div>
          <div className="lg">
            <b>English</b>Advanced · C1
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
