document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const header = document.querySelector('body header');
    const links = document.querySelectorAll('body header .right-container-header a');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
        );
    }

    function handleScroll() {
        let activeSection = null;

        sections.forEach((section) => {
            if (isElementInViewport(section)) {
                activeSection = section.id;
            }
        });

        if (activeSection) {
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

    document.addEventListener('scroll', handleScroll);

    // Запускаем handleScroll() при загрузке страницы, чтобы установить начальное состояние
    handleScroll();
});
