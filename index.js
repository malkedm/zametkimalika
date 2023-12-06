document.addEventListener('DOMContentLoaded', function () {
    const headerLinks = document.querySelectorAll('header a');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateHeaderLinks() {
        const sections = document.querySelectorAll('main section, footer');
        sections.forEach((section, index) => {
            const link = headerLinks[index];
            if (isInViewport(section)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    document.addEventListener('scroll', updateHeaderLinks);
    document.addEventListener('resize', updateHeaderLinks);

    // Дополнительно можно добавить обработчик для события загрузки контента
    window.addEventListener('load', updateHeaderLinks);
});
