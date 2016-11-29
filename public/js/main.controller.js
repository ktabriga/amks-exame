angular.module('app')
  .controller('MainCtrl', MainCtrl)


function MainCtrl() {
  $(".button-collapse").sideNav({
    //closeOnClick: true
  });
}
