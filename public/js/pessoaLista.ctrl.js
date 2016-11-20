angular.module('app')
  .controller('PessoaListaCtrl', PessoaListaCtrl);

function PessoaListaCtrl(pessoaService) {
  var self = this;

  pessoaService.listar({
    fields: 'nome nascimento telefone'
  })
    .then(function (pessoas) {
      self.pessoas = pessoas;
    });
}
