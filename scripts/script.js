//popup
const popup = document.querySelector('.popup');
//template
const template = document.querySelector('.template__card');
//list cards
const cards = document.querySelector('.elements__list');

//popup edit profile
const editPopup = document.querySelector('.popup_edit');
const popupEditForm = document.querySelector('.popup__form_edit')
const popupClosedBtn = popup.querySelector('.popup__closed');
const profileBtnEdit = document.querySelector('.profile__btn-edit');
const popupUsername = document.querySelector('.popup__input_name');
const popupProfession = document.querySelector('.popup__input_profession');
const profileDescription = document.querySelector('.profile__description');
const profileUsername = document.querySelector('.profile__username');

//popup add card
const addPopup = document.querySelector('.popup_add');


//common open popups
const openPopup = () => {
    loadUserData();
    popup.classList.add('popup_opened');
};

const closePopup = () => {
    popup.classList.remove('popup_opened');
};

//EDIT POPUP
//open
const openEditPopup = () => {
    openPopup(editPopup);

};

//close
const closeEditPopup = () => {
    closePopup(editPopup);
};

//load user data
const loadUserData = () => {
    popupUsername.value = profileUsername.textContent;
    popupProfession.value = profileDescription.textContent;
};

//touch "save"
const submitPopupEdit = (evt) => {
    evt.preventDefault();
    profileUsername.textContent = popupUsername.value;
    profileDescription.textContent = popupProfession.value;
    closeEditPopup();
};


// Listener popup edit
profileBtnEdit.addEventListener('click', openEditPopup);

popupClosedBtn.addEventListener('click', closeEditPopup);

popupEditForm.addEventListener('submit', submitPopupEdit);



const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

