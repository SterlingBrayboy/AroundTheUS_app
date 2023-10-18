class UserInfo {
  constructor({ name, job }) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    this._name.textContent = profileTitleInput.value;
    this._job.textContent = rofileDescriptionInput.value;
  }

  setUserInfo() {
    this._name = document.querySelector(".profile__title");
    this._job = document.querySelector(".profile__description");
    this._profileTitleInput = document.querySelector("#profile-name-input");
    this._profileDescriptionInput = document.querySelector(
      "#profile-description-input"
    );

    profileTitleInput.value = this._name.textContent;
    profileDescriptionInput.value = this._job.textContent;
  }
}
