import { useEffect, type RefObject } from 'react';

export function useMouseParallax(
  areaRef: RefObject<HTMLElement>,
  targetRef: RefObject<HTMLElement>,
  lerpFactor = 0.08
) {
  useEffect(() => {
    const area = areaRef.current;
    const target = targetRef.current;
    if (!area || !target) return;

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let raf: number | null = null;

    const tick = () => {
      curX += (targetX - curX) * lerpFactor;
      curY += (targetY - curY) * lerpFactor;
      target.style.setProperty('--mx', curX.toFixed(3));
      target.style.setProperty('--my', curY.toFixed(3));
      if (Math.abs(targetX - curX) > 0.001 || Math.abs(targetY - curY) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = area.getBoundingClientRect();
      targetX = ((e.clientX - r.left) / r.width - 0.5) * 2;
      targetY = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    area.addEventListener('mousemove', onMove);
    area.addEventListener('mouseleave', onLeave);

    return () => {
      area.removeEventListener('mousemove', onMove);
      area.removeEventListener('mouseleave', onLeave);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [areaRef, targetRef, lerpFactor]);
}
