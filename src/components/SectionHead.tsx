import type { ReactNode } from 'react';

type Props = {
  tag: string;
  title: string;
  accent: string;
  aside?: ReactNode;
};

export function SectionHead({ tag, title, accent, aside }: Props) {
  return (
    <div className="sec-head sr">
      <div>
        <div className="sec-tag">{tag}</div>
        <h2>
          <span className="underline">
            {title} <span className="acc">{accent}</span>
          </span>
        </h2>
      </div>
      {aside && <div className="aside">{aside}</div>}
    </div>
  );
}
