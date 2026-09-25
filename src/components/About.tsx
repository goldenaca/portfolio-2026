import { SectionHead } from "./SectionHead";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section className="sec" id="about">
      <SectionHead
        tag="/01 · About"
        title="Intentional"
        accent="builder."
        aside="I like technology that doesn't just work — it solves a real problem and scales. I collaborate closely with design, product and backend teams to turn requirements into intuitive, sustainable experiences."
      />
      <ScrollReveal stagger className="about-grid">
        <div className="card about-card">
          <h3>
            Technology that <span className="acc">solves real problems</span>.
          </h3>
          <p>
            Frontend-focused full-stack engineer with 5+ years building web and
            mobile products. I've been the sole architect of a production
            financial platform, led LLM integrations for a New York–based
            product, and rebuilt a dental platform used by 60,000+ people
            across Latin America.
          </p>
          <p>
            I work best on cross-functional teams where frontend meets design
            and product — translating ambiguous requirements into concrete UI
            decisions, shipping iteratively, and leaving the codebase better
            than I found it.
          </p>
        </div>
        <div className="values">
          <div className="card val">
            <div className="ic">01</div>
            <div>
              <h4>Challenges</h4>
              <p>I thrive on problems that don't have an obvious answer.</p>
            </div>
          </div>
          <div className="card val">
            <div className="ic">02</div>
            <div>
              <h4>Craft</h4>
              <p>Solving things the right way — clean code, clear decisions.</p>
            </div>
          </div>
          <div className="card val">
            <div className="ic">03</div>
            <div>
              <h4>Team</h4>
              <p>
                Communication and pair work are part of the output, not
                overhead.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
