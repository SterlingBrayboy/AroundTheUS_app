const config = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__container-button",
  inactiveButtonClass: "modal__container-button_disabled",
  inputErrorClass: "modal__input-error",
  errorClass: "modal__input-error_visible",
};

const variables = {
  profileEditModal: "#profile__edit-modal",
  profileAddModal: "#profile__add-modal",
  profileEditForm: ".modal__form",
  profileAddForm: document.querySelector("#add-card-form"),
  nameInput: document.querySelector("#profile-name-input"),
  descriptionInput: document.querySelector("#profile-description-input"),
  avatarInput: document.querySelector("#avatar-url-input"),
  avatarImg: "profile__avatar",
  avatarModal: "#avatar-modal",
  addCardClass: "#profile__add-modal",
  editCardClass: "#profile__edit-modal",
  deleteCardClass: "#delete-modal",
  deleteCardButtonSelector: document.querySelector(".gallery__card-trash"),
  profileEditButtonSelector: document.querySelector("#profile__edit-button"),
  profileAddButtonSelector: document.querySelector(".profile__add-button"),
};

export { config, variables };
