 angular.module('evolute').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

 	$locationProvider.html5Mode(true);

 	$stateProvider
 		.state('home', {
 			url: '/home',
 			templateUrl: 'client/home/views/home.html',
 			controller: 'HomeCtrl'
 		})
 		.state('containerDetails', {
 			url: '/containers/:containerId',
 			templateUrl: 'client/containers/views/container-details.html',
 			controller: 'ContainerDetailsCtrl'
 		});

 	$urlRouterProvider.otherwise("/home");
 });
