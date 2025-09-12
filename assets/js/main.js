// Small enhancements: mobile nav + year
const btn = document.querySelector('.menu-toggle');
const list = document.querySelector('#nav-list');
if (btn && list) {
  btn.addEventListener('click', () => {
    const open = list.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
