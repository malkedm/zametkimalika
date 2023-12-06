document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main .main-container section");
    const headerLinks = document.querySelectorAll("header a");
    const header = document.querySelector("body header");
    const footer = document.querySelector("footer");

    let currentSection = 1;

    // Функция обновления активных ссылок и цвета header
    function updateActiveLinksAndHeaderColor() {
        headerLinks.forEach((link, index) => {
            if (index + 1 === currentSection) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        header.style.backgroundColor = getComputedStyle(sections[currentSection - 1]).backgroundColor;
    }

    // Функция для бесконечной прокрутки вверх/вниз
    function scrollToSection(targetSection) {
        if (targetSection < 1) {
            currentSection = sections.length;
        } else if (targetSection > sections.length) {
            currentSection = 1;
        } else {
            currentSection = targetSection;
        }

        sections[currentSection - 1].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        updateActiveLinksAndHeaderColor();
    }

    // Обработчик прокрутки колесиком/свайпом/скроллбаром
    document.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            scrollToSection(currentSection + 1);
        } else {
            scrollToSection(currentSection - 1);
        }
    });

    // Обработчик нажатия на ссылки в header
    headerLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToSection(index + 1);
        });
    });

    // Обработчик прокрутки при помощи скроллбара
    document.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop - $height-header;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = i + 1;
                updateActiveLinksAndHeaderColor();
                break;
            }
        }
    });

    // Обработчик свайпа
    let startY;
    let endY;

    document.addEventListener("touchstart", function (event) {
        startY = event.touches[0].clientY;
    });

    document.addEventListener("touchend", function (event) {
        endY = event.changedTouches[0].clientY;
        const deltaY = endY - startY;

        if (deltaY > 50) {
            scrollToSection(currentSection - 1);
        } else if (deltaY < -50) {
            scrollToSection(currentSection + 1);
        }
    });

    // Обработчик для бесконечной прокрутки при достижении конца или начала
    document.addEventListener("wheel", function (event) {
        const isScrollingDown = event.deltaY > 0;
        const isScrollingUp = event.deltaY < 0;

        if (isScrollingDown && currentSection === sections.length) {
            scrollToSection(1);
        } else if (isScrollingUp && currentSection === 1) {
            scrollToSection(sections.length);
        }
    });
});
