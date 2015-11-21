angular.module('evolute').controller('HomeCtrl', ($scope, $meteor) => {


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

	$scope.$meteorSubscribe('activeContainers').then(function (subscriptionHandle) {

		$scope.containers = $meteor.collection(Containers, false);

		$scope.containers.forEach((container, index) => {
			$scope.$meteorSubscribe('containerStats').then(function () {
				$meteor.call('getMemoryAndCpuUsagePercentage', container.lxcId).then((data) => {
					data.forEach((stat) => {
						var data = $scope.chart.data[index] = [];
						data.push(stat.memory);
						data.push(100 - stat.memory);
						data.push(stat.cpu);
						data.push(100 - stat.cpu);
					});
				});
			});
		});
	});
});
