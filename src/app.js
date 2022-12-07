import express from 'express';
import db from './config/dbConnect.js'

db.on("error", console.log.bind(console, 'Error de conexão'));
db.once("open", ()=> {
  console.log('Conexão com o banco feita com sucesso');
})

const app = express();
app.use(express.json())

const livros = [
  {id: 1, 'titulo': 'O Hobbit'},
  {id: 2, 'titulo': 'Senhor dos Aneis'},
  {id: 3, 'titulo': 'O Nome do Vento'},
]
const optionRotas ={
  'Get': {
    '/':'Função principal, só diz que entrou na aplicação',
    '/livros': 'Lista os livros existentes na aplicação',
    '/livros/:id': 'Busca livros pelo id',
  },
  'Post':{
    '/livros': 'Adiciona o corpo da requisção nos livros',
  },
  'Put':{
    '/livros/:id': 'Atualiza os dados do livro com o id igual ao id do corpo',
  },
  'Delete':{
    '/livros/:id': 'Deleta o livro com o id especificado no corpo',

  },
  'Options':{
    '/': 'Oi, vem sempre aqui? Brincadeira, é isso que te mostrou essa mensagem',
  }
}

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
})
app.options('/', (req, res) => {
  res.status(200).json(optionRotas);
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
})
app.get('/livros/:id', (req, res) => {
  try{
    let index = searchBook(req.params.id);
    res.json(livros[index]);
  }catch(err){
    console.log(err)
  }
})
app.post('/livros', (req, res) => {
  try{
    livros.push(req.body);
    res.status(201).send('Livro cadastrado');
  } catch(err){
    console.log(err);
  }
})
app.put('/livros/:id', (req, res) => {
  try{
    let index = searchBook(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
  }catch(err){
    console.log(err)
  }
})
app.delete('/livros/:id', (req, res) => {
  try{
    let {id} = req.params;
    let index = searchBook(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
  }catch(err){
    console.log(err)
  }
})

function searchBook(id){
  return livros.findIndex(livro => livro.id == id)
}
export default app