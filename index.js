const myList = document.getElementById("myList");
let draggingElement = null;

// Функции для перемещения элементов
function handleDragStart(event) {
    draggingElement = event.target;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", event.target.outerHTML);
    event.target.classList.add("dragging");
}

function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function handleDrop(event) {
    event.preventDefault();
    const target = event.target.closest("li");
    if (target && target !== draggingElement) {
        if (event.clientY < target.getBoundingClientRect().top + target.clientHeight / 2) {
            myList.insertBefore(draggingElement, target);
        } else {
            myList.insertBefore(draggingElement, target.nextElementSibling);
        }
    }
    draggingElement.classList.remove("dragging");
    draggingElement = null;
}

// Функция для закрепления элемента в начало списка
function handleDoubleClick(event) {
    const target = event.target.closest("li");
    if (target) {
        myList.prepend(target);
    }
}

// Добавляем обработчики событий для перемещения элементов и закрепления в начало списка
const listItems = myList.querySelectorAll("li");
listItems.forEach(item => {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("drop", handleDrop);

    // Добавляем обработчик события "dblclick" для каждого элемента
    item.addEventListener("dblclick", handleDoubleClick);

    // Добавляем обработчики тач-событий для мобильных устройств
    item.addEventListener("touchstart", handleTouchStart, false);
    item.addEventListener("touchmove", handleTouchMove, false);
    item.addEventListener("touchend", handleTouchEnd, false);
});

let touchStartY = 0;
let touchStartItem = null;

function handleTouchStart(event) {
    touchStartY = event.changedTouches[0].pageY;
    touchStartItem = event.target.closest("li");
}

function handleTouchMove(event) {
    event.preventDefault();
    const touchY = event.changedTouches[0].pageY;
    const deltaY = touchY - touchStartY;
    if (Math.abs(deltaY) > 10) {
        touchStartItem.classList.add("dragging");
    }
}

function handleTouchEnd(event) {
    touchStartItem.classList.remove("dragging");
    const touchY = event.changedTouches[0].pageY;
    const deltaY = touchY - touchStartY;
    if (Math.abs(deltaY) > 50) {
        const target = document.elementFromPoint(event.changedTouches[0].clientX, touchY);
        if (target && target !== touchStartItem) {
            myList.insertBefore(touchStartItem, target);
        }
    }
}