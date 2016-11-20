(function () {
  function faixas() {
    return {
      templateUrl: '/js/components/faixas.tpl.html',
      replace: true
    }
  }

  angular.module('app')
    .directive('faixas', faixas)
})()
