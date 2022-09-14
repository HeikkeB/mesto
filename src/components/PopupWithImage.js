import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._imgPopupPhoto = this._popupItem.querySelector('.popup__gallery-img');
        this._imgPopupDescript = this._popupItem.querySelector('.popup__gallery-description');
    }

    open(data) {
        this._imgPopupPhoto.src = data.link;
        this._imgPopupPhoto.alt = data.name;
        this._imgPopupDescript.textContent = data.name;

        super.open();
    }
}