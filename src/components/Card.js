import { data } from "autoprefixer";

export default class Card {
    constructor(data, templateSelector, ownerId, { handleCardClick }, api, { handleDeleteClick }) {
        this._data = data;//////
        this._link = data.link;/////
        this._name = data.name;/////
        this._userId = data.userId;
        this._id = data._id;
        this._api = api;
        this._ownerId = ownerId;
        this._likeId = data.likes;////
        this._likes = data.likes.length;
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

    _isLiked() {
        return this._likeId.some(user => user._id === this._ownerId)
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
        this.toggleLikeBoolean(this._isLiked());
        //this.upDateLikes(this._data);
        this._setEventListeners();
        if (this._isOwner(this._data)) this._deleteBtn.remove();

        return this._element;
    }

    _isOwner(card) {
        return card.owner._id !== this._ownerId;
    }

    _onLike() {
        this._likeButton.classList.add('element__btn-like_active');
    }
    _offLike() {
        this._likeButton.classList.remove('element__btn-like_active');
    }
    findLike() {
        return Boolean(this._likeId.find((data => data._id !== this._userId)));
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
            .catch((err) => {
                console.log(err);
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
            .catch((err) => {
                console.log(err);
            })
    }

    toggleLikeBoolean(liked) {
        liked ? this._likeButton.classList.add('element__btn-like_active') : this._likeButton.classList.remove('element__btn-like_active');
    }

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

    delete() {
        this._element.remove();
        this._element = null;
    }
}