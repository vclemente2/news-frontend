export class MenuView {
  #menu;

  constructor(menuElement) {
    this.#menu = menuElement;
  }

  #show() {
    this.#menu.style.cssText = `
        visibility: visible;
    `;
    this.#menu.classList.add("active");
  }

  #hidden() {
    this.#menu.style.cssText = `
    visibility: hidden;
    `;
    this.#menu.classList.remove("active");
  }

  toggleVisibility() {
    this.#menu.classList.contains("active") ? this.#hidden() : this.#show();
  }
}
