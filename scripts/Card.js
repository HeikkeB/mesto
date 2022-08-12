export class Card {
    constructor(data, templateSelector, openImgPopup) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openImgPopup = openImgPopup;
    }

    _getTemplate() {
        return document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
    }

    generateCard() {
        this._element = this._getTemplate();
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

    _handleCardToggle() {
        this._like = this._element.querySelector('.element__btn-like').classList.toggle('element__btn-like_active');
    }

    _setEventListeners() {
        this._element.querySelector('.element__btn-like').addEventListener('click', () => this._handleCardToggle());
        this._element.querySelector('.element__btn-delete').addEventListener('click', () => this._handleCardDelete());
        this._element.querySelector('.element__img').addEventListener('click', () => this._openImgPopup(this._name, this._link));
    }
};