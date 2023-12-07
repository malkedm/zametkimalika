document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');
    const header = document.querySelector('body header');

    // Функция для обработки событий при прокрутке страницы
    function handleScroll() {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            // Проверка, находится ли текущая секция в видимой области
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Устанавливаем цвет header в соответствии с цветом текущей секции
                const sectionColor = window.getComputedStyle(section).backgroundColor;
                header.style.background = sectionColor;
            }
        });
    }

    // Добавляем обработчик событий прокрутки страницы
    window.addEventListener('scroll', handleScroll);

    // Вызываем обработчик событий при загрузке страницы, чтобы установить начальный цвет header
    handleScroll();
});
