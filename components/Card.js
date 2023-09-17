class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector.firstElementChild.cloneNode(true);

    return cardElement;
  }

  _handleLike() {
    const likeButton = cardElement.querySelector(".gallery__card-like");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("gallery__card-like_active");
    });
  }

  _handleDelete() {
    const cardTrash = cardElement.querySelector(".gallery__card-trash");
    cardTrash.addEventListener("click", () => {
      cardElement.remove();
    });
  }

  _handlePreview() {}

  _getEventListener() {}

  generateCard() {
    this._element = this._getTemplate();
    this._getEventListeners();

    this._element.querySelector(".gallery__card-image").style.backgroundImage =
      this._link;
    this._element.querySelector(".gallery__card-title").textContent =
      this._name;
  }
}

export default Card;
