document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('footer');

    function changeHeaderColor() {
        const currentScroll = window.scrollY;
        let activeSectionIndex = -1;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                activeSectionIndex = index;
            }
        });

        if (currentScroll >= footer.offsetTop - header.offsetHeight) {
            activeSectionIndex = sections.length; // Footer is considered as the last section
        }

        if (activeSectionIndex !== -1) {
            const activeColor = getComputedStyle(sections[activeSectionIndex]).backgroundColor;
            header.style.background = activeColor;
        }
    }

    // Listen for scroll events to trigger color change
    window.addEventListener('scroll', changeHeaderColor);

    // Smooth scrolling when clicking on header links
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
