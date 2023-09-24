export class NewsView {
  static showNewsCards(htmlElement, arrNews) {
    htmlElement.innerHTML =
      arrNews.reduce((acc, cur) => {
        return (acc += this.#templateCard(cur));
      }, "") || "<h1>Nenhum resultado encontrado...</h1>";
  }

  static showModal(htmlElement, id = null, arrNews = null) {
    htmlElement.style.display = "block";

    if (id && arrNews) {
      htmlElement.innerHTML = this.#generateNewsModal(id, arrNews);
    }
  }

  static closeModal(htmlElement) {
    htmlElement.style.display = "none";
  }

  static showSuccessfullyDeletedNewsModal(htmlElement) {
    htmlElement.innerHTML = this.#templateSuccessfullyDeleteNewsModal();
  }

  static showErrorDeletedNewsModal(htmlElement) {
    htmlElement.innerHTML = this.#templateErrorDeleteNewsModal();
  }

  static #dateFormatter(date) {
    const dateObj = new Date(date);

    const day = String(dateObj.getDate()).padStart(2, 0);
    const month = String(dateObj.getMonth() + 1).padStart(2, 0);
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }

  static #generateNewsModal(id, arrNews) {
    const newsModal = arrNews.find((news) => Number(news.id) === Number(id));
    return this.#templateModal(newsModal);
  }

  static #templateCard(news) {
    return `
        <li class="main__list__item" id=${news.id} data-modalLink>

            <article class="main__list__article">
                
                  <img class="main__list__image" src=${
                    news.image || `"./src/assets/images/no_image.png"`
                  } alt="${`Imagem da notícia ${news.title}`}"/>

                <span class="main__list__category" style="background-color: ${
                  news.category.color
                }">${news.category.name}</span>

                <h2 class="main__list__title">${
                  news.title.length > 50
                    ? news.title.slice(0, 50) + "..."
                    : news.title
                }</h2>


                <p class="main__list__description">${
                  news.description.length > 100
                    ? news.description.slice(0, 100) + "..."
                    : news.description
                }
                </p>

                <time class="main__list__date" datetime="${
                  news.createdAt
                }">${this.#dateFormatter(news.createdAt)}</time>

                <button type="button" class="main__list__link secondaryButton">Ver Mais</button>

            </article>
        </li>
        `;
  }

  static #templateModal(news) {
    return `
        <div class="modal__container container">

            <article class="main__modal__article">

                <img class="main__modal__image" src=${
                  news.image || `"./src/assets/images/no_image.png"`
                } alt="${`Imagem da notícia ${news.title}`}"/>

                <span class="main__list__category" style="background-color: ${
                  news.category.color
                }">${news.category.name}</span>

                <h2 class="main__list__title">${news.title}</h2>

                <p class="main__list__description">${news.description}
                </p>

                <div class="main__list__author">
                    <span class="main__list__author__name">${
                      news.author ? `Escrito por: ${news.author}` : ""
                    }</span>

                    <time class="main__list__date" datetime="${
                      news.createdAt
                    }">${this.#dateFormatter(news.createdAt)}</time>
                </div>
                
               
                <button class="main__list__link secondaryButton" data-closeModalButton>Voltar</button>

                <button class="main__modal__delete secondaryDeleteButton" data-deleNewsButton>Excluir Notícia</button>
                    
                <div class="main__modal__submodal" data-warningDeleteNewsModal>
                    ${this.#templateDeleteNewsModal()}
                <div>
            </article>
        </div>
        `;
  }

  static #templateDeleteNewsModal() {
    return `
    <div class="modal__container--sm-column container">
      <h2>Tem certeza que deseja excluir essa notícia? Essa operação é irreversível!</h2>
                
      <div class="main__modal__submodal__buttonContainer">
          <button class="secondaryButton main__modal__submodal__cancelButton" data-cancelDeleteNews>Cancelar</button>
          <button class="deleteButton main__modal__submodal__deleteButton" data-confirmDeleteNews>Excluir</button>
      </div>
    </div>  
    `;
  }

  static #templateSuccessfullyDeleteNewsModal() {
    return `
    <div class="modal__container--sm-column container">
      <h2>Notícia Excluída Com Sucesso!</h2>
                
      <button class="secondaryButton" data-okButton>Ok</button>
    </div>  
    `;
  }

  static #templateErrorDeleteNewsModal() {
    return `
    <div class="modal__container--sm-column container">
      <h2 style="color: #c62a2a">Erro Durante a Exclusão!</h2>
                
      <button class="secondaryButton" data-okButton>Ok</button>
    </div>  
    `;
  }
}
