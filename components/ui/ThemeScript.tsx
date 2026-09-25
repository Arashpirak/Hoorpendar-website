'use client';

import { useEffect } from 'react';
import { applyTheme, themeScript } from '@/lib/theme-script';

// Inline theme script for server-rendered pages. The `type` switch keeps React from warning
// about a <script> when it renders on the client.
export function ThemeScript() {
  // When a page is rendered in the browser (Next.js does this for 404s in dynamic routes),
  // the inline script never runs, so apply the theme here instead.
  useEffect(() => {
    if (!document.documentElement.dataset.theme) applyTheme();
  }, []);

  return (
    <script
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}
