import { NewsModel } from "../models/NewsModel.js";
import { SearchModel } from "../models/SearchModel.js";
import { HtmlElements } from "../utils/HtmlElements.js";
import { LoadingDisplay } from "../utils/LoadingDisplay.js";
import { NewsView } from "../views/NewsView.js";
import { SearchView } from "../views/SearchView.js";
import { NewsController } from "./NewsController.js";

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
    this.#searchInput.addEventListener("blur", (event) => {
      if (window.innerWidth < 980) {
        this.#searchView.toggleInputVisibility(event.type);
      } else {
        !this.#searchModel.searchValue ? this.#searchView.showButton() : "";
      }
    });
    this.#searchInput.addEventListener("change", async (event) => {
      LoadingDisplay.show();
      this.#searchModel.update(event.target.value);

      const news = await NewsModel.filter(this.#searchModel.searchValue);

      NewsView.showNewsCards(HtmlElements.newsCardsElement(), news);
      NewsController.addModalButtonEvents(news);

      LoadingDisplay.hidden();
    });

    if (window.innerWidth < 980)
      this.#searchButton.addEventListener("click", (event) => {
        this.#searchView.toggleInputVisibility(event.type);
      });
  }
}
