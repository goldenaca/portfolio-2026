import { useRef } from "react";
import { useMouseParallax } from "../hooks/useMouseParallax";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useMouseParallax(heroRef, shapesRef);

  return (
    <section className="hero" ref={heroRef} id="top">
      <div>
        <div className="chip reveal d0">
          <span className="pg bg-emerald-500" />
          Available · Remote worldwide
        </div>
        <div className="kicker reveal d1">/ Sebastian Saporiti</div>
        <h1>
          <span className="line">
            <span>Fullstack</span>
          </span>
          <span className="line">
            <span className="acc">Developer</span>
          </span>
        </h1>
        <p className="tag reveal d3">
          Hello — I'm Sebastian, a fullstack developer with 5+ years building
          scalable web &amp; mobile products with React, React Native, NodeJs
          and TypeScript. I focus on clean architecture, performance and
          user-centered interfaces that are a pleasure to use.
        </p>
        <div className="btns reveal d4">
          <a href="#contact">
            <button type="button" className="btn pri">
              Get in touch ↗
            </button>
          </a>
          <a
            href="/SEBASTIAN_SAPORITI_CV.pdf"
            download="Sebastian_Saporiti_CV.pdf"
            className="btn"
          >
            ↓ Download CV
          </a>
        </div>
        <div className="metrics">
          <div>
            <b>5+</b>
            <span>Years shipping</span>
          </div>
          <div>
            <b>100K+</b>
            <span>Users impacted</span>
          </div>
          <div>
            <b>100+</b>
            <span>Coffees drunk</span>
          </div>
        </div>
      </div>
      <div className="shapes" ref={shapesRef} data-mx>
        <div className="s1">
          <div className="inner" />
        </div>
        <div className="s2">
          <div className="inner" />
        </div>
        <div className="s3">
          <div className="inner" />
        </div>
      </div>
    </section>
  );
}
