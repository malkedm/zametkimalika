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

// Добавляем обработчик клика на кнопку с классом open-close-details
const openCloseDetailsButton = document.querySelector(".open-close-details");
const wordsOpenClose = document.querySelector(".words-open-close");

let isOpen = false;

openCloseDetailsButton.addEventListener("click", () => {
    // Получаем все элементы details с классом details-question
    const detailsList = document.querySelectorAll(".details-question");

    if (isOpen) {
        // Если все details открыты, то закрываем их
        detailsList.forEach(details => {
            details.removeAttribute("open");
        });

        // Возвращаем слово "открытыми" и делаем его зеленым
        wordsOpenClose.textContent = "открытыми";
        wordsOpenClose.style.color = "green";
    } else {
        // Если details закрыты, то открываем их
        detailsList.forEach(details => {
            details.setAttribute("open", true);
        });

        // Меняем слово на "закрытыми" и делаем его красным
        wordsOpenClose.textContent = "закрытыми";
        wordsOpenClose.style.color = "red";
    }

    // Инвертируем значение isOpen для следующего нажатия
    isOpen = !isOpen;
});

// ... (весь предыдущий код)

// Добавляем обработчик клика на элементы details с классом details-question
const detailsList = document.querySelectorAll(".details-question");
detailsList.forEach(details => {
    details.addEventListener("click", event => {
        // Проверяем, активно ли open-close-details
        if (isOpen) {
            event.preventDefault(); // Предотвращаем удаление значения open
        }
    });
});

// Добавляем обработчик клика на кнопку с классом open-close-details
openCloseDetailsButton.addEventListener("click", () => {
    // ... (остальной код без изменений)
});

// ... (весь предыдущий код)

// Добавляем обработчик клика на кнопку с классом open-close-details
openCloseDetailsButton.addEventListener("click", () => {
    // ... (остальной код без изменений)
});

// Добавляем обработчик клика на block-bottom-right-panel
const blockBottomRightPanel = document.querySelector(".block-bottom-right-panel");
blockBottomRightPanel.addEventListener("click", event => {
    const target = event.target;
    const isDetailsQuestion = target.closest(".details-question");
    const isButton = target.classList.contains("butt");

    // Проверяем, является ли элемент details-question или кнопкой butt
    if (!isOpen && !(isDetailsQuestion || isButton)) {
        // Если open-close-details неактивна и клик был на другом элементе, разрешаем удаление значения open
        const detailsList = document.querySelectorAll(".details-question");
        detailsList.forEach(details => {
            details.removeAttribute("open");
        });
    }
});