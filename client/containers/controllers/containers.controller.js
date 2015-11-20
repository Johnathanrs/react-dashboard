angular.module("evolute").controller("ContainerDetailsCtrl", ($scope, $stateParams, $meteor) => {
	$scope.container = $meteor.object(Containers, $stateParams.containerId);
	$scope.containerStats = $meteor.collection(ContainerStats, $scope.container.lxcId);


	$scope.chartOptions = {
		animation: false,
		//		showScale: false,
		pointDot: false,
		datasetStrokeWidth: 0.5
	};

	$scope.$watchCollection('containerStats', () => {
		$scope.chartData = [[], []];
		$scope.chartLabels = [];
		$meteor.call('getMemoryAndCpuUsagePercentage', $scope.container.lxcId).then((data) => {
			data.forEach((stat) => {
				$scope.chartData[0].push(stat.memory);
				$scope.chartData[1].push(stat.cpu);
				$scope.chartLabels.push(stat.time);
			});

		});
	});

	$scope.chartSeries = ["Memory Usage", "CPU Usage"];

});
