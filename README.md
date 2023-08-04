# Cadastro de Notícias - Frontend

Este é o repositório do frontend da aplicação de cadastro de notícias. Esta interface permite aos usuários visualizar, criar e gerenciar notícias e categorias relacionadas.

## Recursos

A aplicação frontend oferece as seguintes funcionalidades:

- Visualização de Notícias:

  - Os usuários podem visualizar todas as notícias cadastradas no sistema.
  - As notícias são exibidas com seus respectivos títulos, conteúdos, imagens e categorias associadas.

- Criação de Nova Notícia:

  - Os usuários podem criar uma nova notícia fornecendo um título, conteúdo, imagem e selecionando uma categoria relacionada.

- Gerenciamento de Categorias:
  - Os usuários podem visualizar todas as categorias cadastradas no sistema.
  - Os usuários podem criar novas categorias.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Deploy

O frontend da aplicação foi implantado na plataforma Vercel e está disponível através do link: [https://news-frontend-khaki.vercel.app/index.html](https://news-frontend-khaki.vercel.app/index.html).

O backend da aplicação foi implantada na plataforma Cyclic e está disponível através do link: [https://cute-tan-buffalo-cuff.cyclic.app/](https://cute-tan-buffalo-cuff.cyclic.app/).

O código do backend está disponível no seguinte repositório: [https://github.com/vclemente2/news-backend](https://github.com/vclemente2/news-backend).

## Configuração do Ambiente Local

Para executar o frontend da aplicação localmente, siga os passos abaixo:

**Pré-requisitos:**

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em https://nodejs.org/.

**Passo a passo:**

1. Clone o repositório do frontend:

   ```bash
   git clone https://github.com/vclemente2/news-frontend.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd news-frontend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O frontend da aplicação estará em execução localmente e pode ser acessado em `http://localhost:8000/` em seu navegador.

## Uso da Aplicação

Após executar o frontend localmente ou acessar o deploy da Vercel, você poderá utilizar a aplicação para visualizar notícias existentes, criar novas notícias e gerenciar categorias.

**Visualização de Notícias:**

- Ao acessar a página principal, você verá a lista de notícias disponíveis.

**Criação de Nova Notícia:**

- Na página principal, clique no botão "Cadastrar Notícia".
- Preencha os campos obrigatórios (título, conteúdo e categoria).
- Clique em "Cadastrar" para criar a nova notícia.

**Gerenciamento de Categorias:**

- Na página principal, clique no link "Cadastrar Categoria".
- Para adicionar uma nova categoria, preencha o nome da categoria no campo fornecido, escolha uma cor de destaque e clique em "Cadastrar".

## Contribuição

Se desejar contribuir para este projeto, você pode criar um fork do repositório, fazer suas modificações e enviar um pull request com as melhorias propostas.
