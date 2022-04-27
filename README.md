# Sobre
```
Piece project é uma aplicaçao onde retornar dados do anime one piece com a finalidade
de praticar o framework Nestjs e aprender conceitos de backend. No intutido de criar um CRUD com relacionamentos, autenticação JWT, 
conexão com o banco de dados, utilizaçao de variaveis globais (.env)

```
## Instalação

```bash
$ yarn install
$ Crie um arquivo .env e adicione as mesmas chaves que estao no arquivo de exemplo
$ Adicione as configuraçoes do seu banco e gere uma secret-key
$ Para gerar a secret-key use: "openssl rand -base64 32"
$ Inicie a aplicaçao com: "yarn start:dev"
```

## Iniciando o app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Testes

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

# Conceitos

## Bibliotecas
```bash
# Passport - Biblioteca que faz o gerenciamento de autenticacao
$ yarn add @nestjs/passport passport passport-local
$ yarn @types/passport-local

# JWT -  Responsavel por gerar o token

$ yarn add @nestjs/jwt passport-jwt
$ yarn add @types/passport-jwt

# typeorm - gerenciar o banco de dados
$ yarn add typeorm @nestjs/typeorm pg

# class-transformer / class-validator - Validar os dados da requisiçao
$ yarn add class-transformer class-validator

# bcrypt - criar hash. Exemplo um hash para senhas
$ yarn add bcrypt @types/bcrypt

```

## Gerar uma secret-key

```bash
# terminal
Digite: $ openssl rand -base64 32

```

## Relations

```bash
# OnetoOne
Onde uma relação contem em que X contem apenas uma instancia de Y e Y contem apenas uma instancia de X. 
Um exemplo no projeto seria um Character (Personagem) pode ter apenas uma unica Description (descrição).


# OneToMany

```
