class UserInfo {
  constructor(userNameSelector, userDescriptionSelector, userAvatarElement) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userDescriptionElement = document.querySelector(
      userDescriptionSelector
    );
    this._userAvatarElement = document.querySelector(userAvatarElement);
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
    this._userAvatarElement.src = avatar;
  }
}

export default UserInfo;
