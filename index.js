document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('#footer-9');

    function setActiveSection() {
        const scrollPosition = window.scrollY + header.offsetHeight;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                header.style.background = getComputedStyle(section).background;
            }
        });

        const footerTop = footer.offsetTop;
        const footerBottom = footerTop + footer.offsetHeight;

        if (scrollPosition >= footerTop && scrollPosition < footerBottom) {
            header.style.background = getComputedStyle(footer).background;
        }
    }

    window.addEventListener('scroll', setActiveSection);
});
