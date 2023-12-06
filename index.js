document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");
    const headerLinks = document.querySelectorAll(".right-container-header .mini-img");

    function changeHeaderBackground() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                headerLinks[index].classList.add("active");
            } else {
                headerLinks[index].classList.remove("active");
            }
        });

        const footerTop = footer.offsetTop;
        if (scrollPosition >= footerTop) {
            headerLinks.forEach(link => link.classList.remove("active"));
            headerLinks[headerLinks.length - 1].classList.add("active"); // Footer link
        }
    }

    // Обработчик события прокрутки страницы
    window.addEventListener("scroll", changeHeaderBackground);

    // Обработчик события клика по ссылкам в header
    headerLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            headerLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
            const targetSection = sections[index];
            window.scrollTo({ top: targetSection.offsetTop, behavior: "smooth" });
        });
    });
});
