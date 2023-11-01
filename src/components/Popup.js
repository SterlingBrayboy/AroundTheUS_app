class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose() {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      close(openedModal);
    }
  }

  setEventListeners() {
    this._popupElement.querySelectorAll("modal_opened");

    if (evt.target === evt.currentTarget) {
      closeModal(evt.target);
    }
  }
}

export default Popup;
