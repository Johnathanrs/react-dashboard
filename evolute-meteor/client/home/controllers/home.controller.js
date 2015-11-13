angular.module('evolute').controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $meteor) {
	$scope.containers = $meteor.collection(Containers);

	$scope.remove = function (container) {
		$scope.containers.remove(container);
	};

	$scope.chart = {
		data: [],
		labels: ['Memory Usage', 'Memory Idle', 'CPU Idle', 'CPU Usage'],
		colours: ['#0795da', '#613B97', '#613B97', '#134C80']
	};

	$scope.containers.forEach(function (container) {
		let stats = ContainerStats.findOne({
			lxcId: container.lxcId
		});
		let memoryUsagePercentage = Math.round(stats.memoryStats.usage / stats.memoryStats.limit * 100);
		let cpuUsagePercentage = Math.round(stats.preCpuStats.cpuUsage.percpuUsage[0] / stats.preCpuStats.cpuUsage.totalUsage * 100);
		$scope.chart.data.push([memoryUsagePercentage, 100 - memoryUsagePercentage, 100 - cpuUsagePercentage, cpuUsagePercentage]);

	});
}
