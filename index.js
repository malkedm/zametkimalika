document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('main .main-container footer');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function highlightCurrentSection() {
        for (const section of sections) {
            if (isInViewport(section)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        }

        // Check if footer is in viewport
        if (isInViewport(footer)) {
            footer.classList.add('active');
        } else {
            footer.classList.remove('active');
        }
    }

    // Initial highlighting
    highlightCurrentSection();

    // Update on scroll
    window.addEventListener('scroll', highlightCurrentSection);
});
