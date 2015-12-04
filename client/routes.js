 angular.module('evolute')
     .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

 	$locationProvider.html5Mode(true);

 	$stateProvider
 		.state('containerList', {
 			url: '/containers',
 			templateUrl: 'client/containers/views/container-list.html',
 			controller: 'ContainerListCtrl'
 		})
 		.state('containerDetails', {
 			url: '/containers/:containerId',
 			templateUrl: 'client/containers/views/container-details.html',
 			controller: 'ContainerDetailsCtrl'
 		});

 	$urlRouterProvider.otherwise("/containers");
 });
