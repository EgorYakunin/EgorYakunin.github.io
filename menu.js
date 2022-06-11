const help = document.querySelector('.menu');
const menu = document.querySelector('.burger');

let isOpen = false;

help.addEventListener('click', () => {
    if (!isOpen) {
        isOpen = true;
        return menu.classList.add('burger--active');
    }

    menu.classList.remove('burger--active');
    isOpen = false;
});

