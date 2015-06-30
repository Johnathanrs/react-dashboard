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
                controller  : 'containerController'
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
	
	evoluteApp.controller('containerController', function($scope) {

        // create a message to display in our view
    });
	
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
	