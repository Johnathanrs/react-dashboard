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
	$http.get('/api/first/10').
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

function getMemoryChartData(obj){
    var url = obj.baseAPI + (obj.numberOfRecords || '');
    $.getJSON(url, function (records) {
        $(obj.container).highcharts({
            chart: {
                type: 'area',
                zoomType: 'x',
                animation: Highcharts.svg,
                events: {
                        load: function () {
                            // updating chart in each second
                            var series = this.series[0], counter=0;
                            console.log(this)
                            setInterval(function () {
                                if(counter < series.data.length-1){
                                    counter++;
                                }else{
                                    counter = 0;
                                }
                                    var x = (new Date()).getTime() // Current time;
                                    series.addPoint([x, series.data[counter].y], true,true,true);
                            }, 1000);
                        }
                }
               
            },
            turboThreshold: 4000,
            title: {
                text: obj.title
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
                    text: obj.name
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
                name: obj.name,
                data: (function () {
                    var data = [];
                    //coorO = [{memory:'memory_stats[0].usage'}, {cpu:'cpu_stats.cpu_usage.percpu_usage[0]'}],
                    //coorD = [{memory:'memory_stats[0].usage'}, {cpu:'cpu_stats.cpu_usage.percpu_usage[0]'}]
                    for (record in records) {
                        data.push({
                            x: (new Date()).getTime(),
                            y: Math.round(parseInt(records[record].memory_stats[0].usage || 0)/parseInt(records[record].memory_stats[0].max_usage || 1)*100)
                         })
                    }
                    return data;
                }())
            }]
        });
    });
}
function getCPUChartData(obj){
    var url = obj.baseAPI + (obj.numberOfRecords || '');
    $.getJSON(url, function (records) {
        //console.log(records)
        $(obj.container).highcharts({
            chart: {
                type: 'area',
                zoomType: 'x',
                animation: Highcharts.svg,
                events: {
                        load: function () {
                            // updating chart in each second
                            var series = this.series[0], counter=0;
                            console.log(this)
                            setInterval(function () {
                                if(counter < series.data.length-1){
                                    counter++;
                                }else{
                                    counter = 0;
                                }
                                    var x = (new Date()).getTime() // Current time;
                                    series.addPoint([x, series.data[counter].y], true,true,true);
                            }, 1000);
                        }
                }
               
            },
            turboThreshold: 4000,
            title: {
                text: obj.title
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
                    text: obj.name
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
                name: obj.name,
                data: (function () {
                    var data = [];
                    //coorO = [{memory:'memory_stats[0].usage'}, {cpu:'cpu_stats.cpu_usage.percpu_usage[0]'}],
                    //coorD = [{memory:'memory_stats[0].usage'}, {cpu:'cpu_stats.cpu_usage.percpu_usage[0]'}]
                    for (record in records) {//console.log(records[record].cpu_stats[0].cpu_usage[0].percpu_usage[0]);
                        //console.log(records[record].cpu_stats[0].cpu_usage[0].percpu_usage[0]);
                        data.push({
                            x: (new Date()).getTime(),
                            y: Math.round(parseInt(records[record].cpu_stats[0].cpu_usage[0].percpu_usage[0] || 0)/parseInt(records[record].cpu_stats[0].cpu_usage[0].total_usage || 1)*100)
                         })
                    }
                    return data;
                }())
            }]
        });
    });
}
function getLogChartData(obj){
    var url = obj.baseAPI + (obj.numberOfRecords || '');
    $.getJSON(url, function (records) {
        $('.containerLog').highcharts({
 
        title: {
            text: 'Logarithmic axis demo'
        },
 
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
 
        yAxis: {
            type: 'logarithmic',
            minorTickInterval: 0.1
        },
 
        tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: 'x = {point.x}, y = {point.y}'
        },
 
        series: [{
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
            pointStart: 1
        }]
        });
    });
}
 
function getPieChartData(obj){
 
    var url = obj.baseAPI + (obj.numberOfRecords || '');
    $.getJSON(url, function (records) {
    var colors = Highcharts.getOptions().colors,
        categories = [obj.utilization],
        data = [{
            y: 56.33,
            color: colors[0],
            drilldown: {
                name: 'MSIE versions',
                categories: [obj.utilization, obj.utilization, obj.utilization, obj.utilization, obj.utilization, obj.utilization],
                data: [1.06, 0.5, 17.2, 8.11, 5.33, 24.13],
                color: colors[0]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;
 
 
    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {
 
        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
 
        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }
    // Create the chart
   
            $(obj.container).highcharts({
                chart: {
                    type: obj.type
                },
                title: {
                    text: obj.title,
                    y: 120
                },
                subtitle: {
                    text: obj.subtitle
                },
                yAxis: {
                    title: {
                        text: obj.ytext
                    }
                },
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '50%']
                    }
                },
                tooltip: {
                    valueSuffix: '%'
                },
                series: [{
                    name: obj.sname,
                    data: browserData,
                    size: obj.innerfillsize,
                    dataLabels: {
                        // formatter: function () {
                        //     return this.y > 5 ? this.point.name : null;
                        // },
                        y: 47,
                        x: -4,
                        color: '#000',
                        distance: obj.distance
                    }
                }, {
                    name: obj.tooltiptext,
                    data: versionsData,
                    size: obj.outerfillsize,
                    innerSize: obj.innerSize,
                    dataLabels: {
                        formatter: function () {
                            // display only if larger than 1
                            return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                        }
                    }
                }]
            });
        });
}
$(function () {
    // below function represents to get call to server
    // Momory chart
    getMemoryChartData({
        baseAPI:'/api/first/',
        numberOfRecords:'10', 
        container: '.chartContainer',
        name:'Memory Usage',
        type: 'area',
        title: "Overall Memory Usage"
    });
    // CPU chart
    getCPUChartData({
        baseAPI:'/api/first/',
        numberOfRecords:'10', 
        container: '.chartCPUContainer',
        name:'CPU Usage',
        type: 'area',
        title: "CPU0 Utilization over time"
    });
    getLogChartData({
        baseAPI:'/api/first/',
        numberOfRecords:'10', 
        container: '.chartCPUContainer',
        name:'CPU Usage',
        type: 'area',
        title: "CPU0 Utilization over time"
    });

    getPieChartData({
        baseAPI:'/api/first/',
        numberOfRecords:'10', 
        container: '.containerPie',
        utilization: '51%',
        cpu: '0',
        type:'pie',
        title: 'Main Title',
        subtitle: 'Sub Title',
        ytext: 'Y text',
        x:'auto',
        y:'auto',
        sname:'CPU',
        innerfillsize:'0',
        distance:-50,
        tooltiptext:'CPU usage',
        outerfillsize:'100%',
        innerSize:'60%'
    });
});