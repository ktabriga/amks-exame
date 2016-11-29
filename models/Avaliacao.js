const mongoose = require('mongoose');

const AvaliacaoSchema = new mongoose.Schema({
  aluno: {
    _id: {
      type: mongoose.Schema.ObjectId,
      required: true
    },
    nome: String
  },
  kihon: Number,
  kata: Number,
  kumite: Number,
  faixa: String,
  dataHora: {
    type: Date,
    default: Date.now
  },
  observacao: String
});

module.exports = mongoose.model('AvaliacaoSegunda', AvaliacaoSchema);
