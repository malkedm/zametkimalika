document.addEventListener('DOMContentLoaded', function () {
    // Получаем все секции
    const sections = document.querySelectorAll('main .main-container section');

    // Функция для определения видимой секции
    function getVisibleSection() {
        let visibleSection = null;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible = (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );

            if (isVisible) {
                visibleSection = section;
            }
        });

        return visibleSection;
    }

    // Обработчик события прокрутки страницы
    window.addEventListener('scroll', function () {
        const currentSection = getVisibleSection();

        // Добавьте свой код для обработки текущей секции
        if (currentSection) {
            console.log('Текущая секция:', currentSection.id);
        }
    });
});
