var formatStatsObject = (stats) => {
	if (!stats) return null;
	let memUsage = stats.memory_stats.usage / stats.memory_stats.limit * 100;
	let cpuUsage = stats.cpu_stats.cpu_usage.percpu_usage[0] / stats.cpu_stats.cpu_usage.total_usage * 100;

	return {
		memory: Math.round(memUsage),
		cpu: Math.round(cpuUsage),
		time: moment(stats.read).format('HH:mm:ss')
	};
}

Meteor.methods({
	getMemoryAndCpuUsagePercentage: (LXCId) => {
		let stats = ContainerStats.findOne({
			LXC_Id: LXCId
		});
		return formatStatsObject(stats);
	},
	getMemoryAndCpuUsagePercentages: (LXCId) => {
		let results = [];
		let statsList = ContainerStats.find({
			LXC_Id: LXCId
		}).fetch();

		statsList.forEach((stats) => {
			results.push(formatStatsObject(stats));
		});
		return results;

	}
});
