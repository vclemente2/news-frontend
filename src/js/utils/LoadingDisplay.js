const loadingElement = document.querySelector("[data-loading]");

export class LoadingDisplay {
  static show() {
    loadingElement.style.display = "flex";
  }

  static hidden() {
    loadingElement.style.display = "none";
  }
}
