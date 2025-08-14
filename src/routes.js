// Importa apenas o Router da biblioteca express
import { Router } from 'express';


// Cria uma nova instância do Router, que vai gerenciar os caminhos (rotas) da aplicação
const routes = new Router();

// Define uma rota GET para o caminho principal ("/")
// Quando alguém acessar "/", o servidor responde com um JSON contendo a mensagem "Hello World"
routes.get("/", (request, response) => {
  return response.status(200).json({ message: "Hello World, com js mais moderno" });
});

// Exporta as rotas para serem usadas em outros arquivos, como o app.js
export default routes;
