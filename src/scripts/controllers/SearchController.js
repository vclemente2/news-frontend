import { SearchModel } from "../models/SearchModel.js";

class SearchController {
  #searchInput;
  #searchModel;

  constructor() {
    this.#searchInput = document.querySelector("[data-search]");
    this.#searchModel = SearchModel.create();
    this.#searchInput.addEventListener("change", (event) => {
      this.#searchModel.update(event.target.value);

      // Acrescentar método do NewsModel que filtra as noticias;
      this.printInput();
    });
  }

  printInput() {
    console.log(this.#searchModel.searchValue);
  }
}

new SearchController();
