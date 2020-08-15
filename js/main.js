const cta = document.querySelector('.cta');
const form = document.querySelector('.form');

cta.addEventListener('click', () => {
    form.classList.add('form--active');
});