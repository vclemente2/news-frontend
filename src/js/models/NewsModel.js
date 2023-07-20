import { http } from "../config/http";

export class NewsModel {
  #title;
  #category;
  #author;
  #description;
  #image;

  constructor(title, category, author, description, image) {
    this.#title = title;
    this.#category = category;
    this.#author = author;
    this.#description = description;
    this.#image = image;
  }

  static create({ title, category, author = null, description, image = null }) {
    return new NewsModel(title, category, author, description, image);
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
      category: this.#category,
      author: this.#author,
      description: this.#description,
      image: this.#image
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
