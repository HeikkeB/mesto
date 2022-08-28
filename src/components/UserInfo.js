export default class UserInfo {
    constructor({ selectorUsername, selectorUserinfo }) {
        this._username = selectorUsername;
        this._userinfo = selectorUserinfo;
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