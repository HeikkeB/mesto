export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this.renderer = renderer;
        this._container = containerSelector;
    }

    renderItems() {
        this._items.forEach(item => this.renderer(item));
    }

    addItem(item) {
        this._container.prepend(item);
    }
}