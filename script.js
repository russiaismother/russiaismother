const button = document.querySelector('.toggle');
const savedTheme = localStorage.getItem('theme');

if (button && savedTheme === 'light') {
  document.body.classList.add('light');
  button.textContent = 'Темная тема';
}

button?.addEventListener('click', () => {
  document.body.classList.toggle('light');

  const isLight = document.body.classList.contains('light');
  button.textContent = isLight ? 'Темная тема' : 'Светлая тема';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
