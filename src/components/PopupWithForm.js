import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupItem.querySelector('.popup__form');
        this._inputs = this._popupItem.querySelectorAll('.popup__input');
        this._buttonSave = this._form.querySelector('.popup__submit-btn');
        this._textButtonSave = this._buttonSave.textContent;
    }

    close() {
        this._form.reset();
        super.close();
    }

    _getInputValues() {
        const inputValues = {};
        this._inputs.forEach(input => {
            inputValues[input.id] = input.value;
        })
        return inputValues
    }

    setInputValue(data) {
        this._inputs.forEach((item) => {
            item.value = data[item.id];
        })
    }

    renderSaving(status) {
        if (status) {
            this._buttonSave.textContent = `Сохранение...`;
        } else {
            this._buttonSave.textContent = this._textButtonSave;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupItem.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }
}