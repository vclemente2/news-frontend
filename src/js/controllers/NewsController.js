import { NewsModel } from "../models/NewsModel.js";
import { NewsView } from "../views/NewsView.js";

export class NewsController {
  #arrNews;
  #currentNews;
  // #page;
  // #lastPage;
  #buttonOpenNewsModal;
  #buttonCloseNewsModal;

  #newsModelElement;
  #newsCardsElement;

  constructor() {
    this.#newsModelElement = document.querySelector("[data-modalContainer]");
    this.#newsCardsElement = document.querySelector("[data-newsList]");

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
          this.#newsModelElement,
          this.currentNews.id,
          this.#arrNews
        );
        this.#buttonCloseNewsModal = document.querySelector(
          "[data-closeModalButton]"
        );
        this.#buttonCloseNewsModal.addEventListener("click", () => {
          NewsView.closeModal(this.#newsModelElement);
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
