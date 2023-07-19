import { NewsModel } from "../models/NewsModel";
import { NewsView } from "../views/NewsView";

export class NewsController {
  #newsContainerElement;
  #newsModalElement;
  #arrNews;
  #page;
  #lastPage;
  #newsModel;
  #newsView;

  constructor() {
    this.#newsContainerElement = document.querySelector("[data-newsList]");
    this.#newsModalElement = document.querySelector("[data-modalContainer]");

    NewsModel.findAll()
      .then((response) => {
        this.#arrNews = response.data.news;
        this.#page = response.data.page;
        this.#lastPage = response.data.lastPage;
      })
      .then(() => {
        this.#newsView = new NewsView(this.#arrNews, this.#newsModalElement);

        this.#newsContainerElement.innerHTML = this.#newsView.showCards();

        const modalLink = document.querySelectorAll("[data-modalLink]");

        modalLink.forEach((link) => {
          link.addEventListener("click", (event) => {
            const newsId = event.currentTarget.id;
            this.#newsView.showModal(newsId);
          });
        });
      });
  }

  get data() {
    return {
      news: this.#arrNews,
      page: this.#page,
      lastPage: this.#lastPage
    };
  }
}
