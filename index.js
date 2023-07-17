const sidebar = document.querySelector(".sidebar");
const burgerMenu = document.querySelector(".header");
const closeIcon = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

const sidebar2 = document.querySelector(".sidebar2");
const burgerMenu2 = document.querySelector(".header2");
const closeIcon2 = document.querySelector(".close2");
const overlay2 = document.querySelector(".overlay2");

let isSidebarVisible = false;
let isSidebar2Visible = false;

const toggleSidebarVisible = () => {
    isSidebarVisible = !isSidebarVisible;
    sidebar.style.transform = isSidebarVisible ? "translateX(0)" : "translateX(-140%)";
    overlay.classList.toggle("overlay-open", isSidebarVisible);
};

const toggleSidebar2Visible = () => {
    isSidebar2Visible = !isSidebar2Visible;
    sidebar2.style.transform = isSidebar2Visible ? "translateX(0)" : "translateX(140%)";
    overlay2.classList.toggle("overlay-open2", isSidebar2Visible);
};

burgerMenu.addEventListener("click", toggleSidebarVisible);
closeIcon.addEventListener("click", toggleSidebarVisible);
overlay.addEventListener("click", toggleSidebarVisible);

burgerMenu2.addEventListener("click", toggleSidebar2Visible);
closeIcon2.addEventListener("click", toggleSidebar2Visible);
overlay2.addEventListener("click", toggleSidebar2Visible);