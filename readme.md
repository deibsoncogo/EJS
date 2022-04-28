# EJS
Permite utilizar o JavaScript dentro do HTML a partir de uma combinação de caracteres

## Configuração
Precisamos configurar que todo `HTML` precisa passar pelo motor de renderização dele
```java
const express = require("express"); // vai funcionar como o importe de algo
const server = express(); // vai permitir a utilização dele como função

server.set("view engine", "ejs"); // configuração falada
```

## Utilização
Existe diversas combinações com diferentes funcionalidades onde elas são as seguintes

Permite executar um comando como uma função
```java
<%- include() %>
```

Permite utilizar uma variável
```java
<%= title %>
```

## Execução
Devemos utilizar este comando para instalar as dependências
```bash
yarn
```

Utilizamos este comando para executar o servidor
```bash
yarn dev
```

Agora basta acessar este link para visualizar o site
```html
http://localhost:8080/
```
