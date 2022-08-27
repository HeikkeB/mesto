import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._imgPopupPhoto = popup.querySelector('.popup__gallery-img');
        this._imgPopupDescript = popup.querySelector('.popup__gallery-description');
    }

    open(data) {
        this._imgPopupPhoto.src = data.link;
        this._imgPopupPhoto.alt = data.place;
        this._imgPopupDescript.textContent = data.place;

        super.open();
    }
}