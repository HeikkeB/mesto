export class Card {
    constructor(name, link, templateSelector, openImgPopup) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._openImgPopup = openImgPopup;
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.element__img');
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._setEventListeners();
        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__img').alt = this._name;

        return this._element;
    }

    _handleCardDelete() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._element.querySelector('.element__btn-like').addEventListener('click', (evt) => evt.target.classList.toggle('element__btn-like_active'));
        this._element.querySelector('.element__btn-delete').addEventListener('click', () => this._handleCardDelete());
        this._image.addEventListener('click', () => this._openImgPopup(this._name, this._link));
    }
};