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


//common open popups
const openPopup = item => {
    item.classList.add('popup_opened');
};

const closePopup = item => {
    item.classList.remove('popup_opened');
};

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



const initializeList = list => {
    list.forEach(function (item) {
        const post = createNewPost(item.name, item.link);
        postsList.prepend(post);
    });
};

initializeList(initialCards);

/*//create card
const createCard = ({ name, link }) => {
    const card = template.content.cloneNode(true);
    const cardImg = card.querySelector('.element__img');
    const cardTitle = card.querySelector('.element__title');
    cardTitle.innerText = name;
    cardImg.src = link;
    cardImg.alt = name;
    createCardListeners(card);
    return card;
};

const renderInitialCards = () => {
    initialCards.forEach(({ name, link }) => {
        const card = createCard({ name, link });
        cards.appendChild(card);
    });
};

renderInitialCards();

//add card
const addCard = (name, link) => {
    const card = createCard({ name, link });
    cards.prepend(card);
};

const submitAddBtn = (item) => {
    addCard(cardNamePlace.value, cardLinkPlace.value);
    closeAddPopup(item);
}*/

