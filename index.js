document.addEventListener('DOMContentLoaded', function () {
    // Получаем ссылки на все секции и футер
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('main .main-container footer');

    // Функция для определения текущей секции
    function determineCurrentSection() {
        const currentPosition = window.scrollY;

        // Проверяем, в какой секции находится положение скролла
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
                console.log(`You are in section ${index + 1}`);
                // Добавьте здесь свой код для дополнительных действий при нахождении в секции
            }
        });

        // Проверяем, находится ли положение скролла в футере
        const footerTop = footer.offsetTop;
        if (currentPosition >= footerTop) {
            console.log('You are in the footer');
            // Добавьте здесь свой код для дополнительных действий при нахождении в футере
        }
    }

    // Добавляем обработчик события скролла
    document.addEventListener('scroll', determineCurrentSection);

    // Вызываем функцию при загрузке страницы для определения начальной секции
    determineCurrentSection();
});
