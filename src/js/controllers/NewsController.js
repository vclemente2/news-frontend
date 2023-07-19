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
  #openModalButton;
  #closeModalButton;

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

        this.#openModalButton = document.querySelectorAll("[data-modalLink]");

        this.#openModalButton.forEach((link) => {
          link.addEventListener("click", (event) => {
            const newsId = event.currentTarget.id;
            this.#newsView.showModal(newsId);
            this.#closeModalButton = document.querySelector(
              "[data-closeModalButton]"
            );
            this.#closeModalButton.addEventListener("click", () => {
              this.#newsView.closeModal();
            });
          });
        });
      });
  }

  //   get data() {
  //     return {
  //       news: this.#arrNews,
  //       page: this.#page,
  //       lastPage: this.#lastPage
  //     };
  //   }
}
