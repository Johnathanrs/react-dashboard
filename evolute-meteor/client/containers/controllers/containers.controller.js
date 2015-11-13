angular.module("evolute").controller("ContainerDetailsCtrl", function ($scope, $stateParams, $meteor) {
	$scope.container = $meteor.object(Containers, $stateParams.containerId);
	$scope.containerStats = $meteor.collection(ContainerStats);

	$scope.lineChartSeries = ["Memory Usage", "CPU Usage"];
	$scope.$watch('containerStats', function () {
		$scope.lineChartLabels = [];

		$scope.lineChartData = [[], []];
		$scope.containerStats.forEach(function (stats) {
			var time = moment(stats.read);
			$scope.lineChartLabels.push(time.format('HH:mm'));
			var memUsage = stats.memoryStats.usage / stats.memoryStats.limit * 100;
			var cpuUsage = stats.cpuStats.cpuUsage.perCpuUsage[0] / stats.cpuStats.cpuUsage.totalUsage * 100;

			$scope.lineChartData[0].push(Math.round(memUsage));
			$scope.lineChartData[1].push(Math.round(cpuUsage));
		});
	});
});
