const loadingElement = document.querySelector("[data-loading]");

export class LoadingDisplay {
  static show(fullScreen = false) {
    loadingElement.style.display = "flex";
    if (fullScreen) loadingElement.style.top = "0";
  }

  static hidden() {
    loadingElement.style.display = "none";
    loadingElement.style.top = "64px";
  }
}
