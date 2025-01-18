// Универсальная функция для управления активными классами меню
function handleActiveClass(elements, activeClass) {
    elements.forEach(function (item) {
        item.addEventListener('click', function () {
            elements.forEach(function (el) {
                el.classList.remove(activeClass);
            });
            item.classList.add(activeClass);
        });
    });
}


handleActiveClass(document.querySelectorAll('.menu__item'), 'menu__item--active');
handleActiveClass(document.querySelectorAll('.sidebar__item'), 'sidebar__item--highlighted');
handleActiveClass(document.querySelectorAll('.sidebar__lang'), 'sidebar__lang--active');

// Управление сайдбаром
const openBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.burger-close');
const sidebar = document.querySelector('.sidebar');

openBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--hidden');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar--hidden');
});