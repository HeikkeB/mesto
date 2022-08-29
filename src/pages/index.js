import '../pages/index.css'

import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

//popup edit profile
const popupEditForm = document.querySelector('.popup__form_edit')
const profileBtnEdit = document.querySelector('.profile__btn-edit');

//popup add card
const popupAddOpenBtn = document.querySelector('.profile__btn-add');
const popupAddSaveBtn = document.querySelector('.popup__form_add');

const validateConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    btnSelector: '.popup__submit-btn',
    inactiveBtnClass: 'popup__submit-btn_inactive',
    errorClass: 'popup__input-error_active',
    inputErrorClass: 'popup__input_invalid'
};

const selectors = {
    cardsContainer: '.elements__list',
    popupEdit: '.popup_type_profile-edit',
    popupAdd: '.popup_type_image-add',
    imagePopup: '.popup_type_image-gallery',
    profileUsername: '.profile__username',
    profileDescription: '.profile__description',
}

const createNewCard = (item) => new Card(item, '.template', { handleCardClick: () => popupWithImage.open(item) }).generateCard();

const cardSection = new Section({
    items: initialCards, renderer: (item) => {
        const card = createNewCard(item);
        cardSection.addItem(card)
    }
},
    selectors.cardsContainer);

cardSection.renderItems(initialCards);

const dataProfile = new UserInfo({ selectorUsername: selectors.profileUsername, selectorUserinfo: selectors.profileDescription });

const popupEditProfile = new PopupWithForm(selectors.popupEdit, inputValues => {
    dataProfile.setUserInfo(inputValues);
    popupEditProfile.close();
});

popupEditProfile.setEventListeners();

const popupWithImage = new PopupWithImage(selectors.imagePopup);
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(selectors.popupAdd, inputValues => {
    const card = createNewCard(inputValues);
    cardSection.addItem(card);
    popupAddCard.close();
});

popupAddCard.setEventListeners();

const validateFormEditProf = new FormValidator(validateConfig, popupEditForm);
const validateFormAddProf = new FormValidator(validateConfig, popupAddSaveBtn);

validateFormEditProf.enableValidation();
validateFormAddProf.enableValidation();

profileBtnEdit.addEventListener('click', () => {
    popupEditProfile.setInputValue(dataProfile.getUserInfo());
    validateFormEditProf.resetErrorInput();
    popupEditProfile.open();
});

popupAddOpenBtn.addEventListener('click', () => {
    validateFormAddProf.resetErrorInput();
    popupAddCard.open()
})