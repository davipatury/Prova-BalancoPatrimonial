# Processo Seletivo 005/2023 - Prova Prática

## Dependências

* Node v18.16.0

## Bibliotecas utilizadas

* Express v4.18.2

## Desenvolvimento

* Para instalar as bibliotecas utilizadas:

```
npm install
```

* Para executar o ambiente:

```
npm start
```

* O ambiente irá rodar na porta 8080 por padrão.

## Rotas

|   **Endpoint**  |                           **Descrição**                           |
|:---------------:|:-----------------------------------------------------------------:|
|    `/balance`   |                   Redireciona para `/balance/1`.                  |
| `/balance/{id}` | Retorna em JSON a estrutura das contas atreladas ao ID fornecido. |
|     `/demo`     |                   Página de demonstração da API.                  |
