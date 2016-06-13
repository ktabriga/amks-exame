angular.module('app')
  .service('pessoaService', PessoaService);

function PessoaService($http, $q) {
  return {
    listar: function () {
      return $http.get('/pessoas')
        .then(function (res) {
          return res.data;
        });
    },

    notas: function () {
      return $http.get('/avaliacoes')
        .then(function (res) {
          return res.data;
        });
    },

    salvar: function (pessoa) {
      if (pessoa._id) {
        return $http.put(`/pessoas/${pessoa._id}`, pessoa);
      } 

      return $http.post('/pessoas', pessoa);
    },

    buscar: function (id) {
      return $http.get(`/pessoas/${id}`)
        .then(function (res) {
          const pessoa = res.data;
          if (pessoa.nascimento) {
            pessoa.nascimento = new Date(pessoa.nascimento);
          }
          return pessoa;
        })
    },

    enviarAvaliacao: function(registro) {
      return $http.post('/avaliacoes', registro);
    }
  }
}
