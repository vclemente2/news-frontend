import { SearchModel } from "../models/SearchModel.js";
import { SearchView } from "../views/SearchView.js";

export class SearchController {
  #searchInput;
  #searchModel;
  #searchButton;
  #searchView;

  constructor() {
    this.#searchInput = document.querySelector("[data-search]");
    this.#searchModel = SearchModel.create();
    this.#searchButton = document.querySelector("[data-searchIcon]");
    this.#searchView = new SearchView(this.#searchInput, this.#searchButton);

    this.#searchInput.addEventListener("focus", () => {
      this.#searchView.hiddenButton();
    });
    this.#searchInput.addEventListener("blur", () => {
      if (!this.#searchModel.searchValue) this.#searchView.showButton();
    });
    this.#searchInput.addEventListener("change", (event) => {
      this.#searchModel.update(event.target.value);

      // Acrescentar método do NewsModel que filtra as noticias;
      this.printInput();
    });
    if (window.innerWidth < 980)
      this.#searchButton.addEventListener("click", () => {
        this.#searchView.showInput();
      });
  }

  printInput() {
    console.log(this.#searchModel.searchValue);
  }
}
