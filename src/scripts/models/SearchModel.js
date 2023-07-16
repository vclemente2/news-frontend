export class SearchModel {
  #searchValue;

  constructor(value) {
    this.#searchValue = value;
  }

  static create(searchValue = "") {
    return new SearchModel(searchValue);
  }

  get searchValue() {
    return this.#searchValue;
  }

  update(value) {
    this.#searchValue = value;
  }

  destroy() {
    this.#searchValue = "";
  }
}
