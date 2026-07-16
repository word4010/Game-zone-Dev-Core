const form = document.querySelector('.footer-form');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close');

if (form && backdrop && closeBtn) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    backdrop.classList.remove('is-hidden');
    form.reset();
  });

  closeBtn.addEventListener('click', () => {
    backdrop.classList.add('is-hidden');
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.add('is-hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !backdrop.classList.contains('is-hidden')) {
      backdrop.classList.add('is-hidden');
    }
  });
}