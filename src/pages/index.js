import '../pages/index.css'

import FormValidator from '../components/FormValidator.js';
import { initialCards } from '../utils/cards.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';

let userId = null;

//popup edit profile
const popupEditForm = document.querySelector('.popup__form_edit')
const profileBtnEdit = document.querySelector('.profile__btn-edit');

//popup add card
const popupAddOpenBtn = document.querySelector('.profile__btn-add');
const popupAddSaveBtn = document.querySelector('.popup__form_add');

//popup avatar
const popupAvatarOpenBtn = document.querySelector('.profile__edit-avatar');
const popupAvatarSaveBtn = document.querySelector('.popup__form_avatar');

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-50',
    headers: {
        authorization: 'ee63acbb-034f-45d3-b9ee-d63e3206b34a',
        'Content-Type': 'application/json'
    }
});

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
    popupAvatar: '.popup_type_avatar',
    popupConfirm: '.popup_type_confirm',
    imagePopup: '.popup_type_image-gallery',
    profileUsername: '.profile__username',
    profileDescription: '.profile__description',
    avatar: '.profile__avatar',
    avatarBtn: 'profile__edit-avatar'
}

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, initCards]) => {
        userInfo.setUserInfo(userData);
        cardSection.renderItems(initCards);
    })
    .catch((err) => {
        console.log(err);
    });

///////////


const userInfo = new UserInfo({
    selectorUsername: selectors.profileUsername,
    selectorUserinfo: selectors.profileDescription,
    selectorAvatar: selectors.avatar
})

function createNewCard(item) {
    const card = new Card({ ...item, userId }, '.template', api._id,
        {
            handleCardClick: () => popupWithImage.open(item)
        },
        api,
        handleDeleteClick,
    ).generateCard();

    return card
}

////////

function handlePopupConfirm(id, card) {
    api.deleteCard(id)
        .then(() => {
            card.delete();
            popupWithConfirm.close();
        })
        .catch((err) => {
            console.log(err);
        });
}

function handleDeleteClick(id, card) {
    popupWithConfirm.setSubmitAction(() => handlePopupConfirm(id, card))
    popupWithConfirm.open();
}

const popupWithConfirm = new PopupWithConfirm(selectors.popupConfirm)

popupWithConfirm.setEventListeners();

///////////

const popupWithImage = new PopupWithImage(selectors.imagePopup);
popupWithImage.setEventListeners();

const cardSection = new Section({
    items: initialCards, renderer: (item) => {
        const card = createNewCard(item);
        cardSection.addItem(card)
    }
},
    selectors.cardsContainer);

/////////

function handlePopupAddCard(inputValues) {
    popupAddCard.renderSaving(true);

    api.addNewCard(inputValues)
        .then((data) => {
            cardSection.addItem(createNewCard(data));
            popupAddCard.close();
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            popupAddCard.renderSaving(false);
        })
}

const popupAddCard = new PopupWithForm(selectors.popupAdd, handlePopupAddCard);
popupAddCard.setEventListeners();

/////////

function handlePopupProfile(inputValues) {
    popupEditProfile.renderSaving(true);
    api.setUserInfo(inputValues)
        .then((data) => {
            userInfo.setUserInfo(data);
            userInfo.setUserAvatar(data);
            popupEditProfile.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupEditProfile.renderSaving(false);
        })
}

const popupEditProfile = new PopupWithForm(selectors.popupEdit, handlePopupProfile);
popupEditProfile.setEventListeners();

////////

function handlePopupAvatar(inputValues) {
    popupFormAvatar.renderSaving(true);

    api.updateAvatar(inputValues)
        .then((inputValues) => {
            userInfo.setUserAvatar(inputValues);
            popupFormAvatar.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupFormAvatar.renderSaving(false);
        })
}

const popupFormAvatar = new PopupWithForm(selectors.popupAvatar, handlePopupAvatar);
popupFormAvatar.setEventListeners();

////////////

profileBtnEdit.addEventListener('click', () => {
    popupEditProfile.setInputValue(userInfo.getUserInfo());
    validateFormEditProf.resetErrorInput();
    popupEditProfile.open();
})

popupAddOpenBtn.addEventListener('click', () => {
    validateFormAddProf.resetErrorInput();
    popupAddCard.open()
})

popupAvatarOpenBtn.addEventListener('click', () => {
    validateFormAvatar.resetErrorInput();
    popupFormAvatar.open();
})

const validateFormEditProf = new FormValidator(validateConfig, popupEditForm);
const validateFormAddProf = new FormValidator(validateConfig, popupAddSaveBtn);
const validateFormAvatar = new FormValidator(validateConfig, popupAvatarSaveBtn);

validateFormEditProf.enableValidation();
validateFormAddProf.enableValidation();
validateFormAvatar.enableValidation();
