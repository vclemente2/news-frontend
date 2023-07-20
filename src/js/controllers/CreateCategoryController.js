import { CategoryModel } from "../models/CategoryModel.js";

export class CreateCategoryController {
  #formElement;
  #inputElements;
  #categoryModel;
  name;
  color;

  constructor() {
    this.#formElement = document.querySelector("[data-categoryForm]");
    this.#inputElements = document.querySelectorAll("[data-categoryInput]");

    this.#inputElements.forEach((element) => {
      element.addEventListener("change", (event) => {
        const input = element.getAttribute("data-categoryInput");

        this[`${input}`] = event.target.value;
      });
    });

    this.#formElement.addEventListener("submit", async (event) => {
      event.preventDefault();
      this.#categoryModel = CategoryModel.create(this.data);

      const response = await this.#categoryModel.save();

      response.status === 201
        ? alert("Categoria cadastrada com sucesso")
        : alert("Oops! Tivemos um erro");
    });
  }

  get data() {
    return {
      name: this.name,
      color: this.color
    };
  }
}
