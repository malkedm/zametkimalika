document.addEventListener('DOMContentLoaded', function () {
    // Получаем все секции и ссылки в хедере
    const sections = document.querySelectorAll('main .main-container section');
    const headerLinks = document.querySelectorAll('header a');

    // Получаем элементы header и footer
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Устанавливаем обработчик события при прокрутке страницы
    document.addEventListener('scroll', function () {
        // Определяем, в какой секции мы находимся
        let currentSection = null;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                currentSection = index + 1;
            }
        });

        // Устанавливаем активные ссылки в хедере
        headerLinks.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1);
            link.classList.toggle('active', sectionId === `section-${currentSection}`);
        });

        // Устанавливаем цвет header в соответствии с цветом активной секции или footer
        const currentColor = getComputedStyle(sections[currentSection - 1]).backgroundColor;
        header.style.backgroundColor = currentColor;
    });

    // Устанавливаем обработчик события при прокрутке колесиком мыши
    document.addEventListener('wheel', function (event) {
        event.preventDefault();

        const delta = event.deltaY;
        const currentSection = getCurrentSection();

        // Определяем направление прокрутки
        if (delta < 0) {
            // Прокрутка вверх
            scrollToSection(currentSection - 1);
        } else {
            // Прокрутка вниз
            scrollToSection(currentSection + 1);
        }
    });

    // Функция для определения текущей секции
    function getCurrentSection() {
        let currentSection = null;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                currentSection = index + 1;
            }
        });

        return currentSection;
    }

    // Функция для прокрутки к указанной секции
    function scrollToSection(sectionIndex) {
        // Проверяем, чтобы индекс секции был в допустимых пределах
        sectionIndex = Math.max(1, Math.min(sections.length, sectionIndex));

        // Прокручиваем к указанной секции
        sections[sectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
});
