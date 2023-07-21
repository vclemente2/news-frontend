import { http } from "../config/http.js";

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
    return await http.get("/category");
  }

  static async findOne(id) {
    return await http.get("/category", { params: id });
  }

  get name() {
    return this.#name;
  }

  get color() {
    return this.#color;
  }

  async save() {
    return await http.post("/category", {
      name: this.name,
      color: this.color
    });
  }
}
