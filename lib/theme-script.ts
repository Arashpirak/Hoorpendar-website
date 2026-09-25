// Applies the stored theme, or the system theme if none is stored, to <html data-theme>.
// Must stay self-contained: it is also serialized into an inline script.
export function applyTheme() {
  try {
    let theme = localStorage.getItem('theme');
    if (theme !== 'light' && theme !== 'dark') {
      theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.dataset.theme = theme;
  } catch {}
}

// Runs before first paint so the theme is applied without a flash.
export const themeScript = `(${applyTheme.toString()})()`;
