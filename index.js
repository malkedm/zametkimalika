document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const header = document.querySelector('body header');

    // Функция для обновления цвета header
    function updateHeaderColor() {
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= $height-header && rect.bottom >= $height-header;
        });

        const footerRect = document.querySelector('footer').getBoundingClientRect();

        if (currentSection) {
            header.style.background = window.getComputedStyle(currentSection).backgroundColor;
        } else if (footerRect.top <= $height-header) {
            header.style.background = window.getComputedStyle(document.querySelector('#footer-9')).backgroundColor;
        } else {
            header.style.background = $back-header;
        }
    }

    // Обработчик событий для скролла
    document.addEventListener('scroll', updateHeaderColor);

    // Обработчик событий для изменения размеров окна
    window.addEventListener('resize', updateHeaderColor);

    // Инициализация при загрузке страницы
    updateHeaderColor();
});
