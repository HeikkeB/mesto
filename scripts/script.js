//template
const template = document.querySelector('.template__card');
//list cards
const cards = document.querySelector('.elements__list');

//popup edit profile
const editPopup = document.querySelector('.popup_edit');
const popupEditForm = document.querySelector('.popup__form_edit')
const editPopupClosedBtn = document.querySelector('.popup__closed_edit');
const profileBtnEdit = document.querySelector('.profile__btn-edit');
const popupUsername = document.querySelector('.popup__input_name');
const popupProfession = document.querySelector('.popup__input_profession');
const profileDescription = document.querySelector('.profile__description');
const profileUsername = document.querySelector('.profile__username');

//popup add card
const addPopup = document.querySelector('.popup_add');
const addPopupOpenBtn = document.querySelector('.profile__btn-add');
const addPopupCloseBtn = document.querySelector('.popup__closed_add');
const addPopupSaveBtn = document.querySelector('.popup__form_add');
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
const openImgPopup = () => {
    const elementImg = document.querySelector('.element__img');
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

/*function showFullImage(image, capture) {
    fullImage.src = image.src;
    fullImage.alt = capture;
    captureFullImage.textContent = capture;
    openPopup(popupFullImage);
}*/


//EDIT POPUP
//open
const openEditPopup = () => {
    loadUserData();
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

editPopupClosedBtn.addEventListener('click', closeEditPopup);

popupEditForm.addEventListener('submit', submitPopupEdit);


//ADD POPUP 
//open 
const openAddPopup = () => {
    openPopup(addPopup);
};

//close
const closeAddPopup = () => {
    closePopup(addPopup);
}

//Listener popup add
addPopupOpenBtn.addEventListener('click', openAddPopup);

addPopupCloseBtn.addEventListener('click', closeAddPopup);


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

const elementsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.template__card').content;

const createNewElement = (elementName, imgLink) => {
    const card = cardTemplate.cloneNode(true);
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
        const card = createNewElement(item.name, item.link);
        elementsList.prepend(card);
    });
};

initializeList(initialCards);

const submitPopupAdd = (evt) => {
    evt.preventDefault();
    const newCard = createNewElement(cardNamePlace.value, cardLinkPlace.value);
    elementsList.prepend(newCard);
    closePopup(addPopup);
};

addPopupSaveBtn.addEventListener('submit', submitPopupAdd);

/*const elemImg = document.querySelector('.element__img');
elemImg.addEventListener('click', openImgPopup);*/

