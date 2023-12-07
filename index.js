document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("main section");
    const footer = document.querySelector("footer");

    function changeHeaderColor() {
        const scrollPosition = window.scrollY + $height-header;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionColor = getComputedStyle(section).backgroundColor;
                header.style.background = sectionColor;
            }
        });

        // Check if footer is in the viewport
        const footerTop = footer.offsetTop;
        const footerBottom = footerTop + footer.offsetHeight;
        if (scrollPosition >= footerTop && scrollPosition < footerBottom) {
            const footerColor = getComputedStyle(footer).backgroundColor;
            header.style.background = footerColor;
        }
    }

    window.addEventListener("scroll", changeHeaderColor);
});
