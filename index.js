document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const header = document.querySelector('body header');

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio === 1.0) {
                const activeSection = entry.target.getAttribute('id');
                console.log(`Активная секция: ${activeSection}`);
                const backgroundColor = window.getComputedStyle(entry.target).backgroundColor;
                header.style.backgroundColor = backgroundColor;

                // Убираем активный класс у всех ссылок
                document.querySelectorAll('body header .mini-img').forEach(link => {
                    link.classList.remove('active');
                });

                // Добавляем активный класс только активной ссылке
                const activeLink = document.querySelector(`body header .img-site-${activeSection}`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
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
});
