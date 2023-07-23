const myList = document.getElementById("myList");
const addButton = document.getElementById("addButton"); // Кнопка для закрепления элемента

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
    item.addEventListener("dblclick", handleDoubleClick); // Добавляем обработчик события "dblclick" для каждого элемента

    // Добавляем обработчики сенсорных событий для мобильных устройств
    item.addEventListener("touchstart", handleTouchStart, { passive: false });
    item.addEventListener("touchmove", handleTouchMove, { passive: false });
    item.addEventListener("touchend", handleTouchEnd);
});

let touchStartY = 0;
let touchStartItem = null;

function handleTouchStart(event) {
    const target = event.target.closest("li");
    if (target) {
        touchStartY = event.touches[0].clientY;
        touchStartItem = target;
    }
}

function handleTouchMove(event) {
    if (!touchStartItem) return;

    const touchCurrentY = event.touches[0].clientY;
    const yOffset = touchCurrentY - touchStartY;
    touchStartY = touchCurrentY;

    const rect = touchStartItem.getBoundingClientRect();
    const currentIndex = [...myList.children].indexOf(touchStartItem);

    if (yOffset < 0 && currentIndex > 0) {
        myList.insertBefore(touchStartItem, myList.children[currentIndex - 1]);
    } else if (yOffset > 0 && currentIndex < myList.children.length - 1) {
        myList.insertBefore(touchStartItem, myList.children[currentIndex + 2]);
    }
}

function handleTouchEnd() {
    touchStartItem = null;
}

// Добавляем обработчик события для кнопки закрепления элемента в начале списка
addButton.addEventListener("click", handleDoubleClick);