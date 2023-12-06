// Получаем все ссылки с классом .img-site-1 до .img-site-9
const links = document.querySelectorAll('.img-site-1, .img-site-2, .img-site-3, .img-site-4, .img-site-5, .img-site-6, .img-site-7, .img-site-8, .img-site-9');

// Функция для проверки, находится ли элемент в видимой области окна
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обновления цвета фона ссылок
function updateLinkBackground() {
    links.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1); // Получаем id секции из href
        const section = document.getElementById(sectionId);

        // Проверяем, находится ли секция в видимой области
        if (isInViewport(section)) {
            link.style.background = 'green';
        } else {
            link.style.background = ''; // Сбрасываем цвет, если секция не видна
        }
    });
}

// Слушаем событие прокрутки окна и обновляем цвет фона ссылок
window.addEventListener('scroll', updateLinkBackground);

// Вызываем функцию при загрузке страницы для установки начального цвета
updateLinkBackground();
