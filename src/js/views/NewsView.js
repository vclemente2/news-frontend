export class NewsView {
  #arrNews;
  #modalElement;
  #cardsElement;
  #openModalButton;
  #closeModalButton;

  constructor(arrNews) {
    this.#arrNews = arrNews;
    this.#modalElement = document.querySelector("[data-modalContainer]");
    this.#cardsElement = document.querySelector("[data-newsList]");
  }

  showCards() {
    this.#cardsElement.innerHTML = this.#arrNews.reduce((acc, cur) => {
      return (acc += this.#templateCard(cur));
    }, "");
    this.#addButtonEvent();
  }

  #showModal(id) {
    this.#modalElement.style.display = "block";
    this.#modalElement.innerHTML = this.#generateModal(id);
  }

  #closeModal() {
    this.#modalElement.style.display = "none";
  }

  #addButtonEvent() {
    this.#openModalButton = document.querySelectorAll("[data-modalLink]");
    this.#openModalButton.forEach((link) => {
      link.addEventListener("click", (event) => {
        const newsId = event.currentTarget.id;
        this.#showModal(newsId);
        this.#closeModalButton = document.querySelector(
          "[data-closeModalButton]"
        );
        this.#closeModalButton.addEventListener("click", () => {
          this.#closeModal();
        });
      });
    });
  }

  #dateFormatter(date) {
    const dateObj = new Date(date);

    const day = String(dateObj.getDate()).padStart(2, 0);
    const month = String(dateObj.getMonth() + 1).padStart(2, 0);
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }

  #generateModal(id) {
    const newsModal = this.#arrNews.find(
      (news) => Number(news.id) === Number(id)
    );
    return this.#templateModal(newsModal);
  }

  #templateCard(news) {
    return `
        <li class="main__list__item" id=${news.id} data-modalLink>
            <article class="main__list__article">
                <h2 class="main__list__title">${
                  news.title.length > 50
                    ? news.title.slice(0, 50) + "..."
                    : news.title
                }</h2>
                <img class="main__list__image" src=${
                  news.image || `"./src/assets/images/no_image.png"`
                } alt="${`Imagem da notícia ${news.title}`}"/>
                <span class="main__list__category" style="background-color: ${
                  news.category.color
                }">${news.category.name}</span>
                <p class="main__list__description">${
                  news.description.length > 100
                    ? news.description.slice(0, 100) + "..."
                    : news.description
                }
                </p>
                <time class="main__list__date" datetime="${
                  news.createdAt
                }">${this.#dateFormatter(news.createdAt)}</time>
                <button class="main__list__link secondaryButton">Ver Mais</button>
            </article>
        </li>
        `;
  }

  #templateModal(news) {
    return `
        <div class="main__modal__container container">
            <article class="main__modal__article">
                <h2 class="main__list__title">${news.title}</h2>
                <img class="main__list__image" src=${
                  news.image || `"./src/assets/images/no_image.png"`
                } alt="${`Imagem da notícia ${news.title}`}"/>
                <span class="main__list__category" style="background-color: ${
                  news.category.color
                }">${news.category.name}</span>
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
            </article>
        </div>
        `;
  }
}
