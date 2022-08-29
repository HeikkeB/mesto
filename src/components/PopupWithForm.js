import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, submitHandler) {
        super(popup);
        this.submitHandler = submitHandler;
        this._form = this._popupItem.querySelector('.popup__form');
        this._inputs = this._popupItem.querySelectorAll('.popup__input');
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

    setEventListeners() {
        super.setEventListeners();
        this._popupItem.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.submitHandler(this._getInputValues());
        })
    }

    close() {
        this._form.reset();
        super.close();
    }
}