import { http } from "../config/http.js";

export class NewsModel {
  #title;
  #category_id;
  #author;
  #description;
  #image;

  constructor(title, category_id, author, description, image) {
    this.#title = title;
    this.#category_id = category_id;
    this.#author = author;
    this.#description = description;
    this.#image = image;
  }

  static create({ title, category_id, author = "", description, image = "" }) {
    return new NewsModel(title, category_id, author, description, image);
  }

  static async paginate() {
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

  static async filter(text) {
    const response = await NewsModel.findAll();

    const filteredNews = response.data.filter((news) => {
      return (
        news.title.toLowerCase().includes(text.toLowerCase()) ||
        news.category.name.toLowerCase().includes(text.toLowerCase()) ||
        news.description.toLowerCase().includes(text.toLowerCase())
      );
    });

    return filteredNews;
  }

  get data() {
    return {
      title: this.#title,
      category_id: this.#category_id,
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

  static async findAll() {
    try {
      return await http.get("/news/all");
    } catch (error) {
      console.log(error);
    }
  }
}
