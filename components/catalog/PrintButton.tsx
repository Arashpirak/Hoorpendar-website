'use client';

// Opens the browser's print dialog, where visitors can also save the catalogue as a PDF.
export function PrintButton({ label, hint }: { label: string; hint: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      title={hint}
      className="inline-flex items-center gap-2 rounded-full bg-[#f5c451] px-5 py-2.5 text-sm font-bold text-[#2b1d00] hover:bg-[#f7d37a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      </svg>
      {label}
    </button>
  );
}
