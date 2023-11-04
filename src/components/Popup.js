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
    const profileEditForm = profileEditModal.querySelector(".modal__form");
    const profileAddForm = profileAddModal.querySelector("#add-card-form");
    const profileEditModal = document.querySelector("#profile__edit-modal");
    const profileAddModal = document.querySelector("#profile__add-modal");
    if (evt.key === "Escape") {
      this.close(profileAddForm);
      this.close(profileEditForm);
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
  }
}

export default Popup;
