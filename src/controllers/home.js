app.controller('homeCtrl', function($scope, $state){
  console.log('home loaded');

  $scope.aboutClicked = function() {

    console.log('current state:', $state.current.name);
    // $state.go('about');

  };

});