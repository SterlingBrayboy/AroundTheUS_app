class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._name = nameSelector;
    this._job = jobSelector;
  }

  getUserInfo() {
    // const profileTitleInput = document.querySelector("#profile-name-input");
    // const profileTitle = document.querySelector(".profile__title");
    // const profileDescription = document.querySelector(".profile__description");
    // const profileDescriptionInput = document.querySelector(
    //   "#profile-description-input"
    // );
    // profileTitleInput.value = profileTitle.textContent;
    // profileDescriptionInput.value = profileDescription.textContent;
  }

  setUserInfo() {
    // const profileEditModal = document.querySelector("#profile__edit-modal");
    // const profileEditForm = profileEditModal.querySelector(".modal__form");
    // profileEditForm.addEventListener("submit", () => {
    //   const profileTitle = document.querySelector(".profile__title");
    //   const profileTitleInput = document.querySelector("#profile-name-input");
    //   const profileDescription = document.querySelector(
    //     ".profile__description"
    //   );
    //   const profileDescriptionInput = document.querySelector(
    //     "#profile-description-input"
    //   );
    //   profileTitle.textContent = profileTitleInput.value;
    //   profileDescription.textContent = profileDescriptionInput.value;
    // });
  }
}

export default UserInfo;
