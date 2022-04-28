const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.get("/", (request, response) => {
  const items = [
    { title: "Desenvolver", message: " aplicações/serviços de forma fácil"},
    { title: "EJS", message: " usa JavaScript para renderizar HTML"},
    { title: "Muito", message: " fácil de usar"},
    { title: "Amorzinho", message: " de linguagem"},
    { title: "Install", message: " EJS"},
    { title: "Sintaxe", message: " simples"},
  ]

  const subtitle = "Uma linguagem de modelagem para criação de página HTML"
  response.render("pages/index", {
    qualities: items,
    subtitle,
  })
})

app.get("/sobre", (request, response) => {
  const subtitle = "Uma breve descrição de quem criou este site"
  response.render("pages/about", { subtitle })
})

app.listen(8080, () => {
  console.log("The server is running on port 8080");
})
