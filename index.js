document.addEventListener('DOMContentLoaded', function () {
  // Получаем все ссылки в контейнере header
  const headerLinks = document.querySelectorAll('header a');

  // Получаем все секции
  const sections = document.querySelectorAll('main .main-container section');

  // Функция для определения видимой секции
  function getVisibleSection() {
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        return section;
      }
    }
    return null;
  }

  // Функция для обновления активной ссылки в header
  function updateActiveLink() {
    const visibleSection = getVisibleSection();
    headerLinks.forEach(link => link.classList.remove('active'));

    if (visibleSection) {
      const correspondingLink = document.querySelector(`header a[href="#${visibleSection.id}"]`);
      if (correspondingLink) {
        correspondingLink.classList.add('active');

        // Меняем цвет header в соответствии с цветом активной секции
        const sectionColor = window.getComputedStyle(visibleSection).backgroundColor;
        document.querySelector('header').style.backgroundColor = sectionColor;
      }
    }
  }

  // Обработчик события прокрутки
  window.addEventListener('scroll', updateActiveLink);

  // Обработчик события свайпа колесика мыши
  window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
      // Свайп вниз
      window.scrollBy(0, window.innerHeight);
    } else {
      // Свайп вверх
      window.scrollBy(0, -window.innerHeight);
    }
    updateActiveLink();
  });

  // Обработчик события свайпа на сенсорных устройствах
  let touchStartY;
  window.addEventListener('touchstart', function (event) {
    touchStartY = event.touches[0].clientY;
  });

  window.addEventListener('touchend', function (event) {
    const touchEndY = event.changedTouches[0].clientY;
    const deltaY = touchEndY - touchStartY;

    if (deltaY > 0) {
      // Свайп вниз
      window.scrollBy(0, window.innerHeight);
    } else {
      // Свайп вверх
      window.scrollBy(0, -window.innerHeight);
    }
    updateActiveLink();
  });
});
