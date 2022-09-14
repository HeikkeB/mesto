export default class UserInfo {
    constructor({ selectorUsername, selectorUserinfo, selectorAvatar }) {
        this._username = document.querySelector(selectorUsername);
        this._userinfo = document.querySelector(selectorUserinfo);
        this._avatar = document.querySelector(selectorAvatar);
    }

    getUserInfo() {
        return {
            username: this._username.textContent,
            userinfo: this._userinfo.textContent
        }
    }

    setUserInfo(data) {
        ({ name: this._username.textContent, about: this._userinfo.textContent, avatar: this._avatar.src } = data)
    }

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }
}