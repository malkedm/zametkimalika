document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio === 1.0) {
                const activeSection = entry.target.getAttribute('id');
                console.log(`Активная секция: ${activeSection}`);
            }
        });
    }

    function moveToFirstSection() {
        const firstSection = document.querySelector('#section-1');
        if (firstSection) {
            firstSection.scrollIntoView({ behavior: 'smooth' });
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

    // Добавим обработчик для бесконечного скролла
    window.addEventListener('scroll', function () {
        const lastSection = sections[sections.length - 1];
        const lastSectionRect = lastSection.getBoundingClientRect();
        // Если последняя секция видима и прокрутка идет вниз, переместим в первую секцию
        if (lastSectionRect.top <= window.innerHeight && lastSectionRect.bottom >= window.innerHeight) {
            moveToFirstSection();
        }
    });
});
