const sidebar = document.querySelector(".sidebar");
const burgerMenu = document.querySelector(".header");
const closeIcon = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

const sidebar2 = document.querySelector(".sidebar2");
const burgerMenu2 = document.querySelector(".header2");
const closeIcon2 = document.querySelector(".close2");
const overlay2 = document.querySelector(".overlay2");

const toggleClass = (element, currentClass) => {
    element.classList.toggle(currentClass);
};

const toggleSidebarVisible = () => {
    toggleClass(sidebar, "sidebar-open");
    toggleClass(overlay, "overlay-open");
};

const toggleSidebar2Visible = () => {
    toggleClass(sidebar2, "sidebar-open2");
    toggleClass(overlay2, "overlay-open2");
};

burgerMenu.addEventListener("click", toggleSidebarVisible);
closeIcon.addEventListener("click", toggleSidebarVisible);
overlay.addEventListener("click", toggleSidebarVisible);

burgerMenu2.addEventListener("click", toggleSidebar2Visible);
closeIcon2.addEventListener("click", toggleSidebar2Visible);
overlay2.addEventListener("click", toggleSidebar2Visible);