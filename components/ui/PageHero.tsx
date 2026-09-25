import Image from 'next/image';
import type { ReactNode } from 'react';
import type { Photo } from '@/content/photos';

type Props = {
  photo: Photo;
  eyebrow?: string;
  title: string;
  lead?: string;
  /** Breadcrumbs or other content above the title. */
  top?: ReactNode;
  children?: ReactNode;
};

// Full-bleed photo banner for inner pages, in the style of the home hero.
export function PageHero({ photo, eyebrow, title, lead, top, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a121e] text-white">
      <Image src={photo.src} alt="" fill preload sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#07101c] via-[#07101c]/70 to-[#07101c]/35" />
      <div className="mx-auto flex min-h-[340px] max-w-6xl flex-col justify-end px-4 pt-20 pb-10 sm:min-h-[400px] sm:px-6 sm:pb-12">
        {top}
        {eyebrow && <p className="mb-3 text-sm font-semibold text-[#f5c451]">{eyebrow}</p>}
        <h1 className="max-w-3xl text-3xl leading-tight font-extrabold sm:text-5xl sm:leading-tight">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl leading-8 text-white/85 sm:text-lg sm:leading-9">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; link?: ReactNode }[] }) {
  return (
    <nav aria-label="breadcrumb" className="mb-4 text-sm text-white/75">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.link ?? <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
