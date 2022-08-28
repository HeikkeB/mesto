export default class Card {
    constructor(data, templateSelector, { handleCardClick }) {
        this._data = data;
        this._link = data.link;
        this._name = data.place;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
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
        this.buttonLike = this._element.querySelector('.element__btn-like');
        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__img').alt = this._name;
        this._setEventListeners();

        return this._element;
    }

    _handleCardDelete() {
        this._element.remove();
        this._element = null;
    }

    _handleCardToggle() {
        this.buttonLike.classList.toggle('element__btn-like_active');
    }

    _setEventListeners() {
        this.buttonLike.addEventListener('click', () => this._handleCardToggle());
        this._element.querySelector('.element__btn-delete').addEventListener('click', () => this._handleCardDelete());
        this._element.querySelector('.element__img').addEventListener('click', () => this._handleCardClick());
    }
};