document.addEventListener("scroll", function() {
  // Получаем текущий видимый элемент
  const currentElement = document.querySelector(".main-container > section.active");

  // Получаем цвет текущего видимого элемента
  const currentColor = currentElement.style.backgroundColor;

  // Получаем цвет header
  const headerColor = document.querySelector("header").style.backgroundColor;

  // Если цвет header отличается от цвета текущего видимого элемента, то меняем его
  if (headerColor !== currentColor) {
    document.querySelector("header").style.backgroundColor = currentColor;
  }
});
