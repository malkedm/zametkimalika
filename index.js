document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const headerLinks = document.querySelectorAll('header .right-container-header a');
    const footerLink = document.querySelector('header .right-container-header .img-site-9');

    function setActiveLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                headerLinks.forEach((link) => link.classList.remove('active'));
                headerLinks[index].classList.add('active');
            }
        });

        // Check if the footer is in the viewport
        const footerTop = document.querySelector('footer').offsetTop;
        const footerBottom = footerTop + document.querySelector('footer').offsetHeight;

        if (scrollPosition >= footerTop && scrollPosition < footerBottom) {
            headerLinks.forEach((link) => link.classList.remove('active'));
            footerLink.classList.add('active');
        }
    }

    // Initial call to set active link on page load
    setActiveLink();

    // Event listener for scroll to dynamically update active link
    window.addEventListener('scroll', setActiveLink);
});
