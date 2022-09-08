(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=n}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_getElementError",value:function(e){return this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error"))}},{key:"_showInputError",value:function(e,t){this._getElementError(e),this._errorElement.textContent=t,this._errorElement.classList.add(this._config.errorClass),e.classList.add(this._config.inputErrorClass)}},{key:"_hideInputError",value:function(e){this._getElementError(e),this._errorElement.textContent="",e.classList.remove(this._config.inputErrorClass)}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"setBtnInvalid",value:function(){this._btnElement.classList.add(this._config.inactiveBtnClass),this._btnElement.disabled=!0}},{key:"setBtnValid",value:function(){this._btnElement.classList.remove(this._config.inactiveBtnClass),this._btnElement.disabled=!1}},{key:"_toggleBtnState",value:function(){this._hasInvalidInput()?this.setBtnInvalid():this.setBtnValid()}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._btnElement=this._formElement.querySelector(this._config.btnSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._toggleBtnState(),e._checkInputValidity(t)}))}))}},{key:"resetErrorInput",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleBtnState()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=[{place:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{place:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{place:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{place:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{place:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{place:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}];function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r){var o=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._link=t.link,this._name=t.place,this._templateSelector=n,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this.buttonLike=this._element.querySelector(".element__btn-like"),this._element.querySelector(".element__img").src=this._link,this._element.querySelector(".element__title").textContent=this._name,this._element.querySelector(".element__img").alt=this._name,this._setEventListeners(),this._element}},{key:"_handleCardDelete",value:function(){this._element.remove(),this._element=null}},{key:"_handleCardToggle",value:function(){this.buttonLike.classList.toggle("element__btn-like_active")}},{key:"_setEventListeners",value:function(){var e=this;this.buttonLike.addEventListener("click",(function(){return e._handleCardToggle()})),this._element.querySelector(".element__btn-delete").addEventListener("click",(function(){return e._handleCardDelete()})),this._element.querySelector(".element__img").addEventListener("click",(function(){return e._handleCardClick()}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._popupItem=document.querySelector(this._popup),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupItem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupItem.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__closed"))&&e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imgPopupPhoto=t._popupItem.querySelector(".popup__gallery-img"),t._imgPopupDescript=t._popupItem.querySelector(".popup__gallery-description"),t}return t=a,(n=[{key:"open",value:function(e){this._imgPopupPhoto.src=e.link,this._imgPopupPhoto.alt=e.place,this._imgPopupDescript.textContent=e.place,p(y(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e)).submitHandler=t,n._form=n._popupItem.querySelector(".popup__form"),n._inputs=n._popupItem.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.id]=t.value})),e}},{key:"setInputValue",value:function(e){this._inputs.forEach((function(t){t.value=e[t.id]}))}},{key:"setEventListeners",value:function(){var e=this;b(w(a.prototype),"setEventListeners",this).call(this),this._popupItem.addEventListener("submit",(function(t){t.preventDefault(),e.submitHandler(e._getInputValues())}))}},{key:"close",value:function(){this._form.reset(),b(w(a.prototype),"close",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){var n=t.selectorUsername,r=t.selectorUserinfo,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._username=document.querySelector(n),this._userinfo=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._username.textContent,about:this._userinfo.textContent}}},{key:"setUserInfo",value:function(e){this._username.textContent=e.name,this._userinfo.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"setDefaultUserData",value:function(e){this.setUserInfo(e),this.setUserAvatar(e)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),I=document.querySelector(".popup__form_edit"),L=document.querySelector(".profile__btn-edit"),q=document.querySelector(".profile__btn-add"),R=document.querySelector(".popup__form_add"),U=new P({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-50",headers:{authorization:"ee63acbb-034f-45d3-b9ee-d63e3206b34a","Content-Type":"application/json"}}),x={formSelector:".popup__form",inputSelector:".popup__input",btnSelector:".popup__submit-btn",inactiveBtnClass:"popup__submit-btn_inactive",errorClass:"popup__input-error_active",inputErrorClass:"popup__input_invalid"},T=function(e){return new o(e,".template",{handleCardClick:function(){return A.open(e)}}).generateCard()},B=new a({items:n,renderer:function(e){var t=T(e);B.addItem(t)}},".elements__list");B.renderItems(n);var D=new S({selectorUsername:".profile__username",selectorUserinfo:".profile__description",selectorAvatar:".profile__avatar"});U.getUserInfo().then((function(e){return D.setDefaultUserData(e)})).catch(console.log);var V=new O(".popup_type_profile-edit",(function(e){D.setUserInfo(e),V.close()}));V.setEventListeners();var A=new _(".popup_type_image-gallery");A.setEventListeners();var H=new O(".popup_type_image-add",(function(e){var t=T(e);B.addItem(t),H.close()}));H.setEventListeners();var z=new t(x,I),N=new t(x,R);z.enableValidation(),N.enableValidation(),L.addEventListener("click",(function(){V.setInputValue(D.getUserInfo()),z.resetErrorInput(),V.open()})),q.addEventListener("click",(function(){N.resetErrorInput(),H.open()}))})();