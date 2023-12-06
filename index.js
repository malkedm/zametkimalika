document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section, footer');
    const headerLinks = document.querySelectorAll('header a');

    function setActiveLink() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                headerLinks.forEach((link) => {
                    link.classList.remove('a-active');
                });

                headerLinks[index].classList.add('a-active');
            }
        });
    }

    document.addEventListener('scroll', setActiveLink);
    window.addEventListener('resize', setActiveLink);
});
