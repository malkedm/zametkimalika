document.addEventListener("DOMContentLoaded", function () {
  // Получаем все ссылки в правом контейнере
  const links = document.querySelectorAll(".right-container-header .mini-img");

  // Обработчик события прокрутки
  document.addEventListener("scroll", function () {
    // Получаем текущее положение страницы
    const currentPosition = window.scrollY;

    // Обходим все секции и определяем, в какой секции находится страница
    document.querySelectorAll("main section").forEach(function (section, index) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      // Проверяем, находится ли текущее положение страницы в пределах текущей секции
      if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
        // Удаляем класс .a-active у всех ссылок
        links.forEach(function (link) {
          link.classList.remove("a-active");
        });

        // Добавляем класс .a-active к соответствующей ссылке
        links[index].classList.add("a-active");
      }
    });
  });
});
