import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import type { Product } from '@/content/types';
import { Logo } from '@/components/ui/Logo';
import { bidi } from '@/lib/bidi';

export function ProductImage({ product, locale, sizes }: { product: Product; locale: Locale; sizes: string }) {
  const image = product.images[0] ?? product.catalog?.[0];
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt[locale]}
        fill
        sizes={sizes}
        className="object-contain p-4"
      />
    );
  }
  // No photo yet: a quiet placeholder with the logo and model code.
  return (
    <div className="bg-grid flex h-full w-full flex-col items-center justify-center gap-3 text-muted">
      <Logo className="h-10 w-auto opacity-40" />
      {product.model && <span className="ltr px-4 text-center text-xs font-semibold">{product.model}</span>}
    </div>
  );
}

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[4/3] border-b border-border bg-white dark:bg-surface-2">
        <ProductImage product={product} locale={locale} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        {product.model && (
          <p className="mb-1.5 text-xs font-semibold text-accent">
            <span className="ltr inline-block">{product.model}</span>
          </p>
        )}
        <h3 className="font-bold leading-7 text-text group-hover:text-accent">{bidi(locale, product.title[locale])}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-7 text-muted">{bidi(locale, product.summary[locale])}</p>
      </div>
    </Link>
  );
}
