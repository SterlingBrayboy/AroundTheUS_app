class UserInfo {
  constructor(userNameSelector, userDescriptionSelector, userAvatar) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userDescriptionElement = document.querySelector(
      userDescriptionSelector
    );
    this._userAvatar = document.querySelector(userAvatar);
  }

  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      description: this._userDescriptionElement.textContent,
    };
  }

  setUserInfo(name, description, avatar) {
    this._userNameElement.textContent = name;
    this._userDescriptionElement.textContent = description;
    this._userAvatar.src = avatar;
  }
}

export default UserInfo;
