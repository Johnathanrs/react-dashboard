angular.module('evolute').controller('HomeCtrl', ($scope, $meteor) => {
	$scope.containers = $meteor.collection(Containers);
	$scope.containerStats = $meteor.collection(ContainerStats);

	$scope.remove = (container) => {
		$scope.containers.remove(container);
	};

	$scope.chart = {
		options: {
			animation: false
		},
		data: [],
		labels: ['Memory Usage', 'Memory Idle', 'CPU Idle', 'CPU Usage'],
		colours: ['#0795da', '#613B97', '#613B97', '#134C80']
	};

	$scope.$watch('containerStats', () => {

		$scope.containers.forEach((container) => {
			let stats = ContainerStats.findOne({
				lxcId: container.lxcId

			}, {
				$sort: {
					read: -1
				}
			});
			if (!stats) $scope.containers.remove(container._id);
			else {
				let memoryUsagePercentage = Math.round(stats.memoryStats.usage / stats.memoryStats.limit * 100);
				let cpuUsagePercentage = Math.round(stats.cpuStats.cpuUsage.perCpuUsage[0] / stats.cpuStats.cpuUsage.totalUsage * 100);

				$scope.chart.data.push([memoryUsagePercentage, 100 - memoryUsagePercentage, 100 - cpuUsagePercentage, cpuUsagePercentage]);
			}
		});
	});
});
