import app from './src/app.js';
const port = process.send.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
})