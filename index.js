document.addEventListener('DOMContentLoaded', function () {
    // Получаем все ссылки в header
    const links = document.querySelectorAll('header a');

    // Получаем все секции и футер
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('main .main-container footer');

    // Функция для обновления цвета фона ссылок
    function updateLinkBackground() {
        // Получаем текущую позицию прокрутки
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Перебираем все секции и футер
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Проверяем, находится ли текущая секция на экране
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Если да, то меняем background соответствующей ссылки на зелёный
                links.forEach(link => link.style.background = '');
                links[index].style.background = 'green';
            }
        });

        // Проверяем, находится ли футер на экране
        const footerTop = footer.offsetTop;
        const footerBottom = footerTop + footer.offsetHeight;

        if (scrollPosition >= footerTop && scrollPosition < footerBottom) {
            // Если да, то меняем background соответствующей ссылки на зелёный
            links.forEach(link => link.style.background = '');
            links[links.length - 1].style.background = 'green';
        }
    }

    // Обновляем background ссылок при прокрутке
    window.addEventListener('scroll', updateLinkBackground);
});
