export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }

    enableValidation() {
        this._setEventListeners();
    }

    _showInputError(inputElement, errorMessage) {
        this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._config.errorClass);
        inputElement.classList.add(this._config.inputErrorClass);
    }

    _hideInputError(inputElement) {
        this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        this._errorElement.textContent = '';
        inputElement.classList.remove(this._config.inputErrorClass);
    }

    _checkInputValidity(inputElement) {
        const isInputNoValid = !inputElement.validity.valid;
        if (isInputNoValid) {
            const errorMessage = inputElement.validationMessage;
            this._showInputError(inputElement, errorMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => !inputElement.validity.valid);
    }

    _toggleBtnState() {
        if (this._hasInvalidInput()) {
            this._btnElement.classList.add(this._config.inactiveBtnClass);
            this._btnElement.disabled = true;
        } else {
            this._btnElement.classList.remove(this._config.inactiveBtnClass);
            this._btnElement.disabled = false;
        }
    }

    _setEventListeners() {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        this._btnElement = this._formElement.querySelector(this._config.btnSelector);

        this._inputList.forEach((inputSelector) => {
            inputSelector.addEventListener('input', () => {
                this._toggleBtnState();
                this._checkInputValidity(inputSelector);
            });
        });
    }

    resetErrorInput() {
        this._btnElement = this._formElement.querySelector(this._config.btnSelector);
        const inputData = this._formElement.querySelectorAll(this._config.inputSelector);
        this._inputList = Array.from(inputData);

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });

        this._toggleBtnState();
    }
}