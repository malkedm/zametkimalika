document.addEventListener("DOMContentLoaded", function () {
    // Получаем все ссылки с классом .img-site-1 до .img-site-9
    const links = document.querySelectorAll('.right-container-header .mini-img');

    // Получаем футер
    const footer = document.querySelector('footer');

    // Функция для изменения стиля ссылок в зависимости от положения скролла
    function changeLinkStyle() {
        const scrollPosition = window.scrollY;
        const footerPosition = footer.offsetTop;

        // Функция для сброса стилей у всех ссылок
        function resetStyles() {
            links.forEach(link => {
                link.style.background = '';
            });
        }

        // Перебираем все секции и изменяем стиль ссылок в зависимости от положения скролла
        document.querySelectorAll('section').forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Мы находимся в данной секции, сбрасываем стили и изменяем цвет фона у соответствующей ссылки
                resetStyles();
                links[index].style.background = 'green';
            }
        });

        // Проверяем, находимся ли в футере и изменяем цвет фона у соответствующей ссылки
        if (scrollPosition >= footerPosition) {
            resetStyles();
            links[8].style.background = 'green'; // 8 - индекс футера
        }
    }

    // Добавляем обработчик события при прокрутке страницы
    window.addEventListener('scroll', changeLinkStyle);

    // Вызываем функцию при загрузке страницы для установки начальных стилей
    changeLinkStyle();
});
