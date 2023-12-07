document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main .main-container section");
    const header = document.querySelector("body header");

    function changeHeaderColor() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionColor = window.getComputedStyle(section).backgroundColor;
                header.style.background = sectionColor;
            }
        });
    }

    // Вызывать функцию при прокрутке страницы
    window.addEventListener("scroll", changeHeaderColor);

    // Вызывать функцию при загрузке страницы для установки цвета на старте
    changeHeaderColor();
});
