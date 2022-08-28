import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/cards.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

//list cards
const cardsContainer = document.querySelector('.elements__list');

//popup edit profile
const popupEdit = document.querySelector('.popup_type_profile-edit');
const popupEditForm = document.querySelector('.popup__form_edit')
const profileBtnEdit = document.querySelector('.profile__btn-edit');
const profileDescription = document.querySelector('.profile__description');  //userinfo
const profileUsername = document.querySelector('.profile__username');  //userinfo

//popup add card
const popupAdd = document.querySelector('.popup_type_image-add');
const popupAddOpenBtn = document.querySelector('.profile__btn-add');
const popupAddSaveBtn = document.querySelector('.popup__form_add');

//popup open image
const imagePopup = document.querySelector('.popup_type_image-gallery');

const validateConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    btnSelector: '.popup__submit-btn',
    inactiveBtnClass: 'popup__submit-btn_inactive',
    errorClass: 'popup__input-error_active',
    inputErrorClass: 'popup__input_invalid'
};

const createNewCard = (item) => new Card(item, '.template', { handleCardClick: () => popupWithImage.open(item) }).generateCard();

const cardSection = new Section({
    items: initialCards, renderer: (item) => {
        const card = createNewCard(item);
        cardSection.addItem(card)
    }
},
    cardsContainer);

cardSection.renderItems();

const dataProfile = new UserInfo({ selectorUsername: profileUsername, selectorUserinfo: profileDescription });

const popupEditProfile = new PopupWithForm(popupEdit, inputValues => {
    dataProfile.setUserInfo(inputValues);
    popupEditProfile.close();
});

popupEditProfile.setEventListeners();

const popupWithImage = new PopupWithImage(imagePopup);
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm(popupAdd, inputValues => {
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