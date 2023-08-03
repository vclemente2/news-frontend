import { CategoryModel } from "../models/CategoryModel.js";
import { LoadingDisplay } from "../utils/LoadingDisplay.js";
import { CreateCategoryView } from "../views/CreateCategoryView .js";

export class CreateCategoryController {
  #formElement;
  #inputElements;
  #categoryModel;
  #createCategoryView;
  name;
  color;

  constructor() {
    this.#formElement = document.querySelector("[data-categoryForm]");
    this.#inputElements = document.querySelectorAll("[data-categoryInput]");
    this.#createCategoryView = new CreateCategoryView();

    this.#inputElements.forEach((element) => {
      element.addEventListener("change", (event) => {
        const input = element.getAttribute("data-categoryInput");

        this[`${input}`] = event.target.value;
      });
    });

    this.#formElement.addEventListener("submit", async (event) => {
      event.preventDefault();

      LoadingDisplay.show();
      this.#categoryModel = CategoryModel.create(this.data);

      try {
        const response = await this.#categoryModel.save();
        this.#createCategoryView.showModal(response.status);
        LoadingDisplay.hidden();
      } catch (error) {
        this.#createCategoryView.showModal(error.response.status);
        LoadingDisplay.hidden();
      }
    });
  }

  get data() {
    return {
      name: this.name,
      color: this.color
    };
  }
}
