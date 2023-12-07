document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('footer');

    // Функция для определения активной секции
    function getActiveSection() {
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                return section;
            }
        }
        return footer; // Если нет активной секции, то считаем активным footer
    }

    // Функция для установки цвета фона для header
    function setHeaderBackground() {
        const activeSection = getActiveSection();
        const backgroundColor = window.getComputedStyle(activeSection).backgroundColor;
        header.style.background = backgroundColor;
    }

    // Вызываем функцию при загрузке страницы и при прокрутке
    setHeaderBackground();
    window.addEventListener('scroll', setHeaderBackground);
});
