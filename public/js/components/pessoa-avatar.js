(function () {
  function pessoaAvatar() {
    return {
      templateUrl: '/js/components/pessoa-avatar.tpl.html',
      scope: {
        pessoa: '='
      }
    }
  }

  angular.module('app')
    .directive('pessoaAvatar', pessoaAvatar)
})()
