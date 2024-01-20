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
  profileEditForm: document.querySelector("#edit-card-form"),
  profileAddForm: document.querySelector("#add-card-form"),
  nameInput: document.querySelector("#profile-name-input"),
  profileTitle: document.querySelector("#profile-title"),
  descriptionInput: document.querySelector("#profile-description-input"),
  avatarInput: document.querySelector("#avatar-url-input"),
  avatarImage: document.querySelector(".profile__avatar"),
  avatarIcon: document.querySelector(".profile__icon"),
  avatarModal: "#avatar-modal",
  avatarModalButton: document.querySelector("#avatar-modal-button"),
  addCardClass: "#profile__add-modal",
  addModalButton: document.querySelector("#add-button"),
  editCardClass: "#profile__edit-modal",
  deleteCardClass: "#delete-modal",
  editModalButton: document.querySelector("#edit-button"),
  profileEditButton: document.querySelector("#profile__edit-button"),
  profileAddButton: document.querySelector(".profile__add-button"),
};

export { config, variables };
