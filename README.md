# Automação do site ServeRest

Repositório com o que prática na autimação de uma API.
* Realizado os fluxos de 'Login, Listar e Criar Novos Usuários', demais serão realizados posteriormente.

* Utilizando o framewrok [Cypress](https://www.cypress.io/).

---

## Sobre o repositório

O site [ServeRest](https://serverest.dev/) foi utilizado para realizar a automação da API.

---

## Tecnologias Utilizadas

- Cypress 14.x
- JavaScript
- VS Code

---

## Estrutura do Projeto

```
CYPRESSMASTERCLASS/
├── cypress/
│   ├── e2e/
│   │   └── ├── createUser.cy.js
|   |       ├── createUsers.cy.js
|   |       ├── exampleGets.cy.js
|   |       ├── login.cy.js
|   |       ├── multGets.cy.js
|   |       └── realizarLogin.cy.js
|   ├── fixtures/
│   │       ├── data.json
├── package.json
└── README.md
```

---

## Como Realizar o clone do Repositório

```bash
git clone git@github.com:KiraOliveira/cypressApiServeRest.git
cd cypressApiServeRest
```

---

## Como Executar os Testes

```bash
npm install cypress
npx cypress open(interação) ou npx cypress run(heandless)
```

---

## Execução dos testes
<img width="805" height="332" alt="result19-08" src="https://github.com/user-attachments/assets/46dc6ebc-6490-487d-83c5-6f701f71db58" />

