import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });

    this._popupForm = this._popupElement.querySelector("modal__form");
    this._popupAddForm = this._popupElement.querySelector("#add-card-form");
    this._closeButton = document.querySelector("#picture__modal-button");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", this._handleFormSubmit);
    this._closeButton.addEventListener("click", close());
  }

  _getInputValues() {
    // profileEditForm = profileEditModal.querySelector("modal__form");
    // profileAddModal = profileAddModal.querySelector("#add-card-form");
    // cardImageCloseButton = cardImageModal.querySelector(
    //   "#picture__modal-button"
    // );
  }
}

export default PopupWithForm;

const newCardPopup = new PopupWithForm("#profile__add-modal", () => {});
