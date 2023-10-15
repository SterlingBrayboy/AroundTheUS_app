import Popup from "../Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });

    this._popupForm = this.popupElement.querySelector("modal__form");
    this._handleFormSubmit = handleFormSubmitSubmit;
  }

  _getInputValues() {}

  close() {
    this._popupForm.reset();
    super.close();
  }
}

const editProfilePopup = new PopupWithForm("#profile__edit-modal", () => {});
editProfilePopup.open();

editProfilePopup.close();

const newCardPopup = new PopupWithForm("#profile__add-modal", () => {});
newCardPopup.open();

newCardPopup.close();
