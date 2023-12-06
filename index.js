document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("main section");
    const footer = document.querySelector("footer");
    const miniImgs = document.querySelectorAll(".right-container-header .mini-img");

    function setActiveSection() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                miniImgs.forEach((img) => img.classList.remove("a-active"));
                miniImgs[index].classList.add("a-active");
            }
        });

        // Check if in the footer
        const footerTop = footer.offsetTop;
        if (scrollPosition >= footerTop) {
            miniImgs.forEach((img) => img.classList.remove("a-active"));
            miniImgs[8].classList.add("a-active"); // Assuming the last mini-img corresponds to the footer
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", setActiveSection);

    // Trigger the setActiveSection function on page load
    setActiveSection();
});
