document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const header = document.querySelector('body header');
    const links = document.querySelectorAll('body header .right-container-header a');

    function handleIntersection(entries, observer) {
        const visibleSections = entries
            .filter((entry) => entry.isIntersecting && entry.intersectionRatio > 0.7)
            .map((entry) => entry.target.getAttribute('id'));

        if (visibleSections.length > 0) {
            const activeSection = visibleSections[0];
            console.log(`Активная секция: ${activeSection}`);
            const backgroundColor = window.getComputedStyle(document.getElementById(activeSection)).backgroundColor;
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
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.99,
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Добавим событие прокрутки для обработки изменений на мобильных устройствах
    let lastKnownScrollPosition = 0;
    let ticking = false;

    function handleScroll() {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleIntersection(sections.map((section) => ({ target: section })), observer);
                ticking = false;
            });

            ticking = true;
        }
    }

    document.addEventListener('scroll', handleScroll);
});
