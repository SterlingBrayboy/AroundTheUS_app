class Section {
  constructor({ items, renderer }, cardElement) {
    this._items = items;
    this._renderer = renderer;
    this._cardElement = cardElement;
  }

  renderItems() {
    this._items.forEach((item) => {});
  }

  addItem(item) {
    const item = document.querySelector(cardElements).content;
  }
}
