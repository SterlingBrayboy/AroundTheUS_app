import Popup from "../components/Popup.js";

import PopupWithForm from "../components/PopupWithForm.js";

import FormValidator from "../components/FormValidator.js";

import UserInfo from "../components/UserInfo.js";

import Section from "../components/Section.js";

import Card from "../components/Card.js";

import "./index.css";

import { initialCards, config } from "../utils/utils.js";

// POPUP

const PopupParent = new Popup("#profile__add-modal", () => {});

// POPUP WITH FORM

const PopupChild = new PopupWithForm("#profile__edit-modal", () => {});

// FORM VALIDATOR

const profileEditModal = document.querySelector("#profile__edit-modal");
const profileAddModal = document.querySelector("#profile__add-modal");

const addFormEl = profileAddModal;
const editFormEl = profileEditModal;

const addFormValidator = new FormValidator(config, addFormEl);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, editFormEl);
editFormValidator.enableValidation();

// USER INFO

// const userinfo = new UserInfo(nameSelector, jobSelector);

// SECTION

const section = new Section({
  data: initialCards,
  renderer: (cardData) => {
    renderCard(cardData);
  },
});

// initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

// CARD

function renderCard(cardData, wrapper) {
  const card = new Card(
    cardData,
    "#card-template",
    handleImageClick
  ).generateCard();
  wrapper.prepend(card);
}

// VARIABLES & ELEMENTS

const profileEditButton = document.querySelector("#profile__edit-button");
const cardImageModal = document.querySelector("#picture-modal");
const profileEditCloseButton = profileEditModal.querySelector(
  "#profile-modal-close"
);
const profileAddCloseButton = profileAddModal.querySelector(
  "#modal-add-button-close"
);
const cardImageCloseButton = cardImageModal.querySelector(
  "#picture__modal-button"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const addCardTitle = document.querySelector("#modal-title-input");
const addImageUrl = document.querySelector("#modal-image-url");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddForm = profileAddModal.querySelector("#add-card-form");
const profileAddButton = document.querySelector(".profile__add-button");
const modalImageCloseButton = cardImageModal.querySelector(
  "#picture__modal-button"
);
const cardListEl = document.querySelector(".gallery__cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const img = cardImageModal.querySelector(".modal__picture-src");

// FUNCTIONS

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
  document.removeEventListener("keydown", closeModalByEscape);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
  document.addEventListener("keydown", closeModalByEscape);
}

function fillProfileForm() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleImageClick(cardData) {
  const cardImageEl = document.querySelector(".modal__picture-src");
  const cardTitleEl = document.querySelector(".gallery__card-title");
  const cardImageTitle = document.querySelector(".modal__picture-title");
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardImageTitle.textContent = cardData.name;
  openModal(cardImageModal);
}

// Mouse Click Key Function To Close Modals

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

// Keydown Escape Key Function To Close Modals

function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

// EVENT HANDLERS

function handlerProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handlerAddCardSubmit(e) {
  e.preventDefault();
  const name = addCardTitle.value;
  const link = addImageUrl.value;
  renderCard({ name, link }, cardListEl);
  closeModal(profileAddModal);
  profileAddForm.reset();
  addFormValidator.toggleButtonState();
}

// EVENT LISTENERS

// Modal Form

profileEditButton.addEventListener("click", () => {
  fillProfileForm();
  openModal(profileEditModal);
});
profileEditCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);
profileAddButton.addEventListener("click", () => openModal(profileAddModal));
profileAddCloseButton.addEventListener("click", () =>
  closeModal(profileAddModal)
);

const modal = document.querySelector(".modal");

// Save Button

profileEditForm.addEventListener("submit", handlerProfileEditSubmit);
profileAddModal.addEventListener("submit", handlerAddCardSubmit);

// Image Modal

cardImageCloseButton.addEventListener("click", () => {
  closeModal(cardImageModal);
});
