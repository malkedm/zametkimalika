document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main section");
    const footer = document.getElementById("footer-9");

    function getCurrentSection() {
        const scrollPosition = window.scrollY + 1;
        let currentSection = null;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section;
            }
        });

        if (scrollPosition >= footer.offsetTop) {
            currentSection = footer;
        }

        return currentSection;
    }

    function highlightCurrentSection() {
        const currentSection = getCurrentSection();

        // Убираем подсветку со всех секций
        sections.forEach((section) => {
            section.classList.remove("highlight");
        });

        // Подсвечиваем текущую секцию
        if (currentSection) {
            currentSection.classList.add("highlight");
        }
    }

    // Вызываем функцию при загрузке страницы и при прокрутке
    window.addEventListener("scroll", highlightCurrentSection);
    window.addEventListener("load", highlightCurrentSection);
});
