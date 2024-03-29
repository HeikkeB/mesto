export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._handleResponse)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._handleResponse)
            .then((res) => {
                this._id = res._id;
                return res;
            })
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(this._handleResponse);
    }

    setUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.username,
                about: data.userinfo
            }),
        })
            .then(this._handleResponse);
    }

    addNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(data),
        })
            .then(this._handleResponse);
    }

    updateAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            }),
        })
            .then(this._handleResponse);
    }


    likeCard(card) {
        return fetch(`${this._baseUrl}/cards/likes/${card}`, {
            method: "PUT",
            headers: this._headers,
        })
            .then(this._handleResponse);
    }

    dislikeCard(card) {
        return fetch(`${this._baseUrl}/cards/likes/${card}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(this._handleResponse);
    }
}