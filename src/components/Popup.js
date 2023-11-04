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

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    // this._popupElement.addEventlistener("click", (evt) => {
    //   if (evt.target.classList.contains(".modal" || ".modal__close")) {
    //     this.close(".modal");
    //   }
    // });
    // });
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
  }
}

export default Popup;
