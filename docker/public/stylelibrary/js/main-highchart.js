/*****************************************/
// Angular Block
/*****************************************/

var evoluteApp = angular.module('evoluteApp', ['ngRoute', 'ngResource']);

// evoluteApp.config(function($routeProvider) {
//         $routeProvider

//             // route for the home page
//             .when('/dashboard', {
//                 templateUrl : 'pages/dashboard.html',
//                 controller  : 'dashController'
//             })

//             // route for the applications page
//             .when('/myApplications', {
//                 templateUrl : 'pages/myApplications.html',
//                 controller  : 'appsController'
//             })

//             // route for the containers page
//             .when('/containers', {
//                 templateUrl : 'pages/container.html',
//                 controller  : 'containerController',
// 				controllerAs: 'vm'

//             })
			
//             // route for the images page
//             .when('/images', {
//                 templateUrl : 'pages/images.html',
//                 controller  : 'imagesController'
//             })
			
//             // route for the scheduling page
//             .when('/scheduler', {
//                 templateUrl : 'pages/scheduling.html',
//                 controller  : 'schedulerController'
//             })
			
//             // route for the revisions page
//             .when('/revisions', {
//                 templateUrl : 'pages/revisionEditing.html',
//                 controller  : 'revisionsController'
//             })
			
//             // route for the config page
//             .when('/configuration', {
//                 templateUrl : 'pages/configuration.html',
//                 controller  : 'configurationController'
//             })
			
// 			.when('/service', {
//                 templateUrl : 'pages/service.html',
//                 controller  : 'serviceController'
//             })
			
// 			.when('/hostRing', {
//                 templateUrl : 'pages/hostRingName.html',
//                 controller  : 'hostRingController'
//             })
			
// 			.when('/servicePerformance', {
//                 templateUrl : 'pages/servicePerformance.html',
//                 controller  : 'servicePerformanceController'
//             })
//             .otherwise({ redirectTo: '/' })
//     });

evoluteApp.controller('containerController', ['$scope', '$http', function($scope, $http) {
	$scope.reststatus = false;
	$http.get('/api/containerstats').
  	then(function(response) {
    	$scope.stats = angular.fromJson(response.data);
    	$scope.reststatus = true;
	}, function(response) {
	    $scope.stats = response;
	    $scope.reststatus = true;
	});
}]);

/*****************************************/
// jQery Block
/*****************************************/

$(function () {
    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

        $('.chartContainer').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'CPU0 Utilization over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
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

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]
        });
    });
});