export class SearchView {
  #searchElement;
  #searchButton;
  #searchElementVisibility;

  constructor(inputElement, searchButton) {
    this.#searchElement = inputElement;
    this.#searchButton = searchButton;
    this.#searchElementVisibility = {
      visible: false,
      blurEvent: false
    };
  }

  #showInput() {
    this.#searchElement.style.cssText = `
    left: 50%;   
    padding: .5rem;
    position: fixed;
    transform: translateX(-50%);
    top: 47px;
    visibility: visible;
    width: 50vw;
    `;
    this.#searchElement.focus();
    this.#searchElementVisibility.visible = true;
  }

  #hiddenInput() {
    this.#searchElement.style.cssText = `
    left: auto;
    padding: 0;
    position: relative;
    transform: none;
    top: auto;
    width: 0;
    visibility: hidden;
    `;
    this.#searchElementVisibility.visible = false;
  }

  toggleInputVisibility(eventType) {
    if (window.innerWidth < 980) {
      if (eventType === "blur") {
        this.#hiddenInput();
        this.#searchElementVisibility.blurEvent = true;
        setTimeout(() => {
          this.#searchElementVisibility.blurEvent = false;
        }, 500);
      } else {
        this.#searchElementVisibility.visible
          ? this.#hiddenInput()
          : !this.#searchElementVisibility.blurEvent
          ? this.#showInput()
          : "";

        this.#searchElementVisibility.blurEvent = false;
      }
    }
  }

  showButton() {
    if (window.innerWidth >= 980) this.#searchButton.style.display = "flex";
  }

  hiddenButton() {
    if (window.innerWidth >= 980) this.#searchButton.style.display = "none";
  }
}
