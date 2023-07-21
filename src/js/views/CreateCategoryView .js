export class CreateCategoryView {
  #modalElement;

  constructor() {
    this.#modalElement = document.querySelector("[data-modalContainer]");
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
    const message =
      statusCode === 201
        ? "Categoria Cadastrada com Sucesso!"
        : statusCode === 409
        ? "Esta Categoria Já Está Cadastrada."
        : "Oops... Erro inesperado.";

    return statusCode === 201
      ? `
    <div class="modal__container--sm">
      <h2>${message}</h2>    
      <span class="modal__closeIcon" data-closeIcon>
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m291-208-83-83 189-189-189-189 83-83 189 189 189-189 83 83-189 189 189 189-83 83-189-189-189 189Z" fill="#242536"/></svg>
      </span>
    </div>
    `
      : `<div class="modal__container--sm">
        <h2 style="color:#d73b3b">${message}</h2>
        <span class="modal__closeIcon" data-closeIcon>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m291-208-83-83 189-189-189-189 83-83 189 189 189-189 83 83-189 189 189 189-83 83-189-189-189 189Z" fill="#242536"/></svg>
        </span>
      </div>`;
  }
}
