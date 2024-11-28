# ****Automated UI Tests with Cypress****

  
    
  

## Stack

  

[Cypress](https://www.cypress.io/)

  

[Prettier](https://prettier.io/)

#

  
  



  

## Executar os testes

  Primeiro devemos executar o seguinte comando na pasta Cypress_project/
  
````bash
npm install cypress
````

Para executar os testes em linha de comando devemos utilizar o seguinte comando:
  

````bash
./node_modules/.bin/cypress run
````

Ou podemos executar o teste pela interface do cypress e com a visualização em tempo real pelo seguinte comando:

````bash
./node_modules/.bin/cypress open
````

#
## Estrutura do projeto

O projeto foi estruturado da seguinte maneira:

```
\cypress
    \integration # Pasta onde contém os cenários de teste.
    \screenshots # Onde fica localizado os screenshots dos testes em caso de erro.
    \screenshots # Onde fica localizado os videos dos testes.
    \support     # É onde fica localizados comandos que podem ser reutilizados em outros testes, constants(login, senhas, massa de dados) e locators
```
No arquivo cypress.json temos as variaveis de ambiente, que para este projeto é a nossa baseURL
  
#

  

## Video da execução e snapshots

Ao executar o teste pela linha de comando o próprio cypress gera um video da execução no diretorio \videos, ele também gera snapshots caso algum cenário falhe.
  

---
