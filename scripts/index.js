import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';

//template
const template = document.querySelector('.template');
//list cards
const cardsContainer = document.querySelector('.elements__list');

//popup edit profile
const popupEdit = document.querySelector('.popup_edit');
const popupEditForm = document.querySelector('.popup__form_edit')
const popupEditClosedBtn = document.querySelector('.popup__closed_edit');
const profileBtnEdit = document.querySelector('.profile__btn-edit');
const popupUsername = document.querySelector('.popup__input_name');
const popupProfession = document.querySelector('.popup__input_profession');
const profileDescription = document.querySelector('.profile__description');
const profileUsername = document.querySelector('.profile__username');

//popup add card
const popupAdd = document.querySelector('.popup_add');
const popupAddOpenBtn = document.querySelector('.profile__btn-add');
const popupAddCloseBtn = document.querySelector('.popup__closed_add');
const popupAddSaveBtn = document.querySelector('.popup__form_add');
const cardNamePlace = document.querySelector('.popup__input_place');
const cardLinkPlace = document.querySelector('.popup__input_link');
const popupBtnSubmit = document.querySelector('.popup__submit-btn');

//popup open image
const imagePopup = document.querySelector('.popup_gallery');
const imgPopupPhoto = imagePopup.querySelector('.popup__gallery-img');
const imgPopupDescript = imagePopup.querySelector('.popup__gallery-description');
const imgPopupClosedBtn = document.querySelector('.popup__closed_gallery');

const validateConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    btnSelector: '.popup__submit-btn',
    inactiveBtnClass: 'popup__submit-btn_inactive',
    errorClass: 'popup__input-error_active',
    inputErrorClass: 'popup__input_invalid'
};

//common open popups
const openPopup = item => {
    item.classList.add('popup_opened');
    document.addEventListener('keydown', handlerPopupEsc);
};

const closePopup = (item) => {
    item.classList.remove('popup_opened');
    document.removeEventListener('keydown', handlerPopupEsc);
};

//IMAGE POPUP
//open
const openImgPopup = (evt) => {
    const elementImg = evt.target
    imgPopupPhoto.src = elementImg.src;
    imgPopupPhoto.alt = elementImg.alt;
    imgPopupDescript.textContent = elementImg.alt;
    openPopup(imagePopup);
}

//close
const closeImgPopup = () => {
    closePopup(imagePopup);
}

imgPopupClosedBtn.addEventListener('click', closeImgPopup);


//EDIT POPUP
//open
const openEditPopup = () => {
    loadUserData();
    openPopup(popupEdit);
    validateFormEditProf.resetErrorInput();
};

//close
const closeEditPopup = () => {
    closePopup(popupEdit);
};

//load user data
const loadUserData = () => {
    popupUsername.value = profileUsername.textContent;
    popupProfession.value = profileDescription.textContent;
};

//save user data
const submitPopupEdit = (evt) => {
    evt.preventDefault();
    profileUsername.textContent = popupUsername.value;
    profileDescription.textContent = popupProfession.value;
    closeEditPopup();
};

// Listener popup edit
profileBtnEdit.addEventListener('click', openEditPopup);

popupEditClosedBtn.addEventListener('click', closeEditPopup);

popupEditForm.addEventListener('submit', submitPopupEdit);


//ADD POPUP 
//open 
const openAddPopup = () => {
    popupBtnSubmit.classList.add('popup__submit-btn_inactive');
    popupAddSaveBtn.reset();
    validateFormAddProf.resetErrorInput();
    openPopup(popupAdd);

};

//close
const closeAddPopup = () => {
    closePopup(popupAdd);
}

//Listener popup add
popupAddOpenBtn.addEventListener('click', openAddPopup);

popupAddCloseBtn.addEventListener('click', closeAddPopup);


//add new card
function createNewCard(evt) {
    evt.preventDefault();
    const card = new Card(cardNamePlace.value, cardLinkPlace.value, '.template').generateCard();
    cardsContainer.prepend(card);
    closePopup(popupAdd);
}

/*const createNewCard = ({ name, link }) => {
    const card = template.content.firstElementChild.cloneNode(true);
    const elementImg = card.querySelector('.element__img');

    elementImg.src = link;
    card.querySelector('.element__title').textContent = name;
    elementImg.alt = name;

    //open image
    //elementImg.addEventListener('click', openImgPopup);

    //like card
    //card.querySelector('.element__btn-like').addEventListener('click', (evt) => evt.target.classList.toggle('element__btn-like_active'));

    //delete card
    //card.querySelector('.element__btn-delete').addEventListener('click', () => card.remove());

    return card;
}*/

/*const addCard = (name, link) => {
    const card = createNewCard({ name, link });
    cardsContainer.prepend(card);
}

const initializeList = () => {
    initialCards.forEach(({ name, link }) => {
        addCard(name, link);
    });
};

initializeList(initialCards);*/

/*const submitPopupAdd = (evt) => {
    evt.preventDefault();
    addCard(cardNamePlace.value, cardLinkPlace.value);
    closePopup(popupAdd);
};*/

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, '.template').generateCard();
    cardsContainer.prepend(card);
});

popupAddSaveBtn.addEventListener('submit', createNewCard);

//close popups overlay and Esc
//Esc
const handlerPopupEsc = (evt) => {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};

//overlay
const handlerPopupOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
};

//open popups overlay
imagePopup.addEventListener('click', handlerPopupOverlay);
popupEdit.addEventListener('click', handlerPopupOverlay);
popupAdd.addEventListener('click', handlerPopupOverlay);

//Turn on validation
const validateFormEditProf = new FormValidator(validateConfig, popupEditForm);
const validateFormAddProf = new FormValidator(validateConfig, popupAddSaveBtn);

validateFormEditProf.enableValidation();
validateFormAddProf.enableValidation();

export { openImgPopup };