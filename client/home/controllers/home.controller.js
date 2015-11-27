angular.module('evolute').controller('HomeCtrl', ($scope, $meteor) => {

	$scope.sortBy = 'DNSName';

	$scope.players = [
		{
			name: 'Gene',
			team: 'alpha'
		},
		{
			name: 'George',
			team: 'beta'
		},
		{
			name: 'Steve',
			team: 'gamma'
		},
		{
			name: 'Paula',
			team: 'beta'
		},
		{
			name: 'Scruath',
			team: 'gamma'
		}
];
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

		$scope.containers = $scope.$meteorCollection(Containers, false);
		$scope.containers.forEach((container, index) => {
			$scope.$meteorSubscribe('getMemoryAndCpuUsagePercentage', container.LXCId, 1).then(() => {
				var stats = $scope.$meteorCollection(ContainerStats, false);
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
