document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("main section");
    const footer = document.querySelector("#footer-9");
    const headerLinks = document.querySelectorAll(".right-container-header .mini-img");

    // Функция для определения видимости элемента на экране
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Функция для обновления цвета фона в зависимости от видимой секции
    function updateBackgroundColor() {
        sections.forEach((section, index) => {
            if (isElementInViewport(section) || isElementInViewport(footer)) {
                headerLinks[index].classList.add("active");
            } else {
                headerLinks[index].classList.remove("active");
            }
        });
    }

    // Слушатель события прокрутки
    document.addEventListener("scroll", updateBackgroundColor);

    // Слушатель события изменения размеров окна
    window.addEventListener("resize", updateBackgroundColor);
});
