export default class Card {
    constructor(data, templateSelector, { handleCardClick }, api, { handleDeleteClick }) {
        this._data = data;//////
        this._link = data.link;/////
        this._name = data.name;/////
        this._userId = data.userId;
        this._id = data._id;
        this._api = api;
        this.likeId = data.likes;////
        this._likes = data.likes.length;
        this._idOwner = data.owner._id;//////
        this._templateSelector = templateSelector;/////
        this._handleCardClick = handleCardClick;/////       
        this._handleDeleteClick = handleDeleteClick;///////
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
        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__img').alt = this._name;
        this._likeButton = this._element.querySelector('.element__btn-like');
        this._likeCounter = this._element.querySelector('.element__like-counter');
        this._likeCounter.textContent = this._likes;
        this._deleteBtn = this._element.querySelector('.element__btn-delete');
        this.myLikeCard(this.findLike());
        this._setEventListeners();
        this._isOwner();

        return this._element;
    }

    _isOwner() {
        if (this._idOwner !== this._userId) {
            this._deleteBtn.remove();
        }
    }

    _remove() {
        this._element.remove();
        this._element = null;
    }
    _onLike() {
        this._likeButton.classList.add('element__btn-like_active');
    }
    _offLike() {
        this._likeButton.classList.remove('element__btn-like_active');
    }
    findLike() {
        return Boolean(this.likeId.find((data => data._id !== this._userId)));
    }
    myLikeCard(myLike) {
        if (myLike) {
            this._onLike();
        }
    }

    _handleLikeClick() {
        this._api
            .likeCard(this._id)
            .then((res) => {
                this._likes = res.likes.length;
                this._likeCounter.textContent = this._likes;
                this._onLike();
            })
    }

    _deleteLike() {
        this._api
            .dislikeCard(this._id)
            .then((res) => {
                this._likes = res.likes.length;
                this._likeCounter.textContent = this._likes;
                this._offLike();
            })
    }

    /*handleCardDelete() {
        this._element.remove();
        this._element = null;
    }*/

    _setEventListeners() {
        this._element.querySelector('.element__img').addEventListener('click', () => this._handleCardClick());

        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('element__btn-like_active')) {
                this._deleteLike();
            } else {
                this._handleLikeClick();

            }
        });

        this._deleteBtn.addEventListener('click', () => {
            this._handleDeleteClick(this._data);
        })
    }


}