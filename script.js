const button = document.querySelector('.toggle');
const savedTheme = localStorage.getItem('theme');

const updateToggleLabel = () => {
  if (!button) return;

  const isLight = document.body.classList.contains('light');
  const label = isLight ? 'Включить темную тему' : 'Включить светлую тему';
  button.setAttribute('aria-label', label);
  button.setAttribute('title', label);
};

if (savedTheme === 'light') {
  document.body.classList.add('light');
}

updateToggleLabel();

button?.addEventListener('click', () => {
  document.body.classList.toggle('light');

  const isLight = document.body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateToggleLabel();
});
