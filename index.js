document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const header = document.querySelector('body header');
    const links = document.querySelectorAll('body header .right-container-header a');

    let isScrolling;

    function handleIntersection() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                const activeSection = section.getAttribute('id');
                console.log(`Активная секция: ${activeSection}`);
                const backgroundColor = window.getComputedStyle(section).backgroundColor;
                header.style.backgroundColor = backgroundColor;

                links.forEach((link) => {
                    const linkSection = link.getAttribute('href').substring(1);
                    if (linkSection === activeSection) {
                        link.style.backgroundColor = 'green';
                    } else {
                        link.style.backgroundColor = ''; // или установите исходный цвет
                    }
                });
            }
        });
    }

    function scrollHandler() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
            handleIntersection();
        }, 200);
    }

    document.addEventListener('scroll', function () {
        window.requestAnimationFrame(scrollHandler);
    });

    window.addEventListener('resize', function () {
        handleIntersection();
    });
});
