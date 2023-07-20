import { CategoryModel } from "../models/CategoryModel";
import { NewsModel } from "../models/NewsModel";
import { CreateNewsView } from "../views/CreateNewsView";

export class CreateNewsController {
  #formElement;
  #inputElements;
  #newsModel;
  #createNewsView;
  #categories;
  title;
  category;
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

    this.#formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.#newsModel = NewsModel.create(this.data);
      console.log(this.#newsModel);
    });
  }

  get data() {
    return {
      title: this.title,
      category: this.category,
      author: this.author,
      description: this.description,
      image: this.image
    };
  }
}
