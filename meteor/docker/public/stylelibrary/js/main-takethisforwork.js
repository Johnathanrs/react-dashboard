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
    $.getJSON('http://localhost:3000/api/containerstats/', function (records) {

        $('.chartContainer').highcharts({
            chart: {
            	type: 'area',
                zoomType: 'x',
                animation: Highcharts.svg,
                marginRight: 10,
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                                console.log(series)
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
                
            },
            title: {
                text: 'CPU0 Utilization over time'
            },
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
                    text: 'Overall Utilization'
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
            exporting: {
                enabled: false
            },
			series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [];
					console.log(records);
                    for (record in records) {
                        data.push(parseInt(records[record].memory_stats[0].usage));
                    }
                    return data;
                }())
            }]
        });
    });
});