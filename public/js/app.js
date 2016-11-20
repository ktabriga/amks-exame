const app = angular.module('app', ['ui.router', 'ui.select', 'ngSanitize']);


app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/pessoas");

  $stateProvider.state('pessoas', {
    url: '/pessoas',
    views: {
      content: {
        templateUrl: '/partials/lista-pessoas',
        controller: 'PessoaListaCtrl as ctrl'
      },
      title: {
        template: 'Pessoas'
      }
    }
    // templateUrl: '/partials/lista-pessoas',
    // controller: 'PessoaListaCtrl as ctrl'
  })
  .state('pessoaEdicao', {
    url: '/pessoa-edicao/:id',
    views: {
      content: {
        templateUrl: '/partials/edicao-pessoas',
        controller: 'PessoaEdicaoCtrl as ctrl'
      },
      title: {
        template: 'Pessoa'
      }
    }
  })
  .state('exames', {
    url: '/exames',
    views: {
      content: {
        templateUrl: '/partials/lista-avaliacoes',
        controller: 'AvaliacaoListaCtrl as ctrl'
      },
      title: {
        template: 'Notas'
      }
    }
  })
  .state('avaliacao', {
    url: '/avaliacao',
    views: {
      content: {
        templateUrl: '/partials/avaliacao',
        controller: 'AvaliacaoCtrl as ctrl'
      },
      title: {
        template: "Avaliação"
      }
    }
  })
})
