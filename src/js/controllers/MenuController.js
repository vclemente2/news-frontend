import { MenuView } from "../views/MenuView.js";

export class MenuController {
  #menuButton;
  #menuElement;
  #menuView;

  constructor() {
    this.#menuButton = document.querySelector("[data-menuButton]");
    this.#menuElement = document.querySelector("[data-menu]");
    this.#menuView = new MenuView(this.#menuElement);

    this.#menuButton.addEventListener("click", () => {
      this.#menuView.toggleVisibility();
    });
  }
}
