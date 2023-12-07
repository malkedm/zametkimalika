// Получаем все элементы header
const headers = document.querySelectorAll("header");

// Получаем все элементы section и footer
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");

// Создаем функцию, которая будет менять цвет header
function changeHeaderColor(header, color) {
  header.style.backgroundColor = color;
}

// Проходимся по всем элементам header
headers.forEach((header) => {
  // Получаем текущий элемент section или footer
  const currentSection = document.querySelector("#" + header.dataset.section);
  const currentFooter = document.querySelector("#" + header.dataset.footer);

  // Если текущий элемент section или footer существует, то меняем цвет header
  if (currentSection) {
    changeHeaderColor(header, currentSection.style.backgroundColor);
  } else if (currentFooter) {
    changeHeaderColor(header, currentFooter.style.backgroundColor);
  }
});
