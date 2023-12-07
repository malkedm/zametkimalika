document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main section");
  const footer = document.querySelector("footer");
  const header = document.querySelector("header");

  function setActiveSection() {
    const scrollPosition = window.scrollY + header.offsetHeight;

    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        header.style.background = section.style.background;
        break;
      }
    }

    const footerTop = footer.offsetTop;
    const footerBottom = footerTop + footer.offsetHeight;

    if (scrollPosition >= footerTop && scrollPosition < footerBottom) {
      header.style.background = footer.style.background;
    }
  }

  window.addEventListener("scroll", setActiveSection);
});
