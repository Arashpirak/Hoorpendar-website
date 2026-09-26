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

type AtirameApi = { open?: () => void; isReady?: () => boolean };

// The widget is loaded lazily by components/chat/AtirameChat.tsx, so wait a few seconds for it.
async function openAtirame(timeoutMs = 10000): Promise<boolean> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (callApi() || clickLauncher()) return true;
    await new Promise((r) => setTimeout(r, 200));
  }
  return false;
}

// chatbot-widget.js (loaded by embed.js) exposes window.__ATIRAME_CHATBOT_API__.open().
function callApi(): boolean {
  const api = (window as unknown as { __ATIRAME_CHATBOT_API__?: AtirameApi }).__ATIRAME_CHATBOT_API__;
  if (typeof api?.open !== 'function' || api.isReady?.() === false) return false;
  api.open();
  return true;
}

// Older widget builds have no API; click their floating launcher instead.
function clickLauncher(): boolean {
  const launcher = document.getElementById('chatbot-toggle');
  if (!launcher || launcher.getBoundingClientRect().width === 0) return false;
  launcher.click();
  return true;
}
