

const sidebar = document.querySelector(".sidebar");
const burgerMenu = document.querySelector(".header");
const closeIcon = document.querySelector(".close__item");
const overlay = document.querySelector(".overlay");

const sidebar2 = document.querySelector(".sidebar2");
const burgerMenu2 = document.querySelector(".header2");
const closeIcon2 = document.querySelector(".close__item2");
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

document.querySelector(".btn-start-training").addEventListener("click", function () {
    document.querySelector(".modal").classList.add("open")
})

document.querySelector(".btn-close-modal").addEventListener("click", function () {
    document.querySelector(".modal").classList.remove("open")
})

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


// Начало кода...
// Ищем все кнопки button(отвечающие за открытие/закрытие всех элементов details) и сами элементы details
const openCloseDetailsButtonLeft = document.querySelectorAll("[data-button-open-close-left-panel]"); // Поиск всех кнопок левой панели
const openCloseDetailsButtonRight = document.querySelectorAll("[data-button-open-close-right-panel]"); // Поиск всех кнопок правой панели
const openCloseDetailsSpheres = document.querySelectorAll(".details-spheres"); // Поиск всех details левой панели(поиск всех элементов учебных сфер)
const openCloseDetailsQuestion = document.querySelectorAll(".details-question"); // Поиск всех details правой панели(поиск всех элементов вопрос - ответ)
const strelkaVnizOpenCloseRightPanel = document.querySelector(".element-open-close-right-panel");
const strelkaVverhOpenCloseRightPanel = document.querySelector(".element2-open-close-right-panel");

const strelkaVnizOpenCloseLeftPanel = document.querySelector(".element-open-close-left-panel");
const strelkaVverhOpenCloseLeftPanel = document.querySelector(".element2-open-close-left-panel");



// Делаем полноценные функции для левой панели
/* let isOpenDetailsLeftPanel = false;   !!!!!!!!!!! ВНИМАНИЕ! НЕ СЛЕДУЕТ ИСПОЛЬЗОВАТЬ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ВНЕ ФУНКЦИЙ,
ИНАЧЕ БУДУТ КОНФЛИКТЫ ДВУХ ФУНКЦИЙ(а точнее двух кнопок в функциях.
Данную тему надо более подробно изучить.
Но скорее всего, это происходит из за того, что при создании глобальной переменной и указании состояния,
она применяется сразу ко всему коду, который находится снизу.) */



openCloseDetailsButtonLeft.forEach(function (left) {
    // Делаем полноценные функции для левой панели
    let isOpen = false; // комментарий выше относится к данной переменной.
    left.addEventListener("click", function () {
        openCloseDetailsSpheres.forEach(openCloseDetailsSpheres => {
            if (isOpen) {
                openCloseDetailsSpheres.removeAttribute("open");
            } else {
                openCloseDetailsSpheres.setAttribute("open", true)
            }
        });


        isOpen = !isOpen;

        if (isOpen) {
            strelkaVnizOpenCloseLeftPanel.style.display = "none";
            strelkaVverhOpenCloseLeftPanel.style.display = "block";
        } else {
            strelkaVverhOpenCloseLeftPanel.style.display = "none";
            strelkaVnizOpenCloseLeftPanel.style.display = "block";
        }
    });

    // openCloseDetailsButtonLeft.forEach(function (left) {
    //     let isOpen = false;
    //     left.addEventListener("click", function () {
    //         openCloseDetailsSpheres.forEach(openCloseDetailsSpheres => {
    //             if (isOpen) {
    //                 openCloseDetailsSpheres.removeAttribute("open");
    //             } else {
    //                 openCloseDetailsSpheres.setAttribute("open", true)
    //             }
    //         });


    //         isOpen = !isOpen;

    //         if (isOpen) {
    //             zakladkaOpenCloseLeftPanel.classList.add("opened-details-left-panel");
    //             zakladkaOpenCloseLeftPanel.classList.remove("closed-details-left-panel");
    //         } else {
    //             zakladkaOpenCloseLeftPanel.classList.add("closed-details-left-panel");
    //             zakladkaOpenCloseLeftPanel.classList.remove("opened-details-left-panel");
    //         }
    //     });

    //     left.addEventListener("mouseenter", function () {
    //         if (!isOpen) {
    //             zakladkaOpenCloseLeftPanel.classList.add("closed-details-left-panel");
    //             zakladkaOpenCloseLeftPanel.classList.remove("opened-details-left-panel");
    //         }
    //     });

    // Добавляем функции для закрытия открытых элементов при нажатии на любую область блока и запрещаем, если кнопка открытия/закрытия активна.
    const blockBottomLeftPanel = document.querySelector(".content-top-left-panel");
    blockBottomLeftPanel.addEventListener("click", event => {
        const target = event.target;
        const isDetailsSpheres = target.closest(".details-spheres");

        if (!isOpen && !isDetailsSpheres) {
            // Если open-close-details неактивна и клик был на другом элементе, разрешаем удаление значения open
            const detailsList = document.querySelectorAll(".details-spheres");
            detailsList.forEach(details => {
                details.removeAttribute("open");
            });
        }
    });

    // Добавляем обработчик клика на элементы details с классом details-question
    const detailsList = document.querySelectorAll(".details-spheres");
    detailsList.forEach(details => {
        details.addEventListener("click", event => {
            // Проверяем, активно ли open-close-details
            if (isOpen) {
                event.preventDefault(); // Предотвращаем удаление значения open
            }
        });
    });

    const summaryList = document.querySelectorAll("img");
    summaryList.forEach(img => {
        img.addEventListener("click", event => {
            event.stopPropagation();
        });
    });
});


// Делаем полноценные функции для правой панели
/* let isOpenDetailsRightPanel = false;   !!!!!!!!!!! ВНИМАНИЕ! НЕ СЛЕДУЕТ ИСПОЛЬЗОВАТЬ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ВНЕ ФУНКЦИЙ,
ИНАЧЕ БУДУТ КОНФЛИКТЫ ДВУХ ФУНКЦИЙ(а точнее двух кнопок в функциях.
Данную тему надо более подробно изучить.
Но скорее всего, это происходит из за того, что при создании глобальной переменной и указании состояния,
она применяется сразу ко всему коду, который находится снизу.) */

openCloseDetailsButtonRight.forEach(function (right) {
    // Делаем полноценные функции для правой панели

    let isOpen = false; // комментарий выше относится к данной переменной.
    right.addEventListener("click", function () {
        openCloseDetailsQuestion.forEach(openCloseDetailsQuestion => {
            if (isOpen) {
                openCloseDetailsQuestion.removeAttribute("open");
            } else {
                openCloseDetailsQuestion.setAttribute("open", true);
            }
        });

        isOpen = !isOpen;

        if (isOpen) {
            strelkaVnizOpenCloseRightPanel.style.display = "none";
            strelkaVverhOpenCloseRightPanel.style.display = "block";
        } else {
            strelkaVverhOpenCloseRightPanel.style.display = "none";
            strelkaVnizOpenCloseRightPanel.style.display = "block";
        }
    });

    // Добавляем функции для закрытия открытых элементов при нажатии на любую область блока и запрещаем, если кнопка открытия/закрытия активна.
    const blockBottomRightPanel = document.querySelector(".block-bottom-right-panel");
    blockBottomRightPanel.addEventListener("click", event => {
        const target = event.target;
        const isDetailsQuestion = target.closest(".details-question");
        const isButton = target.classList.contains("butt");

        if (!isOpen && !(isDetailsQuestion || isButton)) {
            // Если open-close-details неактивна и клик был на другом элементе, разрешаем удаление значения open
            const detailsList = document.querySelectorAll(".details-question");
            detailsList.forEach(details => {
                details.removeAttribute("open");
            });
        }
    });

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
});