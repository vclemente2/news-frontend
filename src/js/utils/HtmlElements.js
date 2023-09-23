export class HtmlElements {
  static newsModalElement() {
    return document.querySelector("[data-modalContainer]");
  }

  static newsCardsElement() {
    return document.querySelector("[data-newsList]");
  }

  static buttonsOpenNewsModalElement() {
    return document.querySelectorAll("[data-modalLink]");
  }

  static buttonCloseModalElement() {
    return document.querySelector("[data-closeModalButton]");
  }
}
