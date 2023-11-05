import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });

    this._form = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues);
    });
    super.setEventListeners();
  }

  _getInputValues() {
    return {
      name: "#profile-name-input",
      description: "#profile-description-input",
    };
  }
}

export default PopupWithForm;
