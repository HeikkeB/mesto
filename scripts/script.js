//template
const template = document.querySelector('.template');
//list cards
const elementsList = document.querySelector('.elements__list');

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

//popup open image
const imagePopup = document.querySelector('.popup_gallery');
const imgPopupPhoto = imagePopup.querySelector('.popup__gallery-img');
const imgPopupDescript = imagePopup.querySelector('.popup__gallery-description');
const imgPopupClosedBtn = document.querySelector('.popup__closed_gallery');


//common open popups
const openPopup = item => {
    item.classList.add('popup_opened');
};

const closePopup = item => {
    item.classList.remove('popup_opened');
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
    openPopup(popupAdd);
};

//close
const closeAddPopup = () => {
    closePopup(popupAdd);
}

//Listener popup add
popupAddOpenBtn.addEventListener('click', openAddPopup);

popupAddCloseBtn.addEventListener('click', closeAddPopup);


//add new card and stock pack cards
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

const createNewCard = (elementName, imgLink) => {
    const card = template.content.firstElementChild.cloneNode(true);
    const elementImg = card.querySelector('.element__img');

    elementImg.src = imgLink;
    card.querySelector('.element__title').textContent = elementName;
    elementImg.alt = elementName;

    //open image
    elementImg.addEventListener('click', openImgPopup);

    //like card
    card.querySelector('.element__btn-like').addEventListener('click', (evt) => evt.target.classList.toggle('element__btn-like_active'));

    //delete card
    card.querySelector('.element__btn-delete').addEventListener('click', (evt) => evt.target.closest('.element').remove());

    return card;
}

const initializeList = list => {
    list.forEach(function (item) {
        const card = createNewCard(item.name, item.link);
        elementsList.prepend(card);
    });
};

initializeList(initialCards);

const submitPopupAdd = (evt) => {
    evt.preventDefault();
    const newCard = createNewCard(cardNamePlace.value, cardLinkPlace.value);
    elementsList.prepend(newCard);
    closePopup(popupAdd);
};

popupAddSaveBtn.addEventListener('submit', submitPopupAdd);


