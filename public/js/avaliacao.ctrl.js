angular.module('app')
  .controller('AvaliacaoCtrl', AvaliacaoCtrl);

function  AvaliacaoCtrl(pessoaService, $scope) {
  var self = this;

  pessoaService.listar()
    .then(function (pessoas) {
      self.pessoas = pessoas;
    })

  this.iniciar = function () {
    setTimeout(function () {
      self.avaliando = true;
      $scope.$digest();
    }, 300)
  }

  function limpar() {
    self.registro = {};
    self.avaliando = false;
  }

  this.voltar = function () {
    self.avaliando = false;
  }

  function validar(x) {
    if (angular.isDefined(x)) {
      return x>=0 && x<=10;
    }

    return true;
  }

  

  this.concluir = function () {
    var reg =self.registro;
    console.log(reg)

    if (!validar(reg.kata) || !validar(reg.kumite) || !validar(reg.kihon)) {
      return Materialize.toast('Notas deve estar entre 0 e 10', 4000);
    }
    pessoaService.enviarAvaliacao(self.registro)
      .then(function () {
        Materialize.toast('Avaliação concluida com sucesso', 5000);
        limpar();
      })
  }
}
