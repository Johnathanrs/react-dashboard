Containers = new Mongo.Collection('container_infos');
ContainerStats = new Mongo.Collection('container_stats');

ContainerSchema = new SimpleSchema({
	DNSName: {
		type: String,
		label: "DNS name",
		max: 200
	},
	LXCId: {
		type: String,
		label: "LXC ID",
		max: 200
	},
	Image: {
		type: String
	},
	Command: {
		type: String
	},
	status: {
		type: String
	},
	Names: {
		type: [String]
	},
	Labels: {
		type: Object
	},
	Ports: {
		type: [Number]
	},
	IPAddress: {
		type: String,
		regEx: SimpleSchema.RegEx.IP,
		label: "IP address"
	},
	Copies: {
		type: Number,
		label: "Number of copies",
		min: 0
	},
	ReadTime: {
		type: Date,
		optional: true
	},
	Status: {
		type: String
	}
});

ContainerStatsChema = new SimpleSchema({
	"read": {
		type: Date
	},
	"cpu_stats": {
		type: {
			"cpu_usage": {
				"total_usage": Number,
				"percpu_usage": [
                Number
            ]
			},
			"system_cpu_usage": Number
		}
	},
	"memory_stats": {
		type: {
			"usage": Number,
			"max_usage": Number,
			"limit": Number
		}
	},
	"Host_DNS": {
		type: String
	},
	"Host_IP": {
		type: String
	},
	"LXC_Id": {
		type: String
	}
});

Containers.attachSchema(ContainerSchema);
//ContainerStats.attachSchema(ContainerStatsChema);
