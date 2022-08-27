import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._imgPopupPhoto = this._popup.querySelector('.popup__gallery-img');
        this._imgPopupDescript = this._popup.querySelector('.popup__gallery-description');
    }

    open(card) {
        this._imgPopupPhoto.src = card.src;
        this._imgPopupPhoto.alt = card.alt;
        this._imgPopupDescript.textContent = card.name;

        super.open()
    }
}