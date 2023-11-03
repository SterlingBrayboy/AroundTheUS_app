import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });

    this._form = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    super.close();
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", this._handleFormSubmit);
    super.setEventListeners();
  }

  _getInputValues() {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
  }
}

export default PopupWithForm;
