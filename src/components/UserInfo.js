class UserInfo {
  constructor(userNameSelector, userDescriptionSelector, avatarUrl) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userDescriptionElement = document.querySelector(
      userDescriptionSelector
    );
    this._avatarElement = document.querySelector(avatarUrl);
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

  setAvatar(avatarUrl) {
    this._avatarElement.src = avatarUrl;
  }
}

export default UserInfo;
