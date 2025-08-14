// Importa o servidor já configurado do arquivo app.js
import app from './app'

// Faz o servidor começar a escutar na porta 3001
// Quando o servidor estiver online, mostra uma mensagem no console
app.listen(3001, () => console.log("Servidor online na porta 3001."));
