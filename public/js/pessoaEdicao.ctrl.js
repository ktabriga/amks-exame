angular.module('app')
  .controller('PessoaEdicaoCtrl',  PessoaEdicaoCtr);

function PessoaEdicaoCtr(pessoaService, $stateParams, $state) {
  const ctrl = this;

  angular.element('#nome').focus();
  this.salvar = function () {
    pessoaService.salvar(this.pessoa)
      .then(function () {
        Materialize.toast('Pessoa Salva', 3000)
        $state.go('pessoas');
      })
  }

  if ($stateParams.id) {
    pessoaService.buscar($stateParams.id)
      .then(function (p) {
        ctrl.pessoa = p;
      });
  }
}
