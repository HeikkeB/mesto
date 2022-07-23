const validateConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    btnSelector: '.popup__submit-btn',
    inactiveBtnClass: 'popup__submit-btn_inactive',
    errorClass: 'popup__input-error_active',
    inputErrorClass: 'popup__input_invalid'
};

// show input error
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validateConfig.errorClass);
    inputElement.classList.add(validateConfig.inputErrorClass);
};

//hide input error
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(validateConfig.errorClass);
    inputElement.classList.remove(validateConfig.inputErrorClass);
}

//check validity 
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

const toggleBtnState = (inputList, btnElement, { inactiveBtnClass }) => {
    if (hasInvalidInput(inputList)) {
        btnElement.classList.add(inactiveBtnClass);
        btnElement.setAttribute('disabled', true);
    } else {
        btnElement.classList.remove(inactiveBtnClass);
        btnElement.removeAttribute('disabled');
    }
};

//handlers input
const setEventListeners = (formElement, { inputSelector, btnSelector }) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const btnElement = formElement.querySelector(btnSelector);

    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            checkInputValidity(formElement, inputSelector);
            toggleBtnState(inputList, btnElement, validateConfig);
        })
    })
};

//enable validation
const enableValidation = ({ formSelector }) => {
    const formElements = document.querySelectorAll(formSelector);
    const formList = Array.from(formElements);
    const formListIteration = (formElement) => {
        const submitFormHandler = (evt) => {
            evt.preventDefault();
        };
        formElement.addEventListener('submit', submitFormHandler);
        setEventListeners(formElement, validateConfig);
    };
    formList.forEach(formListIteration);
};

enableValidation(validateConfig);



