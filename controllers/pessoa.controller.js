const express = require('express');
const router = new express.Router();
const Pessoa = require('../models/Pessoa');
const sendResponse = require('../utils').sendResponse;

router.route('/')
  .post(sendResponse(req =>
    new Pessoa(req.body).save()))
  .get(sendResponse((req) => {
    return Pessoa.find()
      .select(req.query.fields)
      .sort('nome');
  }));

router.route('/:id')
  .put(sendResponse(
    req => Pessoa.findById(req.params.id)
      .then(pessoa => Object.assign(pessoa, req.body).save())
  ))
  .get(sendResponse(req => Pessoa.findById(req.params.id)));

module.exports = router;
