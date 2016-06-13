const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  telefone: String,
  celular: String,
  nascimento: Date,
  nomeProfessor: String
});

module.exports = mongoose.model('Pessoa', PessoaSchema);
