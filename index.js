// Слушатель события scroll
window.addEventListener('scroll', function() {

  // Получаем текущую позицию прокрутки
  const scrollY = window.scrollY;

  // Получаем все элементы секции
  const sections = document.querySelectorAll('.section');

  // Цикл по секциям
  for (const section of sections) {

    // Получаем высоту секции
    const sectionHeight = section.clientHeight;

    // Если текущая позиция прокрутки находится внутри секции
    if (scrollY >= section.offsetTop && scrollY <= section.offsetTop + sectionHeight) {

      // Изменяем цвет header на цвет секции
      document.querySelector('header').style.backgroundColor = section.style.backgroundColor;
    }
  }

  // Получаем элемент footer
  const footer = document.querySelector('footer');

  // Если текущая позиция прокрутки находится внутри footer
  if (scrollY >= footer.offsetTop && scrollY <= footer.offsetTop + footer.clientHeight) {

    // Изменяем цвет header на цвет footer
    document.querySelector('header').style.backgroundColor = footer.style.backgroundColor;
  }
});
