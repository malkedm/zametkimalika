document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const footer = document.getElementById('footer-9');

    function getCurrentSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                return section.id;
            }
        }

        if (scrollPosition >= footer.offsetTop && scrollPosition < footer.offsetTop + footer.offsetHeight) {
            return footer.id;
        }

        return null;
    }

    function highlightCurrentSection() {
        const currentSectionId = getCurrentSection();

        // Удалите класс active у всех элементов
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Добавьте класс active к текущей секции
        const currentSection = document.getElementById(currentSectionId);
        if (currentSection) {
            currentSection.classList.add('active');
        }
    }

    // Вызывайте функцию при прокрутке страницы
    document.addEventListener('scroll', highlightCurrentSection);

    // Вызывайте функцию еще раз после загрузки страницы для начальной установки
    highlightCurrentSection();
});
