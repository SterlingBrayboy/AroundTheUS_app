import PopupWithForm from "../components/PopupWithForm.js";

import PopupWithImage from "../components/PopupWIthImage.js";

import FormValidator from "../components/FormValidator.js";

import UserInfo from "../components/UserInfo.js";

import Section from "../components/Section.js";

import Card from "../components/Card.js";

import "./index.css";

import { initialCards, config } from "../utils/utils.js";

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

// POPUP WITH FORM

const addCardSelector = "#profile__add-modal";
const editCardSelector = "#profile__edit-modal";
const addCardTitle = document.querySelector("#modal-title-input");
const addImageUrl = document.querySelector("#modal-image-url");
const profileEditButton = document.querySelector("#profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const cardImageModal = document.querySelector("#picture-modal");
const cardImageCloseButton = cardImageModal.querySelector(
  "#picture__modal-button"
);

function handlerAddCardSubmit() {
  // e.preventDefault();
  const name = addCardTitle.value;
  const link = addImageUrl.value;
  renderCard({ name, link });
  addPopup.close();
  profileAddForm.reset();
  addFormValidator.toggleButtonState();
}

const addPopup = new PopupWithForm(addCardSelector, handlerAddCardSubmit);

function newPlace() {
  addPopup.open();
}

addPopup.setEventListeners();

const editPopup = new PopupWithForm(editCardSelector, handlerProfileEditSubmit);

function editInfo() {
  editPopup.open();
}

editPopup.setEventListeners();

profileAddModal.addEventListener("click", (evt) => {
  if (evt.target === evt.currentTarget) {
    addPopup.close(profileAddModal);
  }
});

profileEditModal.addEventListener("click", (evt) => {
  if (evt.target === evt.currentTarget) {
    editPopup.close();
  }
});

cardImageModal.addEventListener("click", (evt) => {
  if (evt.target === evt.currentTarget) {
    popupWithImage.close();
  }
});

profileEditButton.addEventListener("click", () => {
  // fillProfileForm;
  editInfo();
});

profileAddButton.addEventListener("click", () => newPlace());

cardImageCloseButton.addEventListener("click", () => {
  popupWithImage.close();
});

// const modal = document.querySelector(".modal");

// function closeModalOnRemoteClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     editPopup.close();
//   }
// }

// Modals

// function fillProfileForm() {
//   userinfo.getUserInfo();

//   userinfo.setUserInfo();
// }

// USER INFO

const userinfo = new UserInfo("profile__title", "profile__description");

userinfo.getUserInfo();

userinfo.setUserInfo();

const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddForm = profileAddModal.querySelector("#add-card-form");

profileEditForm.addEventListener("submit", handlerProfileEditSubmit);
profileAddModal.addEventListener("submit", handlerAddCardSubmit);

function handlerProfileEditSubmit(e) {
  e.preventDefault();
  profileEditModal.classList.remove("modal_opened");
}
