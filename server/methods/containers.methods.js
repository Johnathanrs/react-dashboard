Meteor.methods({
	getMemoryAndCpuUsagePercentage: (lxcId) => {
		let result = [];
		let containerStats = ContainerStats.find({
			lxcId: lxcId
		}, {
			sort: {
				read: 1
			},
			limit: 20
		}).fetch();
		containerStats.forEach((stats) => {
			let memUsage = stats.memoryStats.usage / stats.memoryStats.limit * 100;
			let cpuUsage = stats.cpuStats.cpuUsage.perCpuUsage[0] / stats.cpuStats.cpuUsage.totalUsage * 100;

			result.push({
				memory: Math.round(memUsage),
				cpu: Math.round(cpuUsage),
				time: moment(stats.read).format('HH:mm:ss')
			});
		});
		return result;
	}
});
