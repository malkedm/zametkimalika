document.addEventListener("DOMContentLoaded", function () {
    // Получаем все ссылки с классом .img-site-1 до .img-site-9
    const links = document.querySelectorAll('.right-container-header .mini-img');

    // Получаем футер
    const footer = document.querySelector('footer');

    // Функция для изменения стиля ссылок в зависимости от положения скролла
    function changeLinkStyle() {
        const scrollPosition = window.scrollY;
        const footerPosition = footer.offsetTop;

        // Перебираем все секции и изменяем стиль ссылок в зависимости от положения скролла
        document.querySelectorAll('section').forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Мы находимся в данной секции, изменяем цвет фона у соответствующей ссылки
                links[index].style.background = 'green';
            } else {
                // Мы не в данной секции, возвращаем цвет фона к исходному
                links[index].style.background = '';
            }
        });

        // Проверяем, находимся ли в футере и изменяем цвет фона у соответствующей ссылки
        if (scrollPosition >= footerPosition) {
            links[8].style.background = 'green'; // 8 - индекс футера
        } else {
            links[8].style.background = '';
        }
    }

    // Добавляем обработчик события при прокрутке страницы
    window.addEventListener('scroll', changeLinkStyle);

    // Вызываем функцию при загрузке страницы для установки начальных стилей
    changeLinkStyle();
});
