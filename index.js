document.addEventListener('DOMContentLoaded', function () {
    // Получаем все ссылки в header
    const headerLinks = document.querySelectorAll('header a');

    // Функция для обновления цвета фона ссылок
    function updateLinkBackground() {
        // Получаем текущую позицию прокрутки страницы
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Перебираем все секции
        document.querySelectorAll('main section').forEach((section, index) => {
            const sectionId = section.getAttribute('id');
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Проверяем, находится ли текущая позиция прокрутки внутри секции
            if (scrollPosition >= sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionHeight) {
                // Если да, то устанавливаем цвет фона для соответствующей ссылки в header
                headerLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
                });
            }
        });
    }

    // Обновляем цвет фона при загрузке страницы
    updateLinkBackground();

    // Обновляем цвет фона при прокрутке
    document.addEventListener('scroll', updateLinkBackground);

    // Обновляем цвет фона при изменении размеров окна
    window.addEventListener('resize', updateLinkBackground);
});
