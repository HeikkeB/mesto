import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        //this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupItem.querySelector('.popup__form');
    }

    setSubmitAction(submitAction) {
        this._handleSubmitCallback = submitAction;
    }

    open(data) {
        super.open();
        this._data = data;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmitCallback()
        });
    }
}