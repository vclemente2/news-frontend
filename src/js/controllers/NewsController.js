import { NewsModel } from "../models/NewsModel.js";
import { HtmlElements } from "../utils/HtmlElements.js";
import { LoadingDisplay } from "../utils/LoadingDisplay.js";
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
    HtmlElements.buttonsOpenNewsModalElement().forEach((button) => {
      button.addEventListener("click", (event) => {
        NewsController.currentNews = event.currentTarget;

        NewsView.showModal(
          HtmlElements.newsModalElement(),
          NewsController.currentNews.id,
          arrNews
        );

        HtmlElements.buttonCloseModalElement().addEventListener("click", () => {
          NewsView.closeModal(HtmlElements.newsModalElement());
        });

        HtmlElements.buttonDeleteNewsElelement().addEventListener(
          "click",
          () => {
            NewsView.showModal(HtmlElements.warningDeleteNewsModalElement());

            document.onkeydown = (event) => {
              if (event.key === "Escape") {
                NewsView.closeModal(
                  HtmlElements.warningDeleteNewsModalElement()
                );
              }
            };

            this.activeButtonCancelDeleteNews();
            this.activeDeleteNewsButton();
          }
        );
      });
    });
  }

  static async activeDeleteNewsButton() {
    HtmlElements.confirmDeleteNewsElement().addEventListener(
      "click",
      async () => {
        LoadingDisplay.show(true);

        const response = await NewsModel.destroy(NewsController.currentNews.id);

        if (response.status == 204) {
          NewsView.showSuccessfullyDeletedNewsModal(
            HtmlElements.warningDeleteNewsModalElement()
          );
        } else {
          NewsView.showErrorDeletedNewsModal(
            HtmlElements.warningDeleteNewsModalElement()
          );
        }

        document.onkeydown = (event) => {
          if (event.key === "Escape") {
            NewsView.closeModal(HtmlElements.warningDeleteNewsModalElement());
            location.reload();
          }
        };
        NewsController.activeButtonOkAfterDeleteNews();
        LoadingDisplay.hidden();
      }
    );
  }

  static activeButtonCancelDeleteNews() {
    HtmlElements.cancelDeleteNewsElement().addEventListener("click", () => {
      NewsView.closeModal(HtmlElements.warningDeleteNewsModalElement());
    });
  }

  static activeButtonOkAfterDeleteNews() {
    HtmlElements.buttonOkAfterDeleteNewsElement().addEventListener(
      "click",
      () => {
        NewsView.closeModal(HtmlElements.warningDeleteNewsModalElement());
        location.reload();
      }
    );
  }
}
