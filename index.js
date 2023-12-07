document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main .main-container section");
  const header = document.querySelector("body header");
  const footer = document.querySelector("main .main-container footer");

  function setActiveSection() {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        header.style.background = section.style.background;
        footer.style.background = section.style.background;
      }
    });
  }

  window.addEventListener("scroll", setActiveSection);
  setActiveSection(); // Set initial active section on page load
});
