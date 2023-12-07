document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.main-container section');
    const header = document.querySelector('header');

    // Функция для обновления цвета header в зависимости от активной секции
    function updateHeaderColor() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                header.style.backgroundColor = getComputedStyle(section).backgroundColor;
            }
        });
    }

    // Обновляем цвет header при загрузке страницы
    updateHeaderColor();

    // Обновляем цвет header при прокрутке
    window.addEventListener('scroll', updateHeaderColor);

    // Обработчик события для каждой ссылки в header
    document.querySelectorAll('header a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Получаем id секции из атрибута href
            const sectionId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(sectionId);

            // Прокручиваем до выбранной секции
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
