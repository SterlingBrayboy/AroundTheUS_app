import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWIthImage.js";

import FormValidator from "../components/FormValidator.js";

import UserInfo from "../components/UserInfo.js";

import Section from "../components/Section.js";

import Card from "../components/Card.js";

import "./index.css";

import { initialCards, config } from "../utils/constants.js";

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

const profileEditModal = document.querySelector("#profile__edit-modal");
const profileAddModal = document.querySelector("#profile__add-modal");

const addFormEl = profileAddModal;
const editFormEl = profileEditModal;

const addFormValidator = new FormValidator(config, addFormEl);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, editFormEl);
editFormValidator.enableValidation();

// POPUP WITH IMAGE

const popupWithImage = new PopupWithImage("#picture-modal");

popupWithImage.setEventListeners();

// POPUP WITH FORM

const addCardSelector = "#profile__add-modal";
const editCardSelector = "#profile__edit-modal";
const addCardTitle = document.querySelector("#modal-title-input");
const addImageUrl = document.querySelector("#modal-image-url");
const profileEditButton = document.querySelector("#profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");

function handleAddCardSubmit() {
  // e.preventDefault();
  const name = addCardTitle.value;
  const link = addImageUrl.value;
  renderCard({ name, link });
  addPopup.close();
  profileAddForm.reset();
  addFormValidator.toggleButtonState();
}

const addPopup = new PopupWithForm(addCardSelector, handleAddCardSubmit);

function openAddForm() {
  addPopup.open();
}

addPopup.setEventListeners();

const editPopup = new PopupWithForm(editCardSelector, handleProfileEditSubmit);

function openEditForm() {
  editPopup.open();
}

editPopup.setEventListeners();

profileEditButton.addEventListener("click", () => {
  openEditForm();
});

profileAddButton.addEventListener("click", () => openAddForm());

// USER INFO

const userinfo = new UserInfo(
  "#profile-name-input",
  "#profile-description-input"
);

userinfo.getUserInfo();

userinfo.setUserInfo();

const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddForm = profileAddModal.querySelector("#add-card-form");

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileAddModal.addEventListener("submit", handleAddCardSubmit);

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileEditModal.classList.remove("modal_opened");
}
