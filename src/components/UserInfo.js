export default class UserInfo {
    constructor({ selectorUsername, selectorUserinfo }) {
        this._username = document.querySelector(selectorUsername);
        this._userinfo = document.querySelector(selectorUserinfo);
    }

    getUserInfo() {
        return {
            username: this._username.textContent,
            userinfo: this._userinfo.textContent
        }
    }

    setUserInfo(data) {
        ({ username: this._username.textContent, userinfo: this._userinfo.textContent } = data)
    }
}