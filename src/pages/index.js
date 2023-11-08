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
      createCard(cardData);
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

function createCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  section.addItem(card.generateCard());
}

function handleAddCardSubmit(inputValues) {
  createCard(inputValues);
  variables.profileAddForm.reset();
  addFormValidator.toggleButtonState();
}

// FORM VALIDATOR

const addFormValidator = new FormValidator(config, variables.profileAddModal);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, variables.profileEditModal);
editFormValidator.enableValidation();

// POPUP WITH FORM

const addPopup = new PopupWithForm(variables.addCardClass, handleAddCardSubmit);

function openAddForm() {
  addPopup.open();
}

addPopup.setEventListeners();

const editPopup = new PopupWithForm(
  variables.editCardClass,
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
}
