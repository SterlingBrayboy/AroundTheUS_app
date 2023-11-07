import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWIthImage.js";

import FormValidator from "../components/FormValidator.js";

import UserInfo from "../components/UserInfo.js";

import Section from "../components/Section.js";

import Card from "../components/Card.js";

import "./index.css";

import { initialCards, config, variables } from "../utils/constants.js";

// SECTION

const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = createCard(cardData);
      section.addItem(card);
    },
  },
  "gallery__cards"
);

section.renderItems();

// POPUP WITH IMAGE

const popupWithImage = new PopupWithImage("#picture-modal");

popupWithImage.setEventListeners();

// CARD

function handleImageClick(cardData) {
  popupWithImage.open(cardData);
}

function renderCard(cardData) {
  const addcard = new Card(
    cardData,
    "#card-template",
    handleImageClick
  ).generateCard();
  section.addItem(addcard);
}

function createCard(cardData) {
  const newcard = new Card(
    cardData,
    "#card-template",
    handleImageClick
  ).generateCard();
  return newcard;
}

// FORM VALIDATOR

// const profileEditModal = document.querySelector("#profile__edit-modal");
// const profileAddModal = document.querySelector("#profile__add-modal");

const addFormValidator = new FormValidator(
  config,
  variables.profileAddSelector
);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(
  config,
  variables.profileEditSelector
);
editFormValidator.enableValidation();

// POPUP WITH FORM

// const profileAddForm = profileAddModal.querySelector("#add-card-form");
// const addCardSelector = "#profile__add-modal";
// const editCardSelector = "#profile__edit-modal";
// const addCardTitle = document.querySelector("#modal-title-input");
// const addImageUrl = document.querySelector("#modal-image-url");
// const profileEditButton = document.querySelector("#profile__edit-button");
// const profileAddButton = document.querySelector(".profile__add-button");

function handleAddCardSubmit() {
  // e.preventDefault();
  const name = variables.addCardTitleSelector.value;
  const link = variables.addImageUrlSelector.value;
  renderCard({ name, link });
  addPopup.close();
  variables.profileAddFormSelector.reset();
  addFormValidator.toggleButtonState();
}

const addPopup = new PopupWithForm(
  variables.addCardSelector,
  handleAddCardSubmit
);

function openAddForm() {
  addPopup.open();
}

addPopup.setEventListeners();

const editPopup = new PopupWithForm(
  variables.editCardSelector,
  handleEditFormSubmit
);

function openEditForm() {
  editPopup.open();
}

editPopup.setEventListeners();

variables.profileEditButtonSelector.addEventListener("click", () => {
  openEditForm();
});

variables.profileAddButtonSelector.addEventListener("click", () =>
  openAddForm()
);

// USER INFO

const userinfo = new UserInfo(".profile__title", ".profile__description");

function handleEditFormSubmit(inputValues) {
  userinfo.setUserInfo(inputValues.name, inputValues.description);
  editPopup.setEventListeners();
  variables.profileEditSelector.classList.remove("modal_opened");
}
