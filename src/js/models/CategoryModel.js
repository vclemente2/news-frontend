import { http } from "../config/http";

export class CategoryModel {
  #name;
  #color;

  constructor(name, color) {
    this.#name = name;
    this.#color = color;
  }

  static create({ name, color = "#555555" }) {
    return new CategoryModel(name, color);
  }

  static async findAll() {
    try {
      return await http.get("/category");
    } catch (error) {
      console.log(error);
    }
  }

  static async findOne(id) {
    try {
      return await http.get("/category", { params: id });
    } catch (error) {
      console.log(error);
    }
  }

  get name() {
    return this.#name;
  }

  get color() {
    return this.#color;
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
