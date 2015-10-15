/*****************************************/
// Angular Block
/*****************************************/
var evoluteApp = angular.module('evoluteApp', ['ngRoute']);
	// need to revisit the code - in-progress
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


		$http.get('/api/containerstats')
			.then(function(response) {

				$scope.ids = response.data;
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
	

/*****************************************/
// jQery Block
/*****************************************/
$(document).ready(function(e) {

	//NAVIGATION: Need to convert to reusable methods - Future    
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
	
	
/*****************************************/
// Highchart Block
/*****************************************/
var isChartReady = false;
//var record;
$(function () {
    $.getJSON('/api/first/10', function (records) {
    	/*for (record in records) {
    		console.log(records[record].memory_stats[0].max_usage);
    	}*/
    	//record = records;
        $('.chartContainer').highcharts({
            chart: {
            	type: 'area',
                zoomType: 'x',
                animation: Highcharts.svg,
                events: {
                    	load: function () {
	                        // updating chart in each second
	                        var series = this.series[0], counter=0;
	                        console.log(this);
	                        setInterval(function () {
	                           //if(isChartReady){
	                        	if(counter < series.data.length-1){
	                        		counter++;
	                        	}else{
	                        		counter = 0;
	                        	}
	                        	    var x = (new Date()).getTime() // Current time;
	                            	series.addPoint([x, series.data[counter].y], true,true,true);
	                           //}
	                        }, 1000);
	                    }
                }
                
            },
            title: {
                text: 'Overall Memory Usage'
            },
            turboThreshold:4000,
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Memory Usage'
                },
                min: 0, 
                max: 100,
                tickInterval: 10,
                labels: {
			        formatter: function() {
			            return this.value + ' %';
			        }
			    }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            exporting: {
                enabled: false
            },
			series: [{
                name: 'Memory Usage',
                data: (function () {
                    var data = [];
                    for (record in records) {
                        data.push({
                        	x: (new Date()).getTime(),
                        	y: Math.round(parseInt(records[record].memory_stats[0].usage || 0)/parseInt(records[record].memory_stats[0].max_usage || 1)*100)
                         })
                    }
                    console.log(data);
                    return data.splice(0,100);
                }())
            }]
        });
    });
});
	

