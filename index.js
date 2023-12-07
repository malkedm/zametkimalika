document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');

    // Функция обратного вызова для Intersection Observer
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const activeSection = entry.target.getAttribute('id');
                console.log(`Активная секция: ${activeSection}`);
            }
        });
    }

    // Настройка Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // используем viewport как корневой элемент
        rootMargin: '0px',
        threshold: 0.5, // порог видимости - более 50%
    });

    // Регистрация каждой секции в Observer
    sections.forEach((section) => {
        observer.observe(section);
    });
});
