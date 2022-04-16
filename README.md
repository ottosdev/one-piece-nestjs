# Description
```
Piece project é uma aplicaçao para mostrar alguns dados do anime one piece com a finalidade
de praticar o framework Nestjs aplicando alguns conceitos basicos como criaçao de crud, conexão com banco e autenticacao JWT.
```
## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

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
