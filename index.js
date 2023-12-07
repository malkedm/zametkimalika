document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main .main-container section");
    const header = document.querySelector("body header");

    function setActiveSection() {
        let currentScroll = window.scrollY + header.clientHeight;
        let activeSection = Array.from(sections).findIndex((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;
            return currentScroll >= sectionTop && currentScroll < sectionBottom;
        });

        if (activeSection !== -1) {
            updateHeaderColor(activeSection + 1);
        }
    }

    function updateHeaderColor(sectionNumber) {
        header.style.background = getComputedStyle(document.querySelector(`.section-${sectionNumber}`)).backgroundColor;
    }

    window.addEventListener("scroll", setActiveSection);
    setActiveSection(); // Set initial active section color
});
