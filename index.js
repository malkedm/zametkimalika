document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main .main-container section");
    const footer = document.getElementById("footer-9");

    function highlightCurrentSection() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - document.querySelector("header").offsetHeight;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Устанавливаем активный класс для текущей секции
                section.classList.add("active");
            } else {
                // Удаляем активный класс для других секций
                section.classList.remove("active");
            }
        });

        // Проверяем, если находимся в футере
        const footerTop = footer.offsetTop - document.querySelector("header").offsetHeight;
        const footerBottom = footerTop + footer.clientHeight;

        if (scrollPosition >= footerTop && scrollPosition < footerBottom) {
            // Устанавливаем активный класс для футера
            footer.classList.add("active");
        } else {
            // Удаляем активный класс для футера
            footer.classList.remove("active");
        }
    }

    // Вызываем функцию при прокрутке страницы
    window.addEventListener("scroll", highlightCurrentSection);

    // Вызываем функцию при загрузке страницы
    highlightCurrentSection();
});
