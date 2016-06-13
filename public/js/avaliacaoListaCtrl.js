angular.module('app')
  .controller('AvaliacaoListaCtrl', AvaliacaoListaCtrl);

function AvaliacaoListaCtrl(pessoaService) {
 var self = this;

 this.media = function (x,y,z) {
   let qtd =0;
   if (x == 0 || x) {
     qtd += 1;
   } 
   if (y == 0 || y) {
     qtd += 1;
   } 
   if (z == 0 || z) {
     qtd += 1;
   } 

   const resultado = (nvl(x) + nvl(y) + nvl(z)) / qtd;
   return round2(resultado);
 }

 function round2(x) {
   return Math.round(x * 100) / 100;
 }

 function nvl(x) {
   return x || 0;
 }
  pessoaService.notas()
    .then(function (notas) {
      self.notas = notas;
    });
}
