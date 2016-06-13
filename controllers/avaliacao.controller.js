const express = require('express');
const router = new express.Router();
const sendResponse = require('../utils').sendResponse;
const Avaliacao = require('../models/Avaliacao');

router.post('/', sendResponse(req => {
  const avaliacao = new Avaliacao();
  avaliacao.aluno = req.body.pessoa;
  avaliacao.kata = req.body.kata;
  avaliacao.kumite = req.body.kumite;
  avaliacao.kihon= req.body.kihon;
  avaliacao.faixa= req.body.faixa;
  avaliacao.observacao = req.body.observacao;
  return avaliacao.save();
}));

router.get('/', sendResponse(req => {
  return Avaliacao.find().sort('aluno.nome');
}));
module.exports = router;
