document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');

    function determineActiveSection() {
        let activeSection = null;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                activeSection = index + 1;
            }
        });

        return activeSection;
    }

    function updateActiveSection() {
        const activeSection = determineActiveSection();
        if (activeSection !== null) {
            console.log(`Активная секция: section-${activeSection}`);
        }
    }

    document.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);

    updateActiveSection();
});
