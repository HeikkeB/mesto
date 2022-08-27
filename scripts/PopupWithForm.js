import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, submitHandler) {
        super(popup);
        this.submitHandler = submitHandler;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._popup.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach(input => {
            this._inputValues[input.id] = input.value;
        })
        return this._inputValues
    }

    setInputValue(data) {
        this._inputs.forEach((item) => {
            item.value = data[item.id];
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.submitHandler(this._getInputValues());
        })
    }

    close() {
        this._form.reset();
        super.close();
    }
}