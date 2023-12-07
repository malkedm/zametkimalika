document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('footer');

    function changeHeaderColor() {
        const currentScroll = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                header.style.backgroundColor = getComputedStyle(section).backgroundColor;
            }
        });

        if (currentScroll >= footer.offsetTop - header.offsetHeight) {
            header.style.backgroundColor = getComputedStyle(footer).backgroundColor;
        }
    }

    window.addEventListener('scroll', changeHeaderColor);

    document.querySelectorAll('header a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight + 1,
                behavior: 'smooth'
            });
        });
    });
});
