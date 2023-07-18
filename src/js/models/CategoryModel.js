import { http } from "../config/http";

export class CategoryModel {
  #name;
  #color;

  constructor(name, color) {
    this.#name = name;
    this.#color = color;
  }

  static create(categoryName, categoryColor) {
    return new CategoryModel(categoryName, categoryColor);
  }

  get name() {
    return this.#name;
  }

  get color() {
    return this.#color;
  }

  async findAll() {
    try {
      return await http.get("/category");
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id) {
    try {
      return await http.get("/category", { params: id });
    } catch (error) {
      console.log(error);
    }
  }

  async save() {
    try {
      return await http.post("/category", {
        name: this.name,
        color: this.color
      });
    } catch (error) {
      console.log(error);
    }
  }
}
