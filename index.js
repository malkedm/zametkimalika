document.addEventListener("DOMContentLoaded", function () {
    // Добавьте обработчик событий для всего документа
    document.addEventListener("scroll", function () {
        // Получите текущее положение прокрутки страницы
        var scrollPosition = window.scrollY;

        // Получите высоту шапки (если она фиксирована)
        var headerHeight = document.querySelector('header').offsetHeight;

        // Получите высоту каждой секции
        var section1Height = document.querySelector('.section-1').offsetHeight;
        // Добавьте остальные секции аналогичным образом

        // Получите высоту футера
        var footerHeight = document.querySelector('.footer').offsetHeight;

        // Определите, в какой секции находится положение прокрутки
        if (scrollPosition >= headerHeight && scrollPosition < headerHeight + section1Height) {
            console.log("Находитесь в секции 1");
        } else if (scrollPosition >= headerHeight + section1Height && scrollPosition < headerHeight + section1Height + section2Height) {
            console.log("Находитесь в секции 2");
        } else if (scrollPosition >= headerHeight + section1Height + section2Height && scrollPosition < headerHeight + section1Height + section2Height + section3Height) {
            console.log("Находитесь в секции 3");
        }
        // Добавьте аналогичные условия для остальных секций

        // Определите, находится ли положение прокрутки в футере
        if (scrollPosition >= headerHeight + section1Height + section2Height + section3Height + section4Height + section5Height + section6Height + section7Height + section8Height) {
            console.log("Находитесь в футере");
        }
    });
});
