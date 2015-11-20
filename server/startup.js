	Meteor.startup(() => {

		let mockStat = (i) => {
			return {
				"read": moment().add(i * 1, 'seconds').toDate(),
				//				"network": {
				//					"rxBytes": 0,
				//					"rxPackets": 0,
				//					"rxErrors": 0,
				//					"rxDropped": 0,
				//					"txBytes": 0,
				//					"txPackets": 0,
				//					"txErrors": 0,
				//					"txDropped": 0
				//				},
				//				"preCpuStats": {
				//					"cpuUsage": {
				//						"totalUsage": 9284380412673,
				//						"percpuUsage": [
				//									5146095075222,
				//									4138285337451
				//								],
				//						"usageInKernelmode": 3531980000000,
				//						"usageInUsermode": 2507540000000
				//					},
				//					"systemCpuUsage": 12557704070000000,
				//					"throttlingData": {
				//						"periods": 0,
				//						"throttledPeriods": 0,
				//						"throttledTime": 0
				//					}
				//				},
				"cpuStats": {
					"cpuUsage": {
						"totalUsage": 9284381233086 * (1 + Math.random(10)),
						"perCpuUsage": [
									5146095517108,
									4138285715978
								],
						"usageInKernelmode": 3531980000000,
						"usageInUsermode": 2507540000000
					},
					"systemCpuUsage": 12557706060000000,
					//					"throttlingData": {
					//						"periods": 0,
					//						"throttledPeriods": 0,
					//						"throttledTime": 0
					//					}
				},
				"memoryStats": {
					"usage": 1.258e+009 * (1 + Math.random(10)),
					"maxUsage": 1.26553e+009,
					//					"stats": {
					//						"activeAnon": 6.98286e+007,
					//						"activeFiles": 7.2063e+008,
					//						"cache": 1.18804e+009,
					//						"hierarchicalMemoryLimit": 9223372036854775807,
					//						"hierarchicalMemswLimit": 9223372036854775807,
					//						"inactiveAnon": 0,
					//						"inactiveFile": 4.67415e+008,
					//						"mappedFile": 1.22593e+007,
					//						"pgfault": 1.27428e+009,
					//						"pgmajfault": 230,
					//						"pgpgin": 4.48511e+008,
					//						"pgpgout": 4.48248e+008,
					//						"rss": 6.98286e+007,
					//						"rssHuge": 2.09715e+006,
					//						"swap": 0,
					//						"totalActiveAnon": 6.98286e+007,
					//						"totalActiveFiles": 7.2063e+008,
					//						"totalCache": 1.18804e+009,
					//						"totalInactiveAnon": 0,
					//						"totalInactiveFiles": 4.67415e+008,
					//						"totalMappedFiles": 1.22593e+007,
					//						"totalPgfault": 1.27428e+009,
					//						"totalPgmajfault": 230,
					//						"totalPgpgin": 4.48511e+008,
					//						"totalPgpgout": 4.48248e+008,
					//						"totalRss": 6.98286e+007,
					//						"totalRssHuge": 2.09715e+006,
					//						"totalSwap": 0,
					//						"totalUnevictable": 0,
					//						"unevictable": 0
					//					},
					//					"failCount": 0,
					"limit": 3706343424
				},
				//				"blkIoStats": {
				//					"ioServiceBytesRecursive": [
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Read",
				//							"value": 0
				//							},
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Write",
				//							"value": 6.47127e+007
				//							},
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Sync",
				//							"value": 6.47127e+007
				//							},
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Async",
				//							"value": 0
				//							},
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Total",
				//							"value": 6.47127e+007
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Read",
				//							"value": 208896
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Write",
				//							"value": 1.25747e+006
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Sync",
				//							"value": 380928
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Async",
				//							"value": 1.08544e+006
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Total",
				//							"value": 1.46637e+006
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Read",
				//							"value": 208896
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Write",
				//							"value": 1.25747e+006
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Sync",
				//							"value": 380928
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Async",
				//							"value": 1.08544e+006
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Total",
				//							"value": 1.46637e+006
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Read",
				//							"value": 6.08174e+007
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Write",
				//							"value": 1.4336e+006
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Sync",
				//							"value": 425984
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Async",
				//							"value": 6.1825e+007
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Total",
				//							"value": 6.2251e+007
				//							}
				//						],
				//					"ioServicedRecursive": [
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Read",
				//							"value": 0
				//							},
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Write",
				//							"value": 613
				//							},
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Sync",
				//							"value": 613
				//							},
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Async",
				//							"value": 0
				//							},
				//						{
				//							"major": 202,
				//							"minor": 0,
				//							"op": "Total",
				//							"value": 613
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Read",
				//							"value": 50
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Write",
				//							"value": 306
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Sync",
				//							"value": 92
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Async",
				//							"value": 264
				//							},
				//						{
				//							"major": 7,
				//							"minor": 0,
				//							"op": "Total",
				//							"value": 356
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Read",
				//							"value": 50
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Write",
				//							"value": 306
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Sync",
				//							"value": 92
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Async",
				//							"value": 264
				//							},
				//						{
				//							"major": 253,
				//							"minor": 0,
				//							"op": "Total",
				//							"value": 356
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Read",
				//							"value": 3322
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Write",
				//							"value": 349
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Sync",
				//							"value": 103
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Async",
				//							"value": 3568
				//							},
				//						{
				//							"major": 253,
				//							"minor": 2,
				//							"op": "Total",
				//							"value": 3671
				//							}
				//						],
				//					"ioQueueRecursive": [],
				//					"ioServiceTimeRecursive": [],
				//					"ioWaitTimeRecursive": [],
				//					"ioMergedRecursive": [],
				//					"ioTimeRecursive": [],
				//					"sectorsRecursive": []
				//				},
				"hostDns": "evo64.evolute.io",
				"hostIp": "52.88.123.35",
				"lxcId": mockLxcId()
			};
		};

		let mockLxcId = (i) => {
			let arr = [
				'256003404aa98bbe158a32368894955790ca81426f88363c8fd26c852886266b',
				'3404aa88a32368894955790ca98bbe1581426f88363c8fd26c85286266b25600',
				'36889496266b256003404aa98bbe1581426f88363c8fd26c8528894955790ca2',
				'63c8fd26266b256003404aa98bbe1581426f8836c852888a3255790ca88a323d',
				'600346266b256003404aa9581426f88363c8fd26c852888a32368894955790ca',
				'ca8bbeca8bbe5949557901581426f888894955790ca363c8fd26c852888a3236',
				'404aa98bbe16266b256003fd26c852888a32368894955790ca581426f88363c8',
				'8fd26c852888a32368894955790ca56003404aa98bbe156266b281426f88363c',
				'790ca3404aa98bbe1581426266b256006f88363c8fd26c852888a32368894955',
				'94955790ca6266b256003404aa98bbe1581426f88363c8fd26c852888a323688',
				'04aa98bbe15816266b2560034426f88363c8894955790ca8fd26c852888a3236',
				'8a32368894955790cb6266b256003404aa98bbe1581426f88363c8fd26c85288',
				'04aa98bbe15816560034426f88363c8894955790ca8fd26c852888a323034426',
				'8a323688790cb6266b256003404aa98bbe1581426f88363c8fd26c8528b6266b',
				'852888a32368894955790cc6266b256003404aa98bbe1581426f8836790cc626'
			];
			if (i)
				return arr[i];
			return arr[Math.floor(Math.random(arr.length) * arr.length)];
		};

		let mockContainer = (i) => {
			return {
				dnsName: 'evo64.evolute.io',
				lxcId: mockLxcId(i),
				image: 'calico/node:v0.4.9',
				command: '/sbin/my_init',
				ipAddress: '192.168.1.' + i,
				status: 'Up 10 weeks',
				labels: {},
				names: ['/calico-node'],
				ports: [80],
				copies: i,
				readTime: new Date(),
				createdAt: new Date()
			};
		};
		var stats = ContainerStats.find().fetch();
		stats.forEach((stat) => {
			ContainerStats.remove(stat._id);
		});

		if (Containers.find().count() === 0)
			for (var i = 0; i < 3; i++)
				Containers.insert(mockContainer(i));
		if (ContainerStats.find().count() === 0)
			for (var i = 0; i < 500; i++)
				ContainerStats.insert(mockStat(i));

		var insertNewStat = () => {
			ContainerStats.insert(mockStat(0));
			let stat = ContainerStats.findOne();
			ContainerStats.remove(stat._id);
			Meteor.setTimeout(insertNewStat, 1000);
		}
		insertNewStat();

	});
