import { useEffect } from "react";
import { SmoothScroll } from "./components/SmoothScroll";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Stack } from "./components/Stack";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useAsideParallax } from "./hooks/useAsideParallax";

export default function App() {
  useAsideParallax();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    document.querySelectorAll(".sr, .stagger").forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <SmoothScroll>
      <div className="wrap">
        <Nav />
        <main className="content">
          <Hero />
          <About />
          <Experience />
          {/* <Work /> */}
          <Stack />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}
