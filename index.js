document.addEventListener('DOMContentLoaded', function () {
    // Получаем все секции
    const sections = document.querySelectorAll('main .main-container section');

    // Функция для определения активной секции
    function determineActiveSection() {
        let activeSection = null;

        // Перебираем все секции и проверяем, какая из них находится в видимой области
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                activeSection = index + 1;
            }
        });

        return activeSection;
    }

    // Функция для обновления активной секции и вывода в консоль
    function updateActiveSection() {
        const activeSection = determineActiveSection();
        if (activeSection !== null) {
            console.log(`Активная секция: section-${activeSection}`);
        }
    }

    // Добавляем событие прокрутки для отслеживания изменений
    document.addEventListener('scroll', updateActiveSection);

    // Вызываем функцию для первоначальной установки активной секции
    updateActiveSection();
});
