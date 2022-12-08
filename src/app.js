import express from 'express';
import db from './config/dbConnect.js'
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Error de conexão'));
db.once("open", ()=> {
  console.log('Conexão com o banco feita com sucesso');
})

const app = express();
app.use(express.json())

routes(app);

const optionRotas ={
  'Get': {
    '/':'Função principal, só diz que entrou na aplicação',
    '/livros': 'Lista os livros existentes na aplicação',
    '/livros/:id': 'Busca livros pelo id',
    '/autores': 'Lista os autores existentes na aplicação',
    '/autores/:id': 'Busca autores pelo id',
  },
  'Post':{
    '/livros': 'Adiciona o corpo da requisção nos livros',
    '/autores': 'Adiciona o corpo da requisção nos autores',
  },
  'Put':{
    '/livros/:id': 'Atualiza os dados do livro com o id igual ao id do corpo',
    '/autores/:id': 'Atualiza os dados do autor com o id igual ao id do corpo',
  },
  'Delete':{
    '/livros/:id': 'Deleta o livro com o id especificado no corpo',
    '/autores/:id': 'Deleta o autor com o id especificado no corpo',

  },
  'Options':{
    '/': 'Oi, vem sempre aqui? Brincadeira, é isso que te mostrou essa mensagem',
  }
}


app.options('/', (req, res) => {
  res.status(200).json(optionRotas);
})

export default app