document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const header = document.querySelector('body header');
    const links = document.querySelectorAll('body header .right-container-header a');
    const mainContainer = document.querySelector('main .main-container');

    // Добавляем содержимое первой секции в конец контейнера
    const firstSection = sections[0].cloneNode(true);
    mainContainer.appendChild(firstSection);

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio === 1.0) {
                const activeSection = entry.target.getAttribute('id');
                console.log(`Активная секция: ${activeSection}`);
                const backgroundColor = window.getComputedStyle(entry.target).backgroundColor;
                header.style.backgroundColor = backgroundColor;

                // Меняем цвет активной ссылки на зеленый, а у других возвращаем исходный цвет
                links.forEach((link) => {
                    const linkSection = link.getAttribute('href').substring(1);
                    if (linkSection === activeSection) {
                        link.style.backgroundColor = 'green';
                    } else {
                        link.style.backgroundColor = ''; // или установите исходный цвет
                    }
                });

                // Проверяем, если это последняя секция, прокручиваем вверх
                if (activeSection === 'section-9') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
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
