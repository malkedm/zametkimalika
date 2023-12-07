document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const header = document.querySelector('body header');

    // Функция для определения видимой секции
    function getActiveSection() {
        let maxSection = sections[0];
        let maxSectionHeight = 0;

        sections.forEach(section => {
            const sectionRect = section.getBoundingClientRect();
            const visibleHeight = Math.min(sectionRect.bottom, window.innerHeight) - Math.max(sectionRect.top, 0);

            if (visibleHeight > maxSectionHeight) {
                maxSectionHeight = visibleHeight;
                maxSection = section;
            }
        });

        return maxSection;
    }

    // Функция для установки цвета фона заголовка
    function setHeaderBackground() {
        const activeSection = getActiveSection();
        const backgroundColor = window.getComputedStyle(activeSection).backgroundColor;
        header.style.background = backgroundColor;
    }

    // Обработчик события прокрутки страницы
    window.addEventListener('scroll', setHeaderBackground);

    // Установим цвет фона заголовка при загрузке страницы
    setHeaderBackground();
});
