# Demo
[Link do deploy](https://driviagens-api-ph09.onrender.com)

# Como funciona?
Este projeto é uma API REST para atender a aplicação de notícias rápidas da TopNews. Ela possui apenas uma única entidade: `news`.

# Tecnologias utilizadas
Para este projeto, foram utilizadas:

- [pg](https://www.npmjs.com/package/pg)
- [node](https://nodejs.org/en)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [joi](https://www.npmjs.com/package/joi)
- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors)
- [uuid](https://www.npmjs.com/package/uuid)

### Requisitos

- [node.js version 18.16.1](https://nodejs.org/en)

# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

- Clonar o repositório;
- Baixar as dependências necessárias com o comando: `npm install`;
- Em seguida, criar o arquivo `.env` com a variável do banco: `DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?schema=public`;
- A propriedade `DATABASE_URL` é usada para fazer a conexão com o banco de dados.
- Para rodar o projeto em desenvolvimento, execute o comando `npm run dev`;

# Como rodar em produção:
- Rodar o comando `npm run start`
