# **API REST COM NODE.JS E SEQUELIZE**

Este projeto é uma API RESTful desenvolvida com Node.js e algumas de suas principais bibliotecas. O objetivo é demonstrar como criar uma aplicação organizada no modelo MVC, utilizando o Sequelize para realizar operações em bancos de dados sem a necessidade de escrever SQL diretamente.

## **FUNCIONALIDADES**

- **CRIAÇÃO DE API COM NODE.JS**: Utilização de bibliotecas essenciais para a construção de uma API robusta.
- **ORM COM SEQUELIZE**: Implementação de um ORM para facilitar as operações com o banco de dados.
- **MODELO MVC**: Estruturação da aplicação seguindo o padrão Model-View-Controller.
- **JAVASCRIPT PARA BACK-END**: Aprimoramento dos conhecimentos em JavaScript aplicados ao desenvolvimento de back-end.

## **TECNOLOGIAS UTILIZADAS**

- **NODE.JS**: Plataforma para execução de código JavaScript no servidor.
- **EXPRESS**: Framework para Node.js que facilita a criação de APIs.
- **SEQUELIZE**: ORM para Node.js que simplifica a interação com bancos de dados.
- **MYSQL/POSTGRESQL/SQLITE**: Bancos de dados suportados pelo Sequelize.
- **POSTMAN**: Ferramenta para testar as requisições da API.

## **ESTRUTURA DO PROJETO**

A estrutura do projeto segue o padrão MVC:

```markdown
src/
|-- controllers/
|   |-- categoriaController.js
|   |-- cursoController.js
|   |-- pessoaController.js
|
|-- models/
|   |-- categoria.js
|   |-- curso.js
|   |-- pessoa.js
|
|-- routes/
|   |-- categoriaRoute.js
|   |-- cursoRoute.js
|   |-- pessoaRoute.js
|   |-- index.js
|
|-- config/
|   |-- database.js
|
|-- app.js
|-- server.js
```

## **INSTALAÇÃO**

1. Clone o repositório:
   ```bash
   git clone https://github.com/BrunoTduarte/API-ORM-SQLITE.git
   ```

2. Instale as dependências:
   ```bash
   cd API-ORM-SQLITE
   npm install
   ```

3. Configure o banco de dados no arquivo `src/config/database.js`.

4. Execute as migrações para criar as tabelas no banco de dados:
   ```bash
   npx sequelize db:migrate
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

## **USO**

Utilize o Postman ou outra ferramenta similar para testar os endpoints da API. A documentação dos endpoints pode ser encontrada no arquivo `docs/api-docs.md`.

## **CONTRIBUIÇÃO**

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## **LICENÇA**

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
