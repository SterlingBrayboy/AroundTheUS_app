class UserInfo {
  constructor({ userNameSelector, userDescriptionSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userDescriptionElement = document.querySelector(
      userDescriptionSelector
    );
  }

  getUserInfo() {
    return {
      name: this._userNameElement,
      description: this._userDescriptionElement,
    };
  }

  setUserInfo(cardData) {
    cardData.name = this._userNameElement;
    cardData.description = this._userDescriptionElement;
  }
}

export default UserInfo;
