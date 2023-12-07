document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".main-container section");
  const header = document.querySelector("header");

  const changeHeaderColor = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionClass = `section-${index + 1}`;
        header.style.background = getComputedStyle(document.body).getPropertyValue(`--back-${sectionClass}`);
      }
    });
  };

  // Обработка событий прокрутки и изменения цвета header
  window.addEventListener("scroll", changeHeaderColor);
  window.addEventListener("resize", changeHeaderColor);

  // Обработка событий клика по ссылкам в header
  const headerLinks = document.querySelectorAll("header a");
  headerLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetSectionId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - header.clientHeight,
          behavior: "smooth",
        });
      }
    });
  });
});
