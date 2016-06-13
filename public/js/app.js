const app = angular.module('app', ['ui.router', 'ui.select', 'ngSanitize']);


app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/pessoas");

  $stateProvider.state('pessoas', {
    url: '/pessoas',
    templateUrl: '/partials/lista-pessoas',
    controller: 'PessoaListaCtrl as ctrl'
  })
  .state('pessoaEdicao', {
    url: '/pessoa-edicao/:id',
    templateUrl: '/partials/edicao-pessoas',
    controller: 'PessoaEdicaoCtrl as ctrl'
  })
  .state('exames', {
    url: '/exames',
    templateUrl: '/partials/lista-avaliacoes',
    controller: 'AvaliacaoListaCtrl as ctrl'
  })
  .state('avaliacao', {
    url: '/avaliacao',
    templateUrl: '/partials/avaliacao',
    controller: 'AvaliacaoCtrl as ctrl'
  })
})


