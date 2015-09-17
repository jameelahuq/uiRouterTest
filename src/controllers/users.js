app.controller('usersCtrl', function($scope, $state){
  $scope.currentState = $state.current.name.toUpperCase();

});
