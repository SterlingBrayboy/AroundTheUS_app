class UserInfo {
  constructor(userNameSelector, userDescriptionSelector, userAvatarSelector) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userDescriptionElement = document.querySelector(
      userDescriptionSelector
    );
    this._userAvatarSelector = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._userNameElement.textContent,
      description: this._userDescriptionElement.textContent,
    };
  }

  setUserInfo(name, description) {
    this._userNameElement.textContent = name;
    this._userDescriptionElement.textContent = description;
  }

  setAvatar(avatar) {
    this._userAvatarSelector.src = avatar;
  }
}

export default UserInfo;
