// Берём результат домашку из ДЗ 8. Примитивный todolist (начало) и добавляем логику.
// Пользователь может ввести что-то в инпут и нажать на кнопку, после этого в списке ниже должна отобразится строка с тем что было введено в инпуте.
// После этого инпут очищается.

function onAddButtonClick() {

    const eventButton = document.querySelector('.js-event-button');
    const ulForAddList = document.querySelector('.js-list-add');
    const openingParagraph = document.querySelector('.js-hidden-text');
    const inputForAdd = document.querySelector('.js-input-add');

    eventButton.addEventListener('mousedown', createNewList);
    eventButton.addEventListener('mouseup', clearsInputValue);
    inputForAdd.addEventListener('keypress', desableEnterKey);

    function desableEnterKey(event) {

        if (event.keyCode === 13) {
            event.preventDefault();
        }

    }

    function getInputValue() {
        const currentInputValue = inputForAdd.value;
        return currentInputValue;
    }

    function createNewList() {

        if (getInputValue() === '' || getInputValue() === ' ') {
            alert('Your input is empty');
        } else {
            openingParagraph.hidden = true;
            return ulForAddList.insertAdjacentHTML('beforeend', `<li class="list-group-item">${getInputValue()}</li>`);
        }

    }

    function clearsInputValue() {
        inputForAdd.value = '';
    }

}

onAddButtonClick();






