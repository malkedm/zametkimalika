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

// Создаем массив для хранения закрепленных элементов
const pinnedElements = [];

// Добавляем обработчик клика на кнопку с emoji &#x1F4CC;
const buttons = document.querySelectorAll(".header-summary-brp button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const parentSummary = button.closest("summary");
        const parentDetails = button.closest("details");
        const parentList = parentDetails.parentElement;

        // Проверяем, является ли элемент summary закрепленным
        const isPinned = pinnedElements.includes(parentDetails);

        if (isPinned) {
            // Если элемент уже закреплен, то удаляем его из списка закрепленных
            const index = pinnedElements.indexOf(parentDetails);
            if (index > -1) {
                pinnedElements.splice(index, 1);
            }
            button.classList.remove("active");
        } else {
            // Если элемент не закреплен, то добавляем его в начало списка закрепленных
            pinnedElements.unshift(parentDetails);
            button.classList.add("active");
        }

        // Перемещаем закрепленные элементы в нужное место в основном списке
        parentList.prepend(...pinnedElements);
    });
});



const openCloseDetailsButton = document.querySelectorAll("[data-button]");
const openCloseDetailsSpheres = document.querySelectorAll(".details-spheres");
const openCloseDetailsQuestion = document.querySelectorAll(".details-question");
// const wordsButtonOpenClose = document.querySelectorAll(".words-button-open-close");
// const wordsOpenCloseLeftPanel = document.querySelector(".words-open-close-left-panel");

let isOpenDetailsLeftPanel = false;

openCloseDetailsButton.forEach(function (left) {
    left.addEventListener("click", function () {
        openCloseDetailsSpheres.forEach(details => {
            if (isOpenDetailsLeftPanel) {
                details.removeAttribute("open");
            } else {
                details.setAttribute("open", true)
            }
        });

        isOpenDetailsLeftPanel = !isOpenDetailsLeftPanel;


        // Вот здесь меняем текст кнопки в зависимости от isOpenDetailsLeftPanel
        if (isOpenDetailsLeftPanel) {
            left.innerHTML = "&#9660"; // "открыто"
            left.style.color = "green"
        } else {
            left.innerHTML = "&#9658"; // "закрыто"
            left.style.color = "red"
        }
    });

});


openCloseDetailsButton.forEach(function (right) {
    right.addEventListener("click", function () {
        openCloseDetailsQuestion.forEach(openCloseDetailsQuestion => openCloseDetailsQuestion.open = !openCloseDetailsQuestion.open);
    });
});