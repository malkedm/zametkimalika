document.addEventListener("DOMContentLoaded", function () {
    const headerLinks = document.querySelectorAll('header a');
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('main .main-container footer');

    function setActiveLink() {
        const currentScroll = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                headerLinks.forEach(link => link.classList.remove('active'));
                headerLinks[index].classList.add('active');
            }
        });

        const footerTop = footer.offsetTop;
        const footerBottom = footerTop + footer.offsetHeight;

        if (currentScroll >= footerTop && currentScroll < footerBottom) {
            headerLinks.forEach(link => link.classList.remove('active'));
            headerLinks[headerLinks.length - 1].classList.add('active');
        }
    }

    document.addEventListener('scroll', setActiveLink);
});
