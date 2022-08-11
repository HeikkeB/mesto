import { openImgPopup } from './index.js'
export class Card {
    constructor(name, link, templateSelector) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
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
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__img').alt = this._name;

        return this._card;
    }

    _setEventListeners() {
        this._element.querySelector('.element__btn-like').addEventListener('click', (evt) => evt.target.classList.toggle('element__btn-like_active'));
        this._element.querySelector('.element__btn-delete').addEventListener('click', () => evt.target.classList.remove('.element'));
        this._element.querySelector('.element__img').addEventListener('click', openImgPopup);
    }
}