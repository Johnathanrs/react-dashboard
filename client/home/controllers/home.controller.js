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

	$scope.$meteorSubscribe('activeContainers').then((subscriptionHandle) => {

		$scope.containers = $meteor.collection(Containers, false);

		$scope.$meteorSubscribe('containerStats').then(() => {
			$scope.containers.forEach((container, index) => {
				$meteor.call('getMemoryAndCpuUsagePercentage', container.LXCId).then((stat) => {
					if (!stat) return;
					let data = $scope.chart.data[index] = [];
					data.push(stat.memory);
					data.push(100 - stat.memory);
					data.push(stat.cpu);
					data.push(100 - stat.cpu);
				});
			});
		});
	});
});
