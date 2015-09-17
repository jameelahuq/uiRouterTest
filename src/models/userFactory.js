app.factory('User', function(){
  var User = function(){};

  User.login = function(user){
    console.log('user login!', user)
  };
  User.register = function(user){
    console.log('user registered!', user)
  };

  return User;
});