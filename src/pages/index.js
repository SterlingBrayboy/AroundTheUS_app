import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWIthImage.js";

import FormValidator from "../components/FormValidator.js";

import UserInfo from "../components/UserInfo.js";

import Section from "../components/Section.js";

import Card from "../components/Card.js";

import Api from "../components/Api.js";

import "./index.css";

import { initialCards, config, variables } from "../utils/constants.js";

// API

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "ebfbe580-59e8-4623-9d1e-5edf14608279",
    "Content-Type": "application/json",
  },
});

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

api
  .getInitialCards()
  .then((res) => {
    console.log(res);
  })
  .catch(console.error);

api
  .loadInfo()
  .then((res) => {
    console.log(res);
  })
  .catch(console.error);

api
  .editProfile()
  .then((res) => {
    console.log(res);
  })
  .catch(console.error);

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
  addPopup.close();
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
  const user = userinfo.getUserInfo();
  variables.nameInput.value = user.name;
  variables.descriptionInput.value = user.description;
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
  editPopup.close();
}
