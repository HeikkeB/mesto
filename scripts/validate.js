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
    const isInputNoValid = !inputElement.validity.valid;
    if (isInputNoValid) {
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage);
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
        btnElement.disabled = true;
    } else {
        btnElement.classList.remove(inactiveBtnClass);
        btnElement.disabled = false;
    }
};

//handlers input
const setEventListeners = (formElement, { inputSelector, btnSelector }) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const btnElement = formElement.querySelector(btnSelector);

    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            toggleBtnState(inputList, btnElement, validateConfig);
            checkInputValidity(formElement, inputSelector);
        })
    })
};


//clear forms
const resetErrorInput = (formElement, { btnSelector, inputSelector }) => {
    const btnElement = formElement.querySelector(btnSelector)
    const inputData = formElement.querySelectorAll(inputSelector) //находим все инпуты внутри формы
    const inputList = Array.from(inputData);                               //делаем из них массив

    inputList.forEach((inputElement) => {                                 //для каждого инпута из массива
        hideInputError(formElement, inputElement);            //скрываем ошибку инпута
    });

    toggleBtnState(inputList, btnElement, validateConfig);                       //переключаем кнопку в корректное состояние
}

//enable validation
const enableValidation = ({ formSelector }) => {
    const formElements = document.querySelectorAll(formSelector);
    const formList = Array.from(formElements);
    const formListIteration = (formElement) => {
        const submitFormHandler = (evt) => {
            evt.preventDefault();
        };
        setEventListeners(formElement, validateConfig);
    };
    formList.forEach(formListIteration);
};

enableValidation(validateConfig);



