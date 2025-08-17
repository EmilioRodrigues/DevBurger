// Importa o Sequelize (caixa de ferramentas para banco de dados) e Model (modelo base)
import Sequelize, { Model } from "sequelize";

// Cria a receita (classe) User, que representa um amigo no banco de dados
class User extends Model {
  // Método especial para preparar a receita e conectar com o banco de dados
  static init(sequelize) {
    // Chama o método da receita original (Model) e diz quais informações cada amigo terá
    super.init(
      {
        name: Sequelize.STRING, // Nome do amigo (texto)
        email: Sequelize.STRING, // Email do amigo (texto)
        password_hash: Sequelize.STRING, // Senha do amigo (texto)
        admin: Sequelize.BOOLEAN, // Se é chefe ou não (verdadeiro/falso)
      },
      {
        sequelize, // Conexão com o banco de dados
      }
    );
  }
}

// Deixa a receita User pronta para ser usada em outros arquivos do projeto
export default User;

// DICA:
// O método "static" serve para usar funções da classe sem precisar criar um User primeiro.
// Exemplo: User.init() chama direto, sem precisar fazer "const user = new User()"
