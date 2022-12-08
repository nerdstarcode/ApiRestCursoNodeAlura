import livros from "../models/Livro.js";

export default class LivroController{
  static listarLivros = (req, res) => {
    livros.find()
      .populate('autor')
      .execute((err, livros)=>{
      res.status(200).json(livros);
    })
  };
  static listarLivroPorId = (req, res) => {
    const id = req.params.id;
    livros.findById(id, (err, livro) => {
      if(err){
        res.status(400).send({message:`${err.message} - Falha, ID não encontrado.`});
      }else{
        res.status(201).send(livro.toJSON());
      }
    })
  };
  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if(err){
        res.status(500).send({message:`${err.message} - Falha ao cadastrar livro.`});
      }else{
        res.status(201).send(livro.toJSON());
      }
    })
  };
  static atualizarLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
      if(!err){
        res.status(200).send('Livro atualizado com sucesso!');
      }else{
        res.status(500).send({message:`${err.message} - Erro ao atualizar as informações do livro`});
      }
    })
  };
  static excluirLivro = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (err) =>{
      if(!err){
        res.status(200).send({message:'Livro removido com sucesso!'})
      }else{
        res.status(500).send({message:`${err.message} - Não foi possível excluir`})
        
      }
    })
  };
}