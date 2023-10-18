import Popup from "../Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });

    this._popupForm = this.popupElement.querySelector("modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    this._profileEditForm.addEventListener("submit", this._handleFormSubmit);
    this._profileAddModal.addEventListener("submit", this._handleFormSubmit);
    this._cardImageCloseButton.addEventListener("click", this._close());
  }

  _getInputValues() {
    this._profileEditForm = profileEditModal.querySelector(".modal__form");
    this._profileAddModal = profileAddModal.querySelector("#add-card-form");
    this._cardImageCloseButton = cardImageModal.querySelector(
      "#picture__modal-button"
    );
  }
}

const editProfilePopup = new PopupWithForm("#profile__edit-modal", () => {});
editProfilePopup.open();

editProfilePopup.close();

const newCardPopup = new PopupWithForm("#profile__add-modal", () => {});
newCardPopup.open();

newCardPopup.close();
