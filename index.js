document.addEventListener('DOMContentLoaded', function () {
    // Отслеживаем скролл
    window.addEventListener('scroll', function () {
        // Получаем текущее положение скролла
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Получаем все секции
        var sections = document.querySelectorAll('.main-container section');

        // Перебираем секции и определяем текущую
        var currentSection = null;
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
            var sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section;
            }
        });

        // Если текущая секция найдена
        if (currentSection) {
            // Удаляем класс 'active' у всех ссылок
            document.querySelectorAll('.right-container-header a').forEach(function (link) {
                link.classList.remove('active');
            });

            // Добавляем класс 'active' соответствующей ссылке
            var linkClass = currentSection.classList[0];
            document.querySelector('.' + linkClass).classList.add('active');
        }
    });
});
