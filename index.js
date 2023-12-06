document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main .main-container section');
    const footer = document.querySelector('main .main-container footer');
    const miniImgs = document.querySelectorAll('.right-container-header .mini-img');

    window.addEventListener('scroll', function () {
        let currentSection = null;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= 0 && rect.bottom > 0) {
                currentSection = index + 1;
            }
        });

        if (currentSection !== null) {
            miniImgs.forEach((img, index) => {
                img.classList.remove('a-active');
            });

            const activeImg = document.querySelector(`.right-container-header .img-site-${currentSection}`);
            if (activeImg) {
                activeImg.classList.add('a-active');
            }
        } else {
            miniImgs.forEach((img) => {
                img.classList.remove('a-active');
            });
        }
    });

    window.addEventListener('scroll', function () {
        const rect = footer.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom > 0) {
            miniImgs.forEach((img) => {
                img.classList.remove('a-active');
            });

            const activeImg = document.querySelector('.right-container-header .img-site-9');
            if (activeImg) {
                activeImg.classList.add('a-active');
            }
        }
    });
});
