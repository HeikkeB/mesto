export class Card {
    constructor(data, templateSelector, imageHandler) {
        this._data = data;
        this._newCard = document
            .querySelector(templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        this._imageHandler = imageHandler;
    }

}