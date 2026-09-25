import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Photos of Iranian dams and power plants (content/iran-photos.ts). The
    // optimizer serves them from our own domain, so visitors never fetch
    // Wikimedia directly.
    remotePatterns: [{ protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/wikipedia/commons/**' }],
  },
};

export default withNextIntl(nextConfig);
