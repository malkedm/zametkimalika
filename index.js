document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');

    function highlightCurrentSection() {
        const currentPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
                removeActiveClass();
                section.classList.add('active');
            }
        });

        const footerTop = footer.offsetTop;
        const footerBottom = footerTop + footer.offsetHeight;

        if (currentPosition >= footerTop && currentPosition <= footerBottom) {
            removeActiveClass();
            footer.classList.add('active');
        }
    }

    function removeActiveClass() {
        sections.forEach((section) => {
            section.classList.remove('active');
        });

        footer.classList.remove('active');
    }

    window.addEventListener('scroll', highlightCurrentSection);
    window.addEventListener('resize', highlightCurrentSection);
});
