angular.module('app')
  .controller('PessoaListaCtrl', PessoaListaCtrl);

function PessoaListaCtrl(pessoaService) {
  var self = this;

  pessoaService.listar()
    .then(function (pessoas) {
      self.pessoas = pessoas;
    });
}
