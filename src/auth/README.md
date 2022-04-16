# Auth Module

```
  Responsavel por:
    Configurar o jwt e as estrategias para cada rota
    Qual modulo deve ser usado para fazer a estrategia de geraçao de token. Exemplo o usuario.
    Prover o service e estrategias para os demais modulos.

```

# Auth Service

```
  Responsavel por:
    Autenticar o usuario e retornar o token.
    Validar o usuario.

```
# Auth Controller

```
  Responsavel por:
    Criar a rota onde deve ser informado para o usuario o token.
    E é no controller que usamos os Guards para as estrategias de autenticaçao.
```

# Strategies

### Local
  ```
  Responsavel por:
    Validar o usuario localmente retornando o usuario caso o mesmo seja valido.
    Com isso o nest ira fazer uma associaçao entre a estrategia local com a estrategia do JWT.
```

### JWT

 ```
  Responsavel por:
    Quando tudo ocorrer bem na estrategia local essa estrategia ira fazer um token com esse formato:  "Bearer  dasdasdasdas". Com isso precisamos usar o service do JWT que vem da propria biblioteca instalada dentro do service de autoricaçao para a magica ocorrer.
```


### User Decorator
 ```
  Responsavel por:
    Quando tudo ocorrer bem precisa-se pegar a inforçao que esta no token e usar elas em outras rotas, nesse caso usamos o @GetUser para pegar o usuario com a autenticaçao realizada.
```
