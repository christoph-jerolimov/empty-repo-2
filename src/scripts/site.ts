// Global behaviour loaded on every page: theme toggle and the newsletter form.

const THEME_KEY = 'esde-theme';

function setTheme(theme: 'light' | 'dark') {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Storage may be unavailable (private mode); the toggle still works for this page.
  }
}

document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  });
});

// No newsletter backend exists yet; keep the form from navigating away.
document.querySelectorAll<HTMLFormElement>('[data-newsletter]').forEach((form) => {
  form.addEventListener('submit', (e) => e.preventDefault());
});
