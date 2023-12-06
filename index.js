document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');
    const links = document.querySelectorAll('header a');

    function setActiveLink() {
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 0 && rect.bottom > 0;
        });

        links.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1);
            const correspondingSection = document.getElementById(sectionId);

            if (correspondingSection === currentSection) {
                link.classList.add('active');
                link.style.background = 'green';
            } else {
                link.classList.remove('active');
                // Вернуть оригинальный цвет (может потребоваться изменить)
                link.style.background = '';
            }
        });
    }

    // Вызывать функцию при прокрутке страницы
    document.addEventListener('scroll', setActiveLink);
    
    // Вызывать функцию также при загрузке страницы
    setActiveLink();
});
