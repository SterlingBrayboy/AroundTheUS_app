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

  setUserInfo(name, description) {
    this._userNameElement.textContent = name.value;
    this._userDescriptionElement.textContent = description.value;
  }
}

export default UserInfo;
