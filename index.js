document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main .main-container section");
    const header = document.querySelector("body header");
    const footer = document.querySelector("body footer");

    const updateHeaderColor = () => {
        sections.forEach((section) => {
            const sectionRect = section.getBoundingClientRect();
            const sectionTop = sectionRect.top;
            const sectionBottom = sectionRect.bottom;

            if (sectionTop < window.innerHeight / 2 && sectionBottom > window.innerHeight / 2) {
                const sectionColor = window.getComputedStyle(section).backgroundColor;
                header.style.backgroundColor = sectionColor;
                footer.style.backgroundColor = sectionColor;
            }
        });
    };

    // Call the function initially
    updateHeaderColor();

    // Attach event listener for scroll to update header color
    window.addEventListener("scroll", updateHeaderColor);
});
