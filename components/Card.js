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

  _handleLike = () => {
    this._element
      .querySelector(likeButton)
      .classList.toggle("gallery__card-like_active");
  };

  _handleDelete = () => {
    this._element.remove();
  };

  _handlePreview() {
    openModal(cardImageModal);
  }

  _setEventListener() {
    this._element
      .querySelector(likeButton)
      .addEventListener("click", this._handleLike);

    cardTrash.addEventListener("click", this._handleDelete);
    cardImageEl.addEventListener("click", this._handlePreview);
    img.src = cardData.link;
    img.alt = cardData.name;
    cardImageTitle.textContent = cardData.name;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".gallery__card-image").style.backgroundImage =
      this._link;
    this._element.querySelector(".gallery__card-title").textContent =
      this._name;
  }
}

export default Card;
