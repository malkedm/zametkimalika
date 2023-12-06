document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const headerLinks = document.querySelectorAll('header .mini-img');

    let activeIndex = 0;

    function setActiveIndex() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeIndex = index;
            }
        });

        const footerTop = footer.offsetTop;
        const footerBottom = footerTop + footer.offsetHeight;

        if (scrollPosition >= footerTop && scrollPosition < footerBottom) {
            activeIndex = headerLinks.length - 1; // Footer is considered as the last section
        }
    }

    function changeBackground() {
        headerLinks.forEach((link, index) => {
            if (index === activeIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function handleScroll() {
        setActiveIndex();
        changeBackground();
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Listen for touch events (for mobile)
    window.addEventListener('touchmove', handleScroll);

    // Listen for wheel events
    window.addEventListener('wheel', handleScroll);
});
