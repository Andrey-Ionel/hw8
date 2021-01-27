// Берём результат домашку из ДЗ 9. Примитивный todolist (конец) и добавляем логику.

// Каждое дело в списке может быть в двух состояниях (нужно сделать - желтый фон и сделано - зеленый фон). По умолчанию, дело в список добавляется в статусе нужно сделать. При клике на него, состояние меняется на противоположное.

// Добавить в каждую строку кнопку удалить, при клике на которую элемент удаляется из списка.

// Когда удалили все элементы показывается сообщения которое сообщает что список пустой (оно должно быть всегда когда в списке нет элементов).

// Для реализации обязательно попробуйте использовать делегирование и интересные подходы из статей.

const addListButton = document.querySelector('.js-add-todo');
const inputForAddList = document.querySelector('.js-todo-name');
const todoList = document.querySelector('.js-todo-list');
const emptyListMessage = document.querySelector('.js-hidden-text');
const formWithTodoElements = document.querySelector('.js-todo-form');

addListButton.addEventListener('click', onCreateNewTodoList);
todoList.addEventListener('click', onRemoveTodoList);
todoList.addEventListener('click', onChangeColorTodoList);
formWithTodoElements.addEventListener('keypress', onDisableEnterKey);

function onDisableEnterKey(event) {

    if (event.keyCode === 13) {
        event.preventDefault();
    }

}

function onCreateNewTodoList() {
    const currentInputValue = inputForAddList.value;
    const initialInputValue = (inputForAddList.value = '');

    if (currentInputValue && currentInputValue.trim().length) {
        todoList.insertAdjacentHTML('beforeend', `<li class="list-group-item list-group-item-warning my-1">${currentInputValue}<i class="bi bi-x-square mx-3"></i></li>`);
        changeVisibilityEmptyListMessage();
        return initialInputValue;
    } else {
        alert('Your input is empty');
        return initialInputValue;
    }

}

function onChangeColorTodoList(event) {
    const todoListElementTarget = event.target.classList.contains('list-group-item');
    const todoListElement = event.target.closest('li');

    if (todoListElementTarget) {
        todoListElement.classList.toggle('list-group-item-warning');
        todoListElement.classList.toggle('list-group-item-success');
    }

}

function onRemoveTodoList(event) {
    const todoCloseButton = event.target.classList.contains('bi-x-square');
    const todoListElement = event.target.closest('li');

    if (todoCloseButton) {
        todoListElement.remove();
        changeVisibilityEmptyListMessage()
    }

}

function changeVisibilityEmptyListMessage() {

    if (todoList.children.length >= 1) {
        emptyListMessage.hidden = true;
    } else {
        emptyListMessage.hidden = false;
    }

}