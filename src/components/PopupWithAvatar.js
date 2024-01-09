import Popup from "./Popup.js";

export default class PopupWithAvatar extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._iconEl = document.querySelector(".profile__icon");
  }

  setEventListeners() {
    this._formEl = this._popupElement.querySelector(".modal__form");

    this._iconEl.addEventListener("click", () => {
      this.open();
    });
    this._formEl.addEventListener("submit", (e) => {
      this._handleFormSubmit = handleFormSubmit;

      e.preventDefault();
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
