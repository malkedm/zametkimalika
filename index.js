document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');

    // Функция для обновления фона header
    function updateHeaderBackground() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                header.style.background = section.style.background;
            }
        });

        // Проверка для футера
        const rectFooter = footer.getBoundingClientRect();
        if (rectFooter.top >= 0 && rectFooter.bottom <= window.innerHeight) {
            header.style.background = footer.style.background;
        }
    }

    // Вызываем функцию при загрузке страницы
    updateHeaderBackground();

    // Обновляем фон header при скролле
    document.addEventListener('scroll', function () {
        updateHeaderBackground();
    });
});
