document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('main .main-container section, footer');
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - header.offsetHeight;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        header.style.background = getComputedStyle(section).background;
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
});
