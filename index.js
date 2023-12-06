document.addEventListener("scroll", function() {
  // Получаем текущую секцию, в которой мы находимся.
  var currentSection = document.querySelector(".main-container").scrollSnapTarget;

  // Получаем ссылки в header.
  var links = document.querySelectorAll("header .right-container-header .mini-img");

  // Циклом перебираем ссылки.
  for (var i = 0; i < links.length; i++) {
    // Если ссылка соответствует текущей секции, то устанавливаем ее фон на цвет green.
    if (links[i].classList.contains(currentSection)) {
      links[i].style.background = "green";
    } else {
      // В противном случае возвращаем исходный цвет.
      links[i].style.background = links[i].dataset.background;
    }
  }
});
