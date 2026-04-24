import { useEffect } from 'react';

export function useAsideParallax() {
  useEffect(() => {
    const heads = document.querySelectorAll<HTMLElement>('.sec-head');
    if (!heads.length) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        heads.forEach((h) => {
          const r = h.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height);
            const y = (progress - 0.5) * -30;
            const aside = h.querySelector<HTMLElement>('.aside');
            if (aside) aside.style.transform = `translateY(${y.toFixed(1)}px)`;
          }
        });
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
