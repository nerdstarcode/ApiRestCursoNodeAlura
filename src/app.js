import express from 'express';

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
  },
  'Post':{
    '/livros': 'Adiciona o corpo da requisção nos livros'
  },
  'Options':{
    '/': 'Oi, vem sempre aqui? Brincadeira, é isso que te mostrou essa mensagem'
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
app.post('/livros', (req, res) => {
  try{
    livros.push(req.body);
    res.status(201).send('Livro cadastrado');
  } catch(err){
    console.log(err);
  }
})

export default app