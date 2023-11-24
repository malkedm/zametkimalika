// Функция для добавления класса "open" к элементам с указанными классами
function addOpen(classNames) {
    classNames.forEach(function (className) {
        const elements = document.querySelectorAll("." + className);
        elements.forEach(function (element) {
            element.classList.add("open");
        });
    });
}

function removeOpen(classNames) {
    classNames.forEach(function (className) {
        const elements = document.querySelectorAll("." + className);
        elements.forEach(function (element) {
            element.classList.remove("open");
        });
    });
}

// Найдите кнопку с нужным классом
const burger = document.querySelector(".burger");
burger.addEventListener("click", function () {
    // Вызовите функцию addOpen с массивом классов, которым нужно добавить класс "open"
    addOpen(["sidebar", "overlay"]);
});

const buttonOpenModal = document.querySelector(".btn-start-training");
buttonOpenModal.addEventListener("click", function () {
    addOpen(["modal-background", "modal"]);
});

const buttonClose = document.querySelectorAll(".close__item");
buttonClose.forEach(function (remOpen) {
    remOpen.addEventListener("click", function () {
        removeOpen(["sidebar", "overlay", "modal"]);
    });
});

const backgroundClose = document.querySelectorAll(".background-close");
backgroundClose.forEach(function (remOpen) {
    remOpen.addEventListener("click", function (event) {
        if (event.target.closest(".modal-box")) {
            return;
        }
        removeOpen(["sidebar", "overlay", "modal"]);
    });
});









const openCloseDetailsButtonLeft = document.querySelectorAll("[data-button-open-close-left-panel]"); // Поиск всех кнопок левой панели
const openCloseDetailsSpheres = document.querySelectorAll(".details-spheres"); // Поиск всех details левой панели(поиск всех элементов учебных сфер)
const strelkaVnizOpenCloseLeftPanel = document.querySelector(".element-open-close-left-panel");
const strelkaVverhOpenCloseLeftPanel = document.querySelector(".element2-open-close-left-panel");
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