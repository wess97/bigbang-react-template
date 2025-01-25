import express from 'express';
import path from 'path';

const app = express();
const PORT = 5000;

// Servir arquivos estáticos da pasta dist
app.use(express.static(path.join(__dirname, '../../dist')));

// Rota padrão para o cliente React
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
