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

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._handleResponse)
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

    deleteCard(Id) {
        return fetch(`${this._baseUrl}/cards/${Id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._handleResponse)
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


    likeCard(Id) {
        return fetch(`${this._baseUrl}/cards/likes/${Id}`, {
            method: "PUT",
            headers: this._headers,
        })
            .then(this._handleResponse);
    }

    dislikeCard(Id) {
        return fetch(`${this._baseUrl}/cards/likes/${Id}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(this._handleResponse);
    }
}