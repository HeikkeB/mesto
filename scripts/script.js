const popup = document.querySelector('.popup');
const popupSubmitBtn = popup.querySelector('.popup__submit-btn');
const popupClosedBtn = popup.querySelector('.popup__closed');

const profileBtnEdit = document.querySelector('.profile__btn-edit');

let popupUsername = document.querySelector('.popup__input_name');
let popupProfession = document.querySelector('.popup__input_profession');

let profileUsername = document.querySelector('.profile__username');
let profileDescription = document.querySelector('.profile__description');

/*open*/
function openPopup() {
    popup.classList.add('popup_opened');
    popupUsername.value = profileUsername.textContent;
    popupProfession.value = profileDescription.textContent;
};

profileBtnEdit.addEventListener('click', openPopup);

/*close*/
function closePopup() {
    popup.classList.remove('popup_opened');
}

popupClosedBtn.addEventListener('click', closePopup);

/*submit*/
let popupForm = document.querySelector('.popup__form')

function submitPopup(evt) {
    evt.preventDefault();
    profileUsername.textContent = popupUsername.value;
    profileDescription.textContent = popupProfession.value;
    closePopup();
};

popupForm.addEventListener('click', submitPopup);