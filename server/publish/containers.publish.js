Meteor.publish("activeContainers", function () {
	return Containers.find({});
});

Meteor.publish("containerStats", function () {
	return ContainerStats.find({});
});
