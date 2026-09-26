'use client';

import { Link, useRouter } from '@/i18n/navigation';

type Props = { className?: string; children: React.ReactNode };

// Opens the Atirame chat widget so visitors can place a quote request in the chat.
// Without JavaScript, or if the widget never loads, it falls back to the contact page.
export function ChatInquiryButton({ className, children }: Props) {
  const router = useRouter();

  async function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (!(await openAtirame())) router.push('/contact');
  }

  return (
    <Link href="/contact" onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

type Api = { open?: () => void; show?: () => void; toggle?: () => void };

// The widget is loaded lazily by components/chat/AtirameChat.tsx, so wait up to a few seconds for it.
async function openAtirame(timeoutMs = 6000): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (callGlobalApi() || clickLauncher()) return true;
    await new Promise((r) => setTimeout(r, 200));
  }
  return false;
}

// Use a JavaScript API if the embed script exposes one.
function callGlobalApi(): boolean {
  const w = window as unknown as Record<string, Api | undefined>;
  for (const name of ['Atirame', 'atirame', 'AtirameChat', 'atirameChat', 'AtirameWidget']) {
    const api = w[name];
    const open = api?.open ?? api?.show ?? api?.toggle;
    if (typeof open === 'function') {
      open.call(api);
      return true;
    }
  }
  return false;
}

// Otherwise click the widget's own launcher button, which may sit inside a shadow root.
function clickLauncher(): boolean {
  const hosts = document.querySelectorAll<HTMLElement>('[id*="atirame" i], [class*="atirame" i]');
  for (const host of hosts) {
    if (host.id === 'atirame-chat') continue; // our <script> tag
    const roots: ParentNode[] = [host];
    if (host.shadowRoot) roots.push(host.shadowRoot);
    for (const root of roots) {
      const candidates = [
        ...(host.matches('button, [role="button"]') ? [host] : []),
        ...root.querySelectorAll<HTMLElement>('button, [role="button"]'),
      ];
      const launcher = candidates.find(isVisible);
      if (launcher) {
        launcher.click();
        return true;
      }
    }
  }
  return false;
}

function isVisible(el: HTMLElement): boolean {
  const r = el.getBoundingClientRect();
  return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== 'hidden';
}
