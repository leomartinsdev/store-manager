# Store Manager 🏪
Aplicação back-end de uma API RESTful de um sistema de gerenciamento de vendas em que é possível criar, visualizar, deletar e atualizar produtos e vendas (CRUD).
<br><br>
O aplicativo foi desenvolvido utilizando Node.js, Express como framework para Node.js, MySQL para gerenciamento do banco de dados e arquitetura de camadas MSC. Para fácil execução da aplicação em qualquer máquina, ela foi dockerizada.
<br><br>

## Feito com 👨‍💻:
- JavaScript
- Docker
- Express
- mysql2
- MySQL
- Routes
- Arquitetura em Camadas (MSC)
- Joi
- Testes com Jest, Mocha, Chai e Sinon.

## Como rodar o projeto
1) Usando Docker:
-  Instale as dependências via terminal: `npm install`
-  Inicie os containers do compose backend e db: `docker-compose up -d`
-  É possível ver os logs da aplicação: `docker logs -n 10 -f store_manager`

2) Sem Docker: ⚠️ Atenção: Ao rodar localmente, a aplicação deverá receber variáveis de ambiente como exemplificado em env.example para poder se comunicar com o serviço de banco de dados.
-  Instale as dependências via terminal: `npm install`
-  Inicie os containers do compose backend e db: `docker-compose up -d`
-  Inicie a aplicação em modo de desenvolvimento: `npm run dev:local`

## Executando os testes (garanta que a aplicação esteja executando):
- Rodar os testes do mocha: `npm run test:mocha`
- Rodar os testes e mostrar cobertura geral: `npm run test:coverage`
- Rodar os testes e mostrar cobertura de mutações: `npm run test:mutation`
