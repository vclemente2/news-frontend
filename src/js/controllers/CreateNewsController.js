import { CategoryModel } from "../models/CategoryModel.js";
import { NewsModel } from "../models/NewsModel.js";
import { CreateNewsView } from "../views/CreateNewsView.js";

export class CreateNewsController {
  #formElement;
  #inputElements;
  #newsModel;
  #createNewsView;
  #categories;
  title;
  category_id;
  author;
  description;
  image;

  constructor() {
    this.#formElement = document.querySelector("[data-newsForm]");
    this.#inputElements = document.querySelectorAll("[data-newsInput]");
    (async () => {
      const { data } = await CategoryModel.findAll();

      this.#categories = data;
      this.#createNewsView = new CreateNewsView(this.#categories);
      this.#createNewsView.showCategories();
    })();

    this.#inputElements.forEach((element) => {
      element.addEventListener("change", (event) => {
        const input = element.getAttribute("data-newsInput");

        this[`${input}`] = event.target.value;
      });
    });

    this.#formElement.addEventListener("submit", async (event) => {
      event.preventDefault();
      this.#newsModel = NewsModel.create(this.data);

      try {
        const response = await this.#newsModel.save();
        this.#createNewsView.showModal(response.status);
      } catch (error) {
        this.#createNewsView.showModal(error.response.status);
      }
    });
  }

  get data() {
    return {
      title: this.title,
      category_id: Number(this.category_id),
      author: this.author,
      description: this.description,
      image: this.image
    };
  }
}
