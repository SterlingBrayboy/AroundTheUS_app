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

// VARIABLES & ELEMENTS

const profileEditButton = document.querySelector("#profile__edit-button");
const profileEditModal = document.querySelector("#profile__edit-modal");
const profileAddModal = document.querySelector("#profile__add-modal");
const profileEditCloseButton = profileEditModal.querySelector("#modal__close");
const profileAddCloseButton = profileAddModal.querySelector("#modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const addCardTitle = document.querySelector("#modal-title-input");
const addImageUrl = document.querySelector("#modal-image-url");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const profileAddButton = document.querySelector(".profile__add-button");
const cardImageModal = document.querySelector(".modal__card-overlay");
const modalImageCloseButton = cardImageModal.querySelector("#modal__close");
const cardListEl = document.querySelector(".gallery__cards");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// FUNCTIONS

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function fillProfileForm() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

// GET CARD FUNCTION & LIKE BUTTON

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".gallery__card-image");
  // const cardImageModal = cardElement.querySelector(".modal__card-image");
  // const cardImageTitle = cardElement.querySelector(".modal__card-title");
  cardImageEl.addEventListener("click", () => {
    openModal(cardImageModal);
  });
  const cardTitleEl = cardElement.querySelector(".gallery__card-title");
  const likeButton = cardElement.querySelector(".gallery__card-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("gallery__card-like_active");
  });
  const cardTrash = cardElement.querySelector(".gallery__card-trash");
  cardTrash.addEventListener("click", () => {
    cardElement.remove();
  });
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  // cardImageModal.src = cardData.link;
  // cardImageModal.alt = cardData.name;
  // cardImageTitle.textContent = cardData.name;
  return cardElement;
}

// EVENT HANDLERS

function handlerProfileEditSubmit(evt) {
  evt.preventDefault();
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
}

// EVENT LISTENERS

// Modal Form

profileEditButton.addEventListener("click", () => openModal(profileEditModal));
profileEditCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);
profileAddButton.addEventListener("click", () => openModal(profileAddModal));
profileAddCloseButton.addEventListener("click", () =>
  closeModal(profileAddModal)
);

// Save Button

profileEditForm.addEventListener("submit", handlerProfileEditSubmit);
profileAddModal.addEventListener("submit", handlerAddCardSubmit);

// Image Modal

modalImageCloseButton.addEventListener("click", () => {
  closeModal(cardImageModal);
});

// Card Data

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
