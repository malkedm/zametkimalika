document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');

    // Функция для обновления фона в шапке
    function updateHeaderBackground() {
        const currentSectionId = getCurrentSectionId();
        const currentFooterBackground = getComputedStyle(footer).backgroundColor;

        header.style.background = currentSectionId ? getSectionBackground(currentSectionId) : currentFooterBackground;
    }

    // Функция для получения id активной секции
    function getCurrentSectionId() {
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                return section.id;
            }
        }
        return null;
    }

    // Функция для получения фона активной секции
    function getSectionBackground(sectionId) {
        const sectionElement = document.getElementById(sectionId);
        return getComputedStyle(sectionElement).backgroundColor;
    }

    // Обновляем фон при прокрутке страницы
    window.addEventListener('scroll', updateHeaderBackground);

    // Обновляем фон при загрузке страницы
    window.addEventListener('load', updateHeaderBackground);
});
