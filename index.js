document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.main-container section');
    const header = document.querySelector('header');

    // Функция для определения видимой секции
    function getVisibleSection() {
        const scrollPosition = window.scrollY + header.offsetHeight;

        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                return section;
            }
        }

        return null;
    }

    // Функция для обновления цвета header
    function updateHeaderColor() {
        const visibleSection = getVisibleSection();

        if (visibleSection) {
            const sectionNumber = visibleSection.classList[1].split('-')[1];
            const colorVariable = `--back-section-${sectionNumber}`;
            const color = getComputedStyle(document.documentElement).getPropertyValue(colorVariable);
            
            header.style.background = color;
        }
    }

    // Обновление цвета при загрузке страницы
    updateHeaderColor();

    // Обновление цвета при скролле
    window.addEventListener('scroll', updateHeaderColor);

    // Обновление цвета при изменении размеров окна
    window.addEventListener('resize', updateHeaderColor);

    // Обработка события клика на ссылки в header
    header.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();

            const targetSectionId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight + 1,
                    behavior: 'smooth'
                });
            }
        }
    });
});
