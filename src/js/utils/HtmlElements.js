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

  static buttonDeleteNewsElelement() {
    return document.querySelector("[data-deleNewsButton]");
  }

  static warningDeleteNewsModalElement() {
    return document.querySelector("[data-warningDeleteNewsModal]");
  }

  static cancelDeleteNewsElement() {
    return document.querySelector("[data-cancelDeleteNews]");
  }

  static confirmDeleteNewsElement() {
    return document.querySelector("[data-confirmDeleteNews]");
  }

  static buttonOkAfterDeleteNewsElement() {
    return document.querySelector("[data-okButton]");
  }
}
