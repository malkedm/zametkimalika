document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main .main-container section");
  const footer = document.querySelector("#footer-9");
  const header = document.querySelector("body header");

  function setActiveSection() {
    let activeSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        activeSection = section;
      }
    });

    if (footer.getBoundingClientRect().top <= window.innerHeight / 2) {
      activeSection = footer;
    }

    if (activeSection) {
      const backgroundColor = window.getComputedStyle(activeSection).backgroundColor;
      header.style.background = backgroundColor;
    }
  }

  // Вызываем setActiveSection при загрузке страницы и при скролле
  window.addEventListener("scroll", setActiveSection);
  window.addEventListener("load", setActiveSection);
});
