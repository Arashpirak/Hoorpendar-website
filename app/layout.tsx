// The real root layout (with <html>) is app/[locale]/layout.tsx. This pass-through
// layout exists because app/not-found.tsx lives at the root.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
