// theme-toggle.js
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Check for saved theme preference or use system preference
  const currentTheme = localStorage.getItem('theme') ||
                       (prefersDarkScheme.matches ? 'dark' : 'light');

  // Apply the current theme
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});