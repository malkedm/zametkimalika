document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const header = document.querySelector('body header');
    const links = document.querySelectorAll('body header .right-container-header a');

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio === 1.0) {
                const activeSection = entry.target.getAttribute('id');
                console.log(`Активная секция: ${activeSection}`);
                const backgroundColor = window.getComputedStyle(entry.target).backgroundColor;
                header.style.backgroundColor = backgroundColor;

                links.forEach((link) => {
                    const linkSection = link.getAttribute('href').substring(1);
                    if (linkSection === activeSection) {
                        link.style.backgroundColor = 'green';
                    } else {
                        link.style.backgroundColor = '';
                    }
                });
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Добавляем обработчик события прокрутки для бесконечного скролла вниз
    window.addEventListener('scroll', function () {
        const lastSection = sections[sections.length - 1];
        const rect = lastSection.getBoundingClientRect();

        if (rect.bottom <= window.innerHeight) {
            // Перемещаем последнюю секцию вверх
            const firstSection = sections[0];
            firstSection.insertAdjacentElement('beforebegin', lastSection);
        }
    });
});
