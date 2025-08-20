// Importa apenas o Router da biblioteca express
import { Router } from "express";

import { v4 } from "uuid";

import User from "./app/models/User";

// Cria uma nova instância do Router, que vai gerenciar os caminhos (rotas) da aplicação
const routes = new Router();

// Define uma rota GET para o caminho principal ("/")
// Quando alguém acessar "/", o servidor responde com um JSON contendo a mensagem "Hello World"
routes.get("/", async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: "Emilio",
    email: "emilio29@email.com",
    password_hash: "erf12345qcs",
  });

  return response.status(201).json(user);
});

// Exporta as rotas para serem usadas em outros arquivos, como o app.js
export default routes;
