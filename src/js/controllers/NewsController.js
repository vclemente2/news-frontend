import { NewsModel } from "../models/NewsModel.js";
import { HtmlElements } from "../utils/HtmlElements.js";
import { NewsView } from "../views/NewsView.js";

export class NewsController {
  #arrNews;
  static currentNews;
  // #page;
  // #lastPage;

  constructor() {
    NewsModel.findAll()
      .then((response) => {
        this.#arrNews = response.data;
        // this.#page = response.data.page;
        // this.#lastPage = response.data.lastPage;
      })
      .then(() => {
        NewsView.showNewsCards(HtmlElements.newsCardsElement(), this.#arrNews);

        NewsController.addModalButtonEvents(this.#arrNews);
      });
  }

  static addModalButtonEvents(arrNews) {
    HtmlElements.buttonsOpenNewsModalElement().forEach((link) => {
      link.addEventListener("click", (event) => {
        NewsController.currentNews = event.currentTarget;

        console.log(NewsController.currentNews);

        NewsView.showModal(
          HtmlElements.newsModalElement(),
          NewsController.currentNews.id,
          arrNews
        );

        HtmlElements.buttonCloseModalElement().addEventListener("click", () => {
          NewsView.closeModal(HtmlElements.newsModalElement());
        });
      });
    });
  }
}
