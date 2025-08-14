// Importa o framework Express, que facilita a criação do servidor
import express from "express";
// Importa as rotas definidas no arquivo routes.js
import routes from "./routes";

// Cria uma classe chamada App para organizar a configuração do servidor
class App {
  constructor() {
    // Cria uma instância do servidor Express e guarda em this.app
    this.app = express();

    // Chama o método que configura os middlewares (ajudantes)
    this.middlewares();
    // Chama o método que configura as rotas/endpoints do servidor
    this.routes();
  }

  // Método para adicionar middlewares ao servidor
  middlewares() {
    // Faz o servidor entender requisições com corpo em JSON
    this.app.use(express.json());
  }

  // Método para adicionar as rotas ao servidor
  routes() {
    // Usa as rotas importadas do arquivo routes.js
    this.app.use(routes);
  }
}

// Exporta o servidor já configurado para ser usado em outros arquivos
export default new App().app;
