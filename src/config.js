app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'src/views/home.html', controller: 'homeCtrl' })
    .state('about', { url: '/about', templateUrl: 'src/views/about.html' })

    .state('users', { abstract: true, templateUrl: 'src/views/users/users.html'})
    .state('users.login', { url: '/login', templateUrl: 'src/views/users/users.login.html', controller: 'usersCtrl'})
    .state('users.register', { url: '/register', templateUrl: 'src/views/users/users.register.html', controller: 'usersCtrl'})
});