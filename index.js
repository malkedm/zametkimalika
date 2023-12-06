document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const headerLinks = document.querySelectorAll('header a');
    const header = document.querySelector('body header');
    const footer = document.querySelector('footer');

    let currentSectionIndex = 0;

    // Функция для обновления активных кнопок в header
    function updateHeaderLinks() {
        headerLinks.forEach((link, index) => {
            link.classList.toggle('active', index === currentSectionIndex);
        });
    }

    // Функция для обновления цвета header
    function updateHeaderColor() {
        const currentSection = sections[currentSectionIndex];
        const backgroundColor = window.getComputedStyle(currentSection).backgroundColor;
        header.style.backgroundColor = backgroundColor;
    }

    // Функция для обработки события прокрутки
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const sectionTops = Array.from(sections).map(section => section.offsetTop);

        for (let i = 0; i < sectionTops.length; i++) {
            if (scrollPosition >= sectionTops[i] && scrollPosition < sectionTops[i + 1]) {
                currentSectionIndex = i;
                break;
            }
        }

        updateHeaderLinks();
        updateHeaderColor();
    }

    // Функция для обработки события свайпа/скролла
    function handleSwipe(event) {
        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            currentSectionIndex--;
        } else if (event.deltaY < 0 && currentSectionIndex === 0) {
            currentSectionIndex = sections.length - 1;
        } else if (event.deltaY > 0 && currentSectionIndex === sections.length - 1) {
            currentSectionIndex = 0;
        }

        updateHeaderLinks();
        updateHeaderColor();
    }

    // Обработчики событий
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleSwipe);
    window.addEventListener('touchmove', handleSwipe);
});
