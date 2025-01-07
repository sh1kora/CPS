// Универсальная функция для управления активным классом
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

// Применение универсальной функции
handleActiveClass(document.querySelectorAll('.menu__item'), 'menu__item--active');
handleActiveClass(document.querySelectorAll('.sidebar__item'), 'sidebar__item--highlighted');
handleActiveClass(document.querySelectorAll('.sidebar__lang'), 'sidebar__lang--active');

const openBtn = document.querySelector('.burger-menu'); // Используем querySelector для одного элемента
const closeBtn = document.querySelector('.burger-close');
const sidebar = document.querySelector('.sidebar'); // querySelector для поиска первого совпадения

openBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--hidden'); // Убираем скрытие
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.add('sidebar--hidden'); // Добавляем скрытие
});


// // выбор активного пункта в меню в <main>
// const contentMenuItem = document.querySelectorAll('.menu__item')
//
// contentMenuItem.forEach(function (item) {
//     item.addEventListener('click', function () {
//         contentMenuItem.forEach(function (el){
//             el.classList.remove('menu__item--active')
//         })
//         item.classList.add('menu__item--active')
//     })
// })
//
// const sidebarMenuItem = document.querySelectorAll('.sidebar__item')
//
// sidebarMenuItem.forEach(function (item) {
//     item.addEventListener('click', function () {
//         sidebarMenuItem.forEach(function (el){
//             el.classList.remove('sidebar__item--highlighted')
//         })
//         item.classList.add('sidebar__item--highlighted')
//     })
// })
//
// const sidebarLang = document.querySelectorAll('.sidebar__lang')
//
// sidebarLang.forEach(function (item) {
//     item.addEventListener('click', function () {
//         sidebarLang.forEach(function (el){
//             el.classList.remove('sidebar__lang--active')
//         })
//         item.classList.add('sidebar__lang--active')
//     })
// })

