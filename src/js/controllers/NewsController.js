import { NewsModel } from "../models/NewsModel.js";
import { HtmlElements } from "../utils/HtmlElements.js";
import { NewsView } from "../views/NewsView.js";

export class NewsController {
  #arrNews;
  #currentNews;
  // #page;
  // #lastPage;
  #buttonOpenNewsModal;
  #buttonCloseNewsModal;

  #newsModalElement;
  #newsCardsElement;

  constructor() {
    this.#newsModalElement = HtmlElements.newsModalElement();
    this.#newsCardsElement = HtmlElements.newsCardsElement();

    NewsModel.findAll()
      .then((response) => {
        this.#arrNews = response.data;
        // this.#page = response.data.page;
        // this.#lastPage = response.data.lastPage;
      })
      .then(() => {
        NewsView.showCards(this.#newsCardsElement, this.#arrNews);
        this.#buttonOpenNewsModal =
          document.querySelectorAll("[data-modalLink]");
        this.addModalButtonEvents();
      });
  }

  addModalButtonEvents() {
    this.#buttonOpenNewsModal.forEach((link) => {
      link.addEventListener("click", (event) => {
        this.currentNews = event.currentTarget;

        NewsView.showModal(
          this.#newsModalElement,
          this.currentNews.id,
          this.#arrNews
        );
        this.#buttonCloseNewsModal = document.querySelector(
          "[data-closeModalButton]"
        );
        this.#buttonCloseNewsModal.addEventListener("click", () => {
          NewsView.closeModal(this.#newsModalElement);
        });
      });
    });
  }

  set currentNews(news) {
    this.#currentNews = news;
  }

  get currentNews() {
    return this.#currentNews;
  }
}
