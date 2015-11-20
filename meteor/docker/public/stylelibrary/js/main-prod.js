/*****************************************/
// Angular Block
/*****************************************/



/*****************************************/
// jQery Block
/*****************************************/
$(function () {
    $.getJSON('/api/containerstats/', function (records) {
        $('.chartContainer').highcharts({
            chart: {
            	type: 'area',
                zoomType: 'x',
                animation: Highcharts.svg,
                events: {
                    	load: function () {
	                        // updating chart in each second
	                        var series = this.series[0], counter=0;
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
            title: {
                text: 'Memory'
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
                    return data;
                }())
            }]
        });
    });
});