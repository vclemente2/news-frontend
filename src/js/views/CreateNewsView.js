export class CreateNewsView {
  #categories;
  #categoryInputElement;

  constructor(categories) {
    this.#categories = categories;
    this.#categoryInputElement = document.querySelector(
      '[data-newsInput="category"]'
    );
  }

  showCategories() {
    this.#categoryInputElement.insertAdjacentHTML(
      "beforeend",
      this.#generateCategoryList(this.#categories)
    );
  }

  #generateCategoryList() {
    return this.#categories.reduce((acc, cur) => {
      return (acc += this.#template(cur.name));
    }, "");
  }

  #template(category) {
    return `
      <option value=${category}>${category}</option>
    `;
  }
}
