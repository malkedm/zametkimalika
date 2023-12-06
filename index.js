document.addEventListener("DOMContentLoaded", function () {
    // Получаем все ссылки с классом .img-site-1 - .img-site-9
    const imgSiteLinks = document.querySelectorAll('.right-container-header .mini-img');

    // Функция для определения, находится ли элемент в видимой области экрана
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Функция для обновления стилей ссылок в зависимости от текущей секции (footer)
    function updateLinkStyles() {
        imgSiteLinks.forEach((link, index) => {
            const section = document.querySelector(`.section-${index + 1}`);
            if (isInViewport(section)) {
                link.style.background = 'green';
            } else {
                link.style.background = ''; // Сбрасываем стиль, если не в секции
            }
        });
    }

    // Слушаем событие прокрутки страницы и обновляем стили
    window.addEventListener('scroll', updateLinkStyles);

    // Также вызываем функцию при загрузке страницы
    updateLinkStyles();
});
