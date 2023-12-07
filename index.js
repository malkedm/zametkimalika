document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const header = document.querySelector('body header');
    const links = document.querySelectorAll('body header .right-container-header a');

    function handleIntersection(entries, observer) {
        const visibleSections = entries
            .filter((entry) => entry.isIntersecting && entry.intersectionRatio === 1.0)
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
        threshold: 1.0,
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Добавим событие прокрутки для обработки изменений на мобильных устройствах
    document.addEventListener('scroll', () => {
        handleIntersection(sections.map((section) => ({ target: section })), observer);
    });
});
