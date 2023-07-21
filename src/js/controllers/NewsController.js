import { NewsModel } from "../models/NewsModel.js";
import { NewsView } from "../views/NewsView.js";

export class NewsController {
  #arrNews;
  // #page;
  // #lastPage;
  #newsView;

  constructor() {
    NewsModel.findAll()
      .then((response) => {
        this.#arrNews = response.data;
        // this.#page = response.data.page;
        // this.#lastPage = response.data.lastPage;
      })
      .then(() => {
        this.#newsView = new NewsView(this.#arrNews);
        this.#newsView.showCards();
      });
  }
}
