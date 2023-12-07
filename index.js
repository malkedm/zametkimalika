document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('footer');

    // Функция для определения видимой секции
    function getVisibleSection() {
        let visibleSection = null;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                visibleSection = section;
            }
        });
        return visibleSection;
    }

    // Функция для обновления цвета header
    function updateHeaderColor() {
        const visibleSection = getVisibleSection();
        const color = visibleSection ? window.getComputedStyle(visibleSection).backgroundColor : window.getComputedStyle(footer).backgroundColor;
        header.style.backgroundColor = color;
    }

    // Обновление цвета при прокрутке
    window.addEventListener('scroll', updateHeaderColor);

    // Обновление цвета при загрузке страницы
    updateHeaderColor();
});
