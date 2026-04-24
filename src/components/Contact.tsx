import { useEffect, useRef, useState, type MouseEvent } from "react";

const EMAIL = "seba.saporiti@gmail.com";

export function Contact() {
  const [toast, setToast] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setToast(null), 2000);
  };

  const copyEmail = async (e: MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast("✓ Copied to clipboard");
    } catch {
      showToast("Copy failed");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="ornament sr">
        <div className="o1" />
        <div className="o2" />
        <div className="o3" />
      </div>
      <div className="sec-tag sr delay-1">/06 · Contact</div>
      <h2 className="sr delay-2">
        Let's <span className="acc">build.</span>
      </h2>
      <p className="sub sr delay-3">
        Building scalable frontend and fullstack systems, from UI to backend
        focused on performance and user experience. <br />
        Generating a real-world impact.
      </p>
      <div className="btns sr delay-4">
        <a href={`mailto:${EMAIL}`} onClick={copyEmail}>
          <button type="button" className="btn pri">
            {EMAIL} →
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
      <div className="rows">
        <a href={`mailto:${EMAIL}`} onClick={copyEmail}>
          <div className="k">Email</div>
          <div className="v">{EMAIL}</div>
        </a>
        <a href="tel:+5492944691027">
          <div className="k">Github</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/goldenaca"
            className="v"
          >
            github.com/goldenaca
          </a>
        </a>
        <a
          href="https://linkedin.com/in/sebastian-saporiti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="k">LinkedIn</div>
          <div className="v">/sebastian-saporiti</div>
        </a>
      </div>
      <div
        className={`toast${toast ? " show" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </section>
  );
}
