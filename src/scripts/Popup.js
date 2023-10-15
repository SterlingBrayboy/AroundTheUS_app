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

  _handleEscClose() {}

  setEventListeners() {}
}
