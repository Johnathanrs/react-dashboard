// JavaScript Document

$(document).ready(function(e) {
    
	$("nav").mouseenter(function() {
    	$(this).stop().animate({
        	width: "200px"
    	}, 100 );
		$('.header-icon img, .logo-icon img').stop().animate({
			top: '-40px'
			}, 0 );
	});
	
	$(".logo-icon, .header-icon").mouseenter(function() {
    	$("nav").stop().animate({
        	width: "200px"
    	}, 100 );
		$('.header-icon img, .logo-icon img').stop().animate({
			top: '-40px'
			}, 0 );
	});
	
	$("nav").mouseleave(function() {
    	$(this).stop().animate({
        	width: "60px"
    	}, 100 );
		$('.header-icon img, .logo-icon img').stop().animate({
			top: '0'
			}, 0 );
	});
	
	$("nav").click(function() {
    	$(this).stop().animate({
        	width: "60px"
    	}, 100 );
		$('.header-icon img, .logo-icon img').stop().animate({
			top: '0'
			}, 0 );
	});

//end document ready
});

var evoluteApp = angular.module('evoluteApp', ['ngRoute']);
	
	//routes - provide navigation
evoluteApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/dashboard', {
                templateUrl : 'pages/dashboard.html',
                controller  : 'dashController'
            })

            // route for the applications page
            .when('/myApplications', {
                templateUrl : 'pages/myApplications.html',
                controller  : 'appsController'
            })

            // route for the containers page
            .when('/containers', {
                templateUrl : 'pages/container.html',
                controller  : 'containerController',
				controllerAs: 'vm'

            })
			
            // route for the images page
            .when('/images', {
                templateUrl : 'pages/images.html',
                controller  : 'imagesController'
            })
			
            // route for the scheduling page
            .when('/scheduler', {
                templateUrl : 'pages/scheduling.html',
                controller  : 'schedulerController'
            })
			
            // route for the revisions page
            .when('/revisions', {
                templateUrl : 'pages/revisionEditing.html',
                controller  : 'revisionsController'
            })
			
            // route for the config page
            .when('/configuration', {
                templateUrl : 'pages/configuration.html',
                controller  : 'configurationController'
            })
			
			.when('/service', {
                templateUrl : 'pages/service.html',
                controller  : 'serviceController'
            })
			
			.when('/hostRing', {
                templateUrl : 'pages/hostRingName.html',
                controller  : 'hostRingController'
            })
			
			.when('/servicePerformance', {
                templateUrl : 'pages/servicePerformance.html',
                controller  : 'servicePerformanceController'
            });
    });
	
	 // create the controller and inject Angular's $scope
    evoluteApp.controller('dashController', function($scope) {

        // create a message to display in our view
    });
	
	evoluteApp.controller('appsController', function($scope) {

        // create a message to display in our view
    });
	
	evoluteApp.controller('containerController', function($scope, $http) {
      
	  'use strict';
  		//minifcation proof by explicitly including in inject array
		
			// $scope.data = 'the data'; //display this using {{data}} in the view
			//dont need to inject scope with this
			// this.data = 'the data';
			var vm = this;


		$http.get('http://45.55.12.101:4243/containers/json?all=1')
			.then(function(response) {

				vm.containers = response.data;
				//console.log(vm.containers);
			},
			function(reason) {
				console.log(reason);
			})
			.catch(function(err) {
				console.log(err);
			});

	});
//		var responses = [];
//
//		var completed_requests = 0;
//			console.log(vm);
//			//$http.get('http://104.236.162.244:4243/containers/json?all=1')
//		var obj = {evo27:"45.55.30.133", evo40:"45.55.12.101"};
//		//var obj = {evo27:"45.55.30.133"};
//		for (var prop in obj) {
//			console.log("o." + prop + " = " + obj[prop]);
//
//// Output:
//// "o.a = 1"
//// "o.b = 2"
//// "o.c = 3"
////			$http.get('http://45.55.12.101:4243/containers/json?all=1')
//			$http.get("http://" + obj[prop] + ":4243/containers/json?all=1")
//				.then(function (response) {
//					console.log(response.data);
//					responses.push(response.data);
//					completed_requests++;
//					console.log("complete requests are " + completed_requests);
//					console.log("object length is" + obj[prop].length);
//					console.log(obj);
//					if (completed_requests == obj.length -1) {
//						// All download done, process responses array
//						//console.log('body:', responses.join());
//						console.log('success');
//					}
//					console.log('body:', responses.join());
//					//vm.containers = vm.containers + response.data;
//					vm.containers = response.data;
//
//					//console.log(vm.containers);
//					console.log(responses);
//				},
//				function (reason) {
//					console.log(reason);
//				})
//				.catch(function (err) {
//					console.log(err);
//				});

		//}
		//console.log(responses);
		//FAILEDvar names = $http.get("http://45.55.30.133:4243/containers/json?all=1"),
		//	naughty = $http.get("http://45.55.12.101:4243/containers/json?all=1"),
		//	nice = $http.get("http://45.55.12.101:4243/containers/json?all=1");
		//$q.all([names,naughty,nice]).then(function(arrayOfResults) {
		//	console.log(names.data);
		//});
    //});


	evoluteApp.controller('imagesController', function($scope) {

        // create a message to display in our view
    });
	
	evoluteApp.controller('schedulerController', function($scope) {

        // create a message to display in our view
    });
	
	evoluteApp.controller('revisionsController', function($scope) {

        // create a message to display in our view
    });
	
	evoluteApp.controller('configurationController', function($scope) {

        // create a message to display in our view
    });
	
	evoluteApp.controller('serviceController', function($scope) {

        // create a message to display in our view
    });
	
	evoluteApp.controller('hostRingController', function($scope) {

        // create a message to display in our view
    });
	
	evoluteApp.controller('servicePerformanceController', function($scope) {

        // create a message to display in our view
    });
	
    evoluteApp.controller('appFormController', ['$scope', function($scope) {
      $scope.master = {};
	  
	  $scope.conImage = "Container Image"
	  $scope.variable = "Variables"
	  $scope.init = "Init Command"
	  
	  $scope.appName = { id: null };
		$scope.appNames = [
			{ id: 0, name: 'App 1' }, 
			{ id: 1, name: 'App 2' }, 
			{ id: 2, name: 'App 3' }
		];

      $scope.update = function(app) {
        $scope.master = angular.copy(app);
      };

      $scope.reset = function() {
        $scope.app = angular.copy($scope.master);
      };

      $scope.reset();
    }]);
	
