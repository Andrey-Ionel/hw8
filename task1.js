// Берём результат домашку из ДЗ 8. Примитивный todolist (начало) и добавляем логику.
// Пользователь может ввести что-то в инпут и нажать на кнопку, после этого в списке ниже должна отобразится строка с тем что было введено в инпуте.
// После этого инпут очищается.

function onAddButtonClick() {

    const addListButton = document.querySelector('.js-add-todo');
    const inputForAddList = document.querySelector('.js-todo-name');
    const locationForAddList = document.querySelector('.js-todo-list');
    const emptyListMessage = document.querySelector('.js-hidden-text');

    addListButton.addEventListener('click', createNewList);
    inputForAddList.addEventListener('keypress', disableEnterKey);

    function disableEnterKey(event) {

        if (event.keyCode === 13) {
            event.preventDefault();
        }

    }

    function getInputValue() {
        const currentInputValue = inputForAddList.value;
        return currentInputValue;
    }

    function createNewList() {

        if (getInputValue() === '' || getInputValue() === ' ') {
            alert('Your input is empty');
        } else {
            emptyListMessage.hidden = true;
            locationForAddList.insertAdjacentHTML('beforeend', `<li class="list-group-item">${getInputValue()}</li>`);
            return clearsInputValue();
        }

    }

    function clearsInputValue() {
        inputForAddList.value = '';
    }

}

onAddButtonClick();