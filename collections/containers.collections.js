Containers = new Mongo.Collection('container_infos');
ContainerStats = new Mongo.Collection('container_stats');

ContainerSchema = new SimpleSchema({
	dnsName: {
		type: String,
		label: "DNS name",
		max: 200
	},
	lxcId: {
		type: String,
		label: "LXC ID",
		max: 200
	},
	image: {
		type: String
	},
	command: {
		type: String
	},
	status: {
		type: String
	},
	names: {
		type: [String]
	},
	labels: {
		type: Object
	},
	ports: {
		type: [Number]
	},
	ipAddress: {
		type: String,
		regEx: SimpleSchema.RegEx.IP,
		label: "IP address"
	},
	copies: {
		type: Number,
		label: "Number of copies",
		min: 0
	},
	readTime: {
		type: Date,
		optional: true
	},
	createdAt: {
		type: Date
	}
});


//ContainerStatsChema = new SimpleSchema({
//	read: {
//		type: Date
//	},
//	network: {
//		type: Object
//	},
//	preCpuStats: [{
//		cpuUsage: [{
//			totalUsage: {
//				type: String
//			},
//			percpuUsage: [{
//				type: String
//			}],
//			usageInKernelMode: {
//				type: String
//			},
//			usageInUserMode: {
//				type: String
//			},
//			systemCpuUsage: {
//				type: String
//			},
//			throttlingData: [{
//				periods: {
//					type: Number
//				},
//				throttledPeriods: {
//					type: Number
//				},
//				throttledTime: {
//					type: Date
//				},
//                }]
//           }],
//        }],
//	cpuStats: [{
//		cpuUsage: [{
//			totalUsage: {
//				type: String
//			},
//			perCpuUsage: [{
//				type: String
//			}],
//			usageInKernelMode: {
//				type: String
//			},
//			usageInUserMode: {
//				type: String
//			},
//			systemCpuUsage: {
//				type: String
//			},
//			throttlingData: [{
//				periods: {
//					type: Number
//				},
//				throttledPeriods: {
//					type: Number
//				},
//				throttledTime: {
//					type: Date
//				},
//                }]
//           }],
//
//        }],
//	memoryStats: [{
//		usage: {
//			type: Number
//		},
//		maxUsage: {
//			type: Number
//		},
//		stats: [{
//			activeAnon: Number,
//			activeFile: Number,
//			cache: Number,
//			hierarchicalMemoryLimit: {
//				type: String
//			},
//			hierarchicalMemswLimit: {
//				type: String
//			},
//			inactiveAnon: Number,
//			inactiveFile: Number,
//			mappedFile: Number,
//			pgfault: Number,
//			pgmajfault: Number,
//			pgpgin: Number,
//			pgpgout: Number,
//			rss: Number,
//			rss_huge: Number,
//			swap: Number,
//			totalActiveAnon: Number,
//			totalActiveFiles: Number,
//			totalCache: Number,
//			totalInactiveAnon: Number,
//			totalInactiveFiles: Number,
//			totalCache: Number,
//			totalInactiveFiles: Number,
//			totalInactiveFiles: Number,
//			totalMappedFiles: Number,
//			totalPgfault: Number,
//			totalPgmajfault: Number,
//			totalPgpgin: Number,
//			totalPgpgout: Number,
//			totalRss: Number,
//			totalRssHuge: Number,
//			totalSwap: Number,
//			totalUnevictable: Number,
//			unevictable: Number
//            }],
//		failCount: Number,
//		limit: {
//			type: String
//		}
//            }],
//	blkioStats: [{
//		ioServiceBytesRecursive: [
//			{
//				major: Number,
//				minor: Number,
//				op: String,
//				value: Number
//                        }
//                ],
//		io_serviced_recursive: [
//			{
//				major: Number,
//				minor: Number,
//				op: String,
//				value: Number
//                        }
//                ],
//		ioQueueRecursive: {
//			type: Array
//		},
//		ioServiceTimeRecursive: {
//			type: Array
//		},
//		ioWaitTimeRecursive: {
//			type: Array
//		},
//		ioMergedRecursive: {
//			type: Array
//		},
//		io_time_recursive: {
//			type: Array
//		},
//		sectors_recursive: {
//			type: Array
//		}
//        }],
//	hostDns: {
//		type: String
//	},
//	hostIp: {
//		type: String
//	},
//	lxdId: {
//		type: String
//	}
//});

Containers.attachSchema(ContainerSchema);
//ContainerStats.attachSchema(ContainerStatsChema);
