document.addEventListener("DOMContentLoaded", function () {
  // Получаем все секции и footer
  const sections = document.querySelectorAll("main .main-container section");
  const footer = document.querySelector("main .main-container footer");

  // Обработчик события прокрутки
  function handleScroll() {
    // Получаем текущую позицию прокрутки
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Находим активную секцию
    let activeSection;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection = section;
      }
    });

    // Определяем цвет активной секции или footer
    const activeColor = activeSection
      ? window.getComputedStyle(activeSection).backgroundColor
      : window.getComputedStyle(footer).backgroundColor;

    // Устанавливаем цвет header
    const header = document.querySelector("body header");
    header.style.background = activeColor;
  }

  // Добавляем обработчик события прокрутки
  window.addEventListener("scroll", handleScroll);

  // Вызываем обработчик события прокрутки в начале
  handleScroll();
});
