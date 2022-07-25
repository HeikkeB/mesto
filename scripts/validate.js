const validateConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    btnSelector: '.popup__submit-btn',
    inactiveBtnClass: 'popup__submit-btn_inactive',
    errorClass: 'popup__input-error_active',
    inputErrorClass: 'popup__input_invalid'
};

//enable validation
const enableValidation = (config) => {
    const formElements = document.querySelectorAll(config.formSelector);
    const formList = Array.from(formElements);
    const formListIteration = (formElement) => {
        setEventListeners(formElement, config);
    };
    formList.forEach(formListIteration);
};

// show input error
const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
    inputElement.classList.add(config.inputErrorClass);
};

//hide input error
const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass);
}

//check validity 
const checkInputValidity = (formElement, inputElement, config) => {
    const isInputNoValid = !inputElement.validity.valid;
    if (isInputNoValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

const toggleBtnState = (inputList, btnElement, config) => {
    if (hasInvalidInput(inputList)) {
        btnElement.classList.add(config.inactiveBtnClass);
        btnElement.disabled = true;
    } else {
        btnElement.classList.remove(config.inactiveBtnClass);
        btnElement.disabled = false;
    }
};

//handlers input
const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const btnElement = formElement.querySelector(config.btnSelector);

    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            toggleBtnState(inputList, btnElement, config);
            checkInputValidity(formElement, inputSelector, config);
        })
    })
};


//clear forms
const resetErrorInput = (formElement, config) => {
    const btnElement = formElement.querySelector(config.btnSelector)
    const inputData = formElement.querySelectorAll(config.inputSelector)
    const inputList = Array.from(inputData);

    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement, config);
    });

    toggleBtnState(inputList, btnElement, config);
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    btnSelector: '.popup__submit-btn',
    inactiveBtnClass: 'popup__submit-btn_inactive',
    errorClass: 'popup__input-error_active',
    inputErrorClass: 'popup__input_invalid'
});