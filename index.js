document.addEventListener('DOMContentLoaded', function () {
    const headerLinks = document.querySelectorAll('header a');
    const sections = document.querySelectorAll('main section');
    const footerLink = document.querySelector('footer a');

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

        // Check if in the footer
        const footerTop = document.getElementById('footer-9').offsetTop;
        if (scrollPosition >= footerTop) {
            headerLinks.forEach((link) => link.classList.remove('active'));
            footerLink.classList.add('active');
        }
    }

    // Set active link on page load
    setActiveLink();

    // Set active link on scroll
    window.addEventListener('scroll', setActiveLink);
});
