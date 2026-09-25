import Link from 'next/link';

// Shown for requests the locale proxy does not handle. Locale pages use app/[locale]/not-found.tsx.
export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', textAlign: 'center', padding: '4rem 1rem' }}>
        <h1>404</h1>
        <p>
          <Link href="/en">Hoorpendar</Link> · <Link href="/fa" lang="fa">هورپندار</Link>
        </p>
      </body>
    </html>
  );
}
