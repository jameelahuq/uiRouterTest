/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./module */ 1);
	
	__webpack_require__(/*! ./controllers/home */ 3);
	
	__webpack_require__(/*! ./controllers/users */ 4);
	
	__webpack_require__(/*! ./models/userFactory */ 5);
	
	__webpack_require__(/*! ./config */ 2);

/***/ },
/* 1 */
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	window.app = angular.module('uiroutertest', ['ui.router']);

/***/ },
/* 2 */
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ function(module, exports) {

	'use strict';
	
	app.config(function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/');
	  $stateProvider.state('home', { url: '/', templateUrl: 'src/views/home.html', controller: 'homeCtrl' }).state('about', { url: '/about', templateUrl: 'src/views/about.html' }).state('users', { abstract: true, templateUrl: 'src/views/users/users.html' }).state('users.login', { url: '/login', templateUrl: 'src/views/users/users.login.html', controller: 'usersCtrl' }).state('users.register', { url: '/register', templateUrl: 'src/views/users/users.register.html', controller: 'usersCtrl' });
	});

/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./src/controllers/home.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('homeCtrl', function ($scope, $state) {
	  console.log('home loaded');
	
	  $scope.aboutClicked = function () {
	
	    console.log('current state:', $state.current.name);
	    // $state.go('about');
	  };
	});

/***/ },
/* 4 */
/*!**********************************!*\
  !*** ./src/controllers/users.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	app.controller('usersCtrl', function ($scope, $state) {
	  $scope.currentState = $state.current.name.toUpperCase();
	});

/***/ },
/* 5 */
/*!***********************************!*\
  !*** ./src/models/userFactory.js ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';
	
	app.factory('User', function () {
	  var User = function User() {};
	
	  User.login = function (user) {
	    console.log('user login!', user);
	  };
	  User.register = function (user) {
	    console.log('user registered!', user);
	  };
	
	  return User;
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map