export class SearchView {
  #searchElement;
  #searchButton;

  constructor(inputElement, searchButton) {
    this.#searchElement = inputElement;
    this.#searchButton = searchButton;
  }

  toggleInputVisibility() {
    if (window.innerWidth < 980) {
      this.#searchElement.classList.toggle("active");

      this.#searchElement.classList.contains("active")
        ? (this.#searchElement.style.cssText = `
            left: 50%;   
            padding: .5rem;
            position: fixed;
            transform: translateX(-50%);
            top: 47px;
            visibility: visible;
            width: 50vw;
            `)
        : (this.#searchElement.style.cssText = `
            left: auto;
            padding: 0;
            position: relative;
            transform: none;
            top: auto;
            width: 0;
            visibility: hidden;
            `);
    }
  }

  showButton() {
    if (window.innerWidth >= 980) this.#searchButton.style.display = "flex";
  }

  hiddenButton() {
    if (window.innerWidth >= 980) this.#searchButton.style.display = "none";
  }
}
