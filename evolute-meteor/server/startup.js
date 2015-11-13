	Meteor.startup(function () {
		if (Containers.find().count() === 0)
			for (var i = 0; i < 3; i++)
				Containers.insert({
					dnsName: 'evo64.evolute.io',
					lxcId: '6266b256003404aa98bbe1581426f88363c8fd26c852888a32368894955790ca',
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
				});
		if (ContainerStats.find().count() === 0)
			for (var i = 0; i < 10; i++)
				ContainerStats.insert({
					"read": new Date(),
					"network": {
						"rxBytes": 0,
						"rxPackets": 0,
						"rxErrors": 0,
						"rxDropped": 0,
						"txBytes": 0,
						"txPackets": 0,
						"txErrors": 0,
						"txDropped": 0
					},
					"preCpuStats": {
						"cpuUsage": {
							"totalUsage": 9284380412673,
							"percpuUsage": [
									5146095075222,
									4138285337451
								],
							"usageInKernelmode": 3531980000000,
							"usageInUsermode": 2507540000000
						},
						"systemCpuUsage": 12557704070000000,
						"throttlingData": {
							"periods": 0,
							"throttledPeriods": 0,
							"throttledTime": 0
						}
					},
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
						"throttlingData": {
							"periods": 0,
							"throttledPeriods": 0,
							"throttledTime": 0
						}
					},
					"memoryStats": {
						"usage": 1.258e+009 * (1 + Math.random(10)),
						"maxUsage": 1.26553e+009,
						"stats": {
							"activeAnon": 6.98286e+007,
							"activeFiles": 7.2063e+008,
							"cache": 1.18804e+009,
							"hierarchicalMemoryLimit": 9223372036854775807,
							"hierarchicalMemswLimit": 9223372036854775807,
							"inactiveAnon": 0,
							"inactiveFile": 4.67415e+008,
							"mappedFile": 1.22593e+007,
							"pgfault": 1.27428e+009,
							"pgmajfault": 230,
							"pgpgin": 4.48511e+008,
							"pgpgout": 4.48248e+008,
							"rss": 6.98286e+007,
							"rssHuge": 2.09715e+006,
							"swap": 0,
							"totalActiveAnon": 6.98286e+007,
							"totalActiveFiles": 7.2063e+008,
							"totalCache": 1.18804e+009,
							"totalInactiveAnon": 0,
							"totalInactiveFiles": 4.67415e+008,
							"totalMappedFiles": 1.22593e+007,
							"totalPgfault": 1.27428e+009,
							"totalPgmajfault": 230,
							"totalPgpgin": 4.48511e+008,
							"totalPgpgout": 4.48248e+008,
							"totalRss": 6.98286e+007,
							"totalRssHuge": 2.09715e+006,
							"totalSwap": 0,
							"totalUnevictable": 0,
							"unevictable": 0
						},
						"failCount": 0,
						"limit": 3706343424
					},
					"blkIoStats": {
						"ioServiceBytesRecursive": [
							{
								"major": 202,
								"minor": 0,
								"op": "Read",
								"value": 0
							},
							{
								"major": 202,
								"minor": 0,
								"op": "Write",
								"value": 6.47127e+007
							},
							{
								"major": 202,
								"minor": 0,
								"op": "Sync",
								"value": 6.47127e+007
							},
							{
								"major": 202,
								"minor": 0,
								"op": "Async",
								"value": 0
							},
							{
								"major": 202,
								"minor": 0,
								"op": "Total",
								"value": 6.47127e+007
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Read",
								"value": 208896
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Write",
								"value": 1.25747e+006
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Sync",
								"value": 380928
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Async",
								"value": 1.08544e+006
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Total",
								"value": 1.46637e+006
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Read",
								"value": 208896
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Write",
								"value": 1.25747e+006
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Sync",
								"value": 380928
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Async",
								"value": 1.08544e+006
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Total",
								"value": 1.46637e+006
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Read",
								"value": 6.08174e+007
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Write",
								"value": 1.4336e+006
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Sync",
								"value": 425984
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Async",
								"value": 6.1825e+007
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Total",
								"value": 6.2251e+007
							}
						],
						"ioServicedRecursive": [
							{
								"major": 202,
								"minor": 0,
								"op": "Read",
								"value": 0
							},
							{
								"major": 202,
								"minor": 0,
								"op": "Write",
								"value": 613
							},
							{
								"major": 202,
								"minor": 0,
								"op": "Sync",
								"value": 613
							},
							{
								"major": 202,
								"minor": 0,
								"op": "Async",
								"value": 0
							},
							{
								"major": 202,
								"minor": 0,
								"op": "Total",
								"value": 613
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Read",
								"value": 50
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Write",
								"value": 306
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Sync",
								"value": 92
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Async",
								"value": 264
							},
							{
								"major": 7,
								"minor": 0,
								"op": "Total",
								"value": 356
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Read",
								"value": 50
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Write",
								"value": 306
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Sync",
								"value": 92
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Async",
								"value": 264
							},
							{
								"major": 253,
								"minor": 0,
								"op": "Total",
								"value": 356
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Read",
								"value": 3322
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Write",
								"value": 349
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Sync",
								"value": 103
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Async",
								"value": 3568
							},
							{
								"major": 253,
								"minor": 2,
								"op": "Total",
								"value": 3671
							}
						],
						"ioQueueRecursive": [],
						"ioServiceTimeRecursive": [],
						"ioWaitTimeRecursive": [],
						"ioMergedRecursive": [],
						"ioTimeRecursive": [],
						"sectorsRecursive": []
					},
					"hostDns": "evo64.evolute.io",
					"hostIp": "52.88.123.35",
					"lxcId": "6266b256003404aa98bbe1581426f88363c8fd26c852888a32368894955790ca"
				});
	});
