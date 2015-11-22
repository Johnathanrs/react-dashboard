Meteor.publish("activeContainers", () => {
	return Containers.find({}, {
		limit: 10
	});
});

Meteor.publish("containerStats", () => {
	return ContainerStats.find({}, {
		limit: 200
	});
});
