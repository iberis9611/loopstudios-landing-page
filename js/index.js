const button = document.querySelector('#menu_btn');
const nav = document.querySelector('.header__nav');
const header = document.querySelector('.header');

button.addEventListener('click', () => {
    if (header.classList.contains('open_menu')) {
        button.src = 'images/icon-hamburger.svg';
        header.classList.remove('open_menu');
        nav.style.display = 'none';
    } else {
        button.src = 'images/icon-close.svg';
        header.classList.add('open_menu');
        nav.style.display = 'block';
    }
});