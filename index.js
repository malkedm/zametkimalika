// Получаем кнопку и детали
const button1 = document.querySelector('.button1');
const details1 = document.querySelector('.details1');

// Добавляем обработчик события для button1
button1.addEventListener('click', function() {
  // Проверяем, есть ли атрибут "open" у details1
  if (details1.hasAttribute('open')) {
    // Если есть, удаляем его
    details1.removeAttribute('open');
  } else {
    // Если нет, добавляем его
    details1.setAttribute('open', '');
  }
});
