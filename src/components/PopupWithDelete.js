import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", () => {
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
