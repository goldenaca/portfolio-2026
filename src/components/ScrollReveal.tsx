import { createElement, type ElementType, type ReactNode } from 'react';

type Delay = 1 | 2 | 3 | 4 | 5 | 6;

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: boolean;
  delay?: Delay;
  id?: string;
};

export function ScrollReveal({
  children,
  as = 'div',
  className = '',
  stagger = false,
  delay,
  id,
}: Props) {
  const base = stagger ? 'stagger' : 'sr';
  const delayClass = delay ? ` delay-${delay}` : '';
  const combined = `${base}${delayClass}${className ? ` ${className}` : ''}`;

  return createElement(as, { className: combined, id }, children);
}
