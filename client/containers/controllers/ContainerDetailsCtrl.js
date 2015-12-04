angular.module("evolute").controller("ContainerDetailsCtrl", ($scope, $stateParams, $meteor) => {
	$scope.chart = {
		labels: [],
		data: [[], []],
		series: ["Memory Usage", "CPU Usage"],
		options: {
			animation: false,
			//		showScale: false,
			pointDot: false,
			datasetStrokeWidth: 0.5
		}
	};
	$scope.$meteorSubscribe('getMemoryAndCpuUsagePercentages').then(() => {
		$scope.chart.data[0] = [];
		$scope.chart.data[1] = [];
		$scope.chart.labels = [];
		var stats = $scope.$meteorCollection(() => {
			$scope.chart.data[0].push(stat.memory);
			$scope.chart.data[1].push(stat.cpu);
			$scope.chart.labels.push(stat.time);
		}, false);
		stats.forEach((stat) => {
			console.log(stat);

		});
	});

});
