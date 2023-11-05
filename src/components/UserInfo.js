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

  setUserInfo(data) {
    this._userNameElement.textContent;
    this._userDescriptionElement.textContent;

    return data;
  }
}

export default UserInfo;
