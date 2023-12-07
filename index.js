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

    function scrollToNextSection() {
        const currentSectionIndex = Array.from(sections).findIndex((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        });

        if (currentSectionIndex !== -1 && currentSectionIndex < sections.length - 1) {
            sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
        } else {
            // Если достигнут конец страницы, прокручиваем к первой секции
            sections[0].scrollIntoView({ behavior: 'smooth' });
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

    window.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            scrollToNextSection();
        }
    });

    let touchStartY = 0;
    window.addEventListener('touchstart', function (event) {
        touchStartY = event.touches[0].clientY;
    });

    window.addEventListener('touchend', function (event) {
        const touchEndY = event.changedTouches[0].clientY;
        if (touchEndY > touchStartY) {
            scrollToNextSection();
        }
    });
});