import { http } from "../config/http";

export class NewsModel {
  #title;
  #description;
  #image;
  #category;

  constructor(title, description, category, image) {
    this.#title = title;
    this.#description = description;
    this.#category = category;
    this.#image = image;
  }

  static create(newsTitle, newsDescription, category, newsImage = null) {
    return new NewsModel(newsTitle, newsDescription, category, newsImage);
  }

  static async findAll() {
    try {
      return await http.get("/news");
    } catch (error) {
      console.log(error);
    }
  }

  static async findOne(id) {
    try {
      return await http.get("/news", { params: id });
    } catch (error) {
      console.log(error);
    }
  }

  get data() {
    return {
      title: this.#title,
      description: this.#description,
      image: this.#image,
      category: this.#category
    };
  }

  async save() {
    try {
      return await http.post("/news", { ...this.data });
    } catch (error) {
      console.log(error);
    }
  }
}
