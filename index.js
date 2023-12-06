document.addEventListener("DOMContentLoaded", function () {
    // Получаем ссылки в header
    const headerLinks = document.querySelectorAll('header a');

    // Получаем секции
    const sections = document.querySelectorAll('main .main-container section');

    // Получаем header
    const header = document.querySelector('header');

    // Обработчик прокрутки
    document.addEventListener('scroll', function () {
        let currentSectionIndex = 0;
        
        // Находим текущую видимую секцию
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                currentSectionIndex = index;
            }
        });

        // Добавляем/удаляем классы активной секции
        sections.forEach((section, index) => {
            if (index === currentSectionIndex) {
                section.classList.add('active-section');
                header.style.backgroundColor = window.getComputedStyle(section).backgroundColor;
            } else {
                section.classList.remove('active-section');
            }
        });

        // Добавляем/удаляем класс активной ссылки в header
        headerLinks.forEach((link, index) => {
            if (index === currentSectionIndex) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    });

    // Обработчик прокрутки колесиком
    document.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
            // Прокрутка вниз
            scrollToSection(currentSectionIndex + 1);
        } else {
            // Прокрутка вверх
            scrollToSection(currentSectionIndex - 1);
        }
    });

    // Обработчик свайпа
    let startY = 0;
    document.addEventListener('touchstart', function (event) {
        startY = event.touches[0].clientY;
    });

    document.addEventListener('touchend', function (event) {
        const endY = event.changedTouches[0].clientY;
        const deltaY = startY - endY;

        if (deltaY > 0) {
            // Свайп вверх
            scrollToSection(currentSectionIndex + 1);
        } else {
            // Свайп вниз
            scrollToSection(currentSectionIndex - 1);
        }
    });

    // Функция для прокрутки к указанной секции
    function scrollToSection(index) {
        if (index < 0) {
            index = sections.length - 1; // Перемещение к последней секции при прокрутке вверх из первой
        } else if (index >= sections.length) {
            index = 0; // Перемещение к первой секции при прокрутке вниз из последней
        }

        sections[index].scrollIntoView({ behavior: 'smooth' });
    }
});
