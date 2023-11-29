function onScroll() {
    const fix = document.querySelector('.fixed');
    const rectFix = fix.getBoundingClientRect();
    const back = document.elementFromPoint(rectFix.x - 1, rectFix.y);
    const backClass = back.classList[1];

    const fixTop = fix.querySelector('.top');
    fixTop.style.background = getComputedStyle(back).backgroundColor;

    const fixBottom = fix.querySelector('.bottom');
    fixBottom.style.background = getComputedStyle(back).backgroundColor;
}

onScroll();
window.addEventListener('scroll', onScroll);