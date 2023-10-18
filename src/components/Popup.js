export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add(".modal_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove(".modal_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose() {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      closeModal(openedModal);
    }
  }

  setEventListeners() {
    this._profileEditModal = document.querySelector("#profile__edit-modal");
    this._profileAddModal = document.querySelector("#profile__add-modal");
    this._profileEditCloseButton = document.querySelectorAll(
      "#profile-modal-close"
    );
    this._profileAddCloseButton = document.querySelectorAll(
      "#modal-add-button-close"
    );

    this._profileEditCloseButton.addEventListener("click", () =>
      closeModal(this._profileEditModal)
    );

    this._profileAddCloseButton.addEventListener("click", () =>
      closeModal(this._profileAddModal)
    );

    if (evt.target === evt.currentTarget) {
      closeModal(evt.target);
    }
  }
}
