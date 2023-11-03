class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    // document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    // document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      close();
    }
  }

  setEventListeners() {
    const profileEditModal = document.querySelector("#profile__edit-modal");
    const profileAddModal = document.querySelector("#profile__add-modal");
    const profileEditCloseButton = profileEditModal.querySelector(
      "#profile-modal-close"
    );
    const profileAddCloseButton = profileAddModal.querySelector(
      "#modal-add-button-close"
    );

    profileAddCloseButton.addEventListener("click", () => {
      this.close(profileAddModal);
    });

    profileEditCloseButton.addEventListener("click", () => {
      this.close(profileEditModal);
    });

    // if (evt.target === evt.currentTarget) {
    //   close(evt.target);
    // }
  }
}

export default Popup;
