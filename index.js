document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('#footer-9');

    window.addEventListener('scroll', function () {
        let currentSection = null;

        // Определение текущей видимой секции
        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                currentSection = section;
                break;
            }
        }

        // Установка цвета фона в зависимости от текущей секции или футера
        const backgroundColor = currentSection ? getComputedStyle(currentSection).backgroundColor : getComputedStyle(footer).backgroundColor;
        header.style.background = backgroundColor;
    });
});
