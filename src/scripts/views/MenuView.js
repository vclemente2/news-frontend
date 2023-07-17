export class MenuView {
  #menu;

  constructor(menuElement) {
    this.#menu = menuElement;
  }

  #show() {
    this.#menu.style.cssText = `
        height: calc(100vh - 64px);
        visibility: visible;
    `;
    this.#menu.classList.add("active");
  }

  #hidden() {
    this.#menu.style.cssText = `
    height: 0;
    visibility: hidden;
    `;
    this.#menu.classList.remove("active");
  }

  toggleVisibility() {
    this.#menu.classList.contains("active") ? this.#hidden() : this.#show();
  }
}
