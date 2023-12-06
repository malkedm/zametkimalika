document.addEventListener('DOMContentLoaded', function () {
    // Слушаем событие прокрутки страницы
    window.addEventListener('scroll', function () {
        // Получаем все секции и футер
        const sections = document.querySelectorAll('section');
        const footer = document.querySelector('footer');

        // Получаем текущую позицию прокрутки
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Перебираем секции и определяем, в какой секции находится текущая позиция
        sections.forEach(function (section, index) {
            const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Удаляем класс active у всех секций
                sections.forEach(function (s) {
                    s.classList.remove('active');
                });

                // Добавляем класс active текущей секции
                section.classList.add('active');
            }
        });

        // Проверяем, если позиция находится в футере, то добавляем класс active
        const footerTop = footer.offsetTop - document.querySelector('header').offsetHeight;
        if (scrollPosition >= footerTop) {
            sections.forEach(function (s) {
                s.classList.remove('active');
            });
            footer.classList.add('active');
        }
    });
});
