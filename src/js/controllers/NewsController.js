import { NewsModel } from "../models/NewsModel";
import { NewsView } from "../views/NewsView";

export class NewsController {
  #arrNews;
  #page;
  #lastPage;
  #newsView;

  constructor() {
    NewsModel.paginate()
      .then((response) => {
        this.#arrNews = response.data.news;
        this.#page = response.data.page;
        this.#lastPage = response.data.lastPage;
      })
      .then(() => {
        this.#newsView = new NewsView(this.#arrNews);
        this.#newsView.showCards();
      });
  }
}
