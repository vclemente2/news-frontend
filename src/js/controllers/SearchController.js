import { NewsModel } from "../models/NewsModel.js";
import { SearchModel } from "../models/SearchModel.js";
import { NewsView } from "../views/NewsView.js";
import { SearchView } from "../views/SearchView.js";

export class SearchController {
  #searchInput;
  #searchModel;
  #searchButton;
  #searchView;
  #newsView;

  constructor() {
    this.#searchInput = document.querySelector("[data-search]");
    this.#searchModel = SearchModel.create();
    this.#searchButton = document.querySelector("[data-searchIcon]");
    this.#searchView = new SearchView(this.#searchInput, this.#searchButton);

    this.#searchInput.addEventListener("focus", () => {
      this.#searchView.hiddenButton();
    });
    this.#searchInput.addEventListener("blur", (event) => {
      if (window.innerWidth < 980) {
        this.#searchView.toggleInputVisibility(event.type);
      } else {
        !this.#searchModel.searchValue ? this.#searchView.showButton() : "";
      }
    });
    this.#searchInput.addEventListener("change", async (event) => {
      this.#searchModel.update(event.target.value);

      const news = await NewsModel.filter(this.#searchModel.searchValue);

      this.#newsView = new NewsView(news);
      this.#newsView.showCards();
    });

    if (window.innerWidth < 980)
      this.#searchButton.addEventListener("click", (event) => {
        this.#searchView.toggleInputVisibility(event.type);
      });
  }
}
