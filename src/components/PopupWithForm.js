import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });

    this._form = this._popupElement.querySelector(".modal__form");
    // this._closeButton = document.querySelector("#picture__modal-button");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    // this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", this._handleFormSubmit);
    super.setEventListeners();
  }

  setEventListeners();

  _getInputValues() {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    // profileEditForm = profileEditModal.querySelector("modal__form");
    // profileAddModal = profileAddModal.querySelector("#add-card-form");
    // cardImageCloseButton = cardImageModal.querySelector(
    //   "#picture__modal-button"
    // );
  }
}

export default PopupWithForm;
