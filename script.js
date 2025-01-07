// выбор активного пункта в меню в <main>
const MenuItem = document.querySelectorAll('.menu__item')

MenuItem.forEach(function (item) {
    item.addEventListener('click', function () {
        MenuItem.forEach(function (el){
            el.classList.remove('menu__item--active')
        })
        item.classList.add('menu__item--active')
    })
})