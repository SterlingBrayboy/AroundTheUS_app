const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const config = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__container-button",
  inactiveButtonClass: "modal__container-button_disabled",
  inputErrorClass: "modal__input-error",
  errorClass: "modal__input-error_visible",
};

const variables = {
  profileEditModal: document.querySelector("#profile__edit-modal"),
  profileAddModal: document.querySelector("#profile__add-modal"),
  profileEditForm: document.querySelector(".modal__form"),
  profileAddForm: document.querySelector("#add-card-form"),
  addCardClass: document.querySelector("#profile__add-modal"),
  editCardClass: document.querySelector("#profile__edit-modal"),
  addCardTitle: document.querySelector("#modal-title-input"),
  addImageUrl: document.querySelector("#modal-image-url"),
  profileEditButton: document.querySelector("#profile__edit-button"),
  profileAddButton: document.querySelector(".profile__add-button"),
};

export { initialCards, config, variables };
