export const navItems = [
  { href: '/', key: 'home' },
  { href: '/projects', key: 'projects' },
  { href: '/products', key: 'products' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' },
] as const;

export type NavKey = (typeof navItems)[number]['key'];
