export class CreateNewsView {
  #categories;
  #categoryInputElement;
  #modalElement;

  constructor(categories) {
    this.#categories = categories;
    this.#categoryInputElement = document.querySelector(
      '[data-newsInput="category_id"]'
    );
    this.#modalElement = document.querySelector("[data-modalContainer]");
  }

  showCategories() {
    this.#categoryInputElement.insertAdjacentHTML(
      "beforeend",
      this.#generateCategoryList(this.#categories)
    );
  }

  showModal(statusCode) {
    this.#modalElement.style.display = "block";
    this.#modalElement.innerHTML = this.#modalTemplate(statusCode);
    document.onkeydown = (event) => {
      if (event.key === "Escape") {
        this.closeModal();
        location.reload();
      }
    };
    document.querySelector("[data-closeIcon]").addEventListener("click", () => {
      this.closeModal();
      location.reload();
    });
  }

  closeModal() {
    this.#modalElement.style.display = "none";
  }

  #modalTemplate(statusCode) {
    return statusCode === 201
      ? `
    <div class="modal__container--sm">
      <h2>Notícia Cadastrada com Sucesso!</h2>    
      <span class="modal__closeIcon" data-closeIcon>
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m291-208-83-83 189-189-189-189 83-83 189 189 189-189 83 83-189 189 189 189-83 83-189-189-189 189Z" fill="#242536"/></svg>
      </span>
    </div>
    `
      : `<div class="modal__container--sm">
        <h2 style="color:#d73b3b">Oops... Erro inesperado.</h2>
        <span class="modal__closeIcon" data-closeIcon>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m291-208-83-83 189-189-189-189 83-83 189 189 189-189 83 83-189 189 189 189-83 83-189-189-189 189Z" fill="#242536"/></svg>
        </span>
      </div>`;
  }

  #generateCategoryList() {
    return this.#categories.reduce((acc, cur) => {
      return (acc += this.#template(cur));
    }, "");
  }

  #template(category) {
    return `
      <option value=${category.id}>${category.name}</option>
    `;
  }
}
