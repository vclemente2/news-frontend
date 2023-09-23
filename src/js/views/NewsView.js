export class NewsView {
  static showCards(htmlElement, arrNews) {
    htmlElement.innerHTML =
      arrNews.reduce((acc, cur) => {
        return (acc += NewsView.#templateCard(cur));
      }, "") || "<h1>Nenhum resultado encontrado...</h1>";
  }

  static showModal(htmlElement, id, arrNews) {
    htmlElement.style.display = "block";
    htmlElement.innerHTML = this.#generateModal(id, arrNews);
  }

  static closeModal(htmlElement) {
    htmlElement.style.display = "none";
  }

  static #dateFormatter(date) {
    const dateObj = new Date(date);

    const day = String(dateObj.getDate()).padStart(2, 0);
    const month = String(dateObj.getMonth() + 1).padStart(2, 0);
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }

  static #generateModal(id, arrNews) {
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

                <button class="main__modal__delete secondaryDeleteButton">Excluir Notícia</button>
                    
                <div class="main__modal__submodal" data-warningDeleteNewsModal>
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
          <button class="secondaryButton main__modal__submodal__cancelButton">Cancelar</button>
          <button class="deleteButton main__modal__submodal__deleteButton">Excluir</button>
      </div>
    </div>  
    `;
  }
}
