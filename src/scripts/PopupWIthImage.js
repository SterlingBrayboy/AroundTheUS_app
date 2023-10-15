import Popup from "../Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ link, name }) {
    this.popupElement.querySelector(".modal__picture-title").textContent = name;
    const image = this.popupElement.querySelector(".modal__picture-src");
    image.src = link;
    image.alt = `A photo of ${name}`;
    super.open();
  }
}

export default PopupWithImage;
