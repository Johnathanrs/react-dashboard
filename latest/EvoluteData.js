var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mongoose = require('mongoose');
var request = require('request');


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/evolute');
var info_schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'lxc_id'
    },
    lxc_id: {
        type: String
    },
    dns_name: {
        type: String
    },
    ip_addr: {
        type: String
    },
    ReadTime: {
        type: Date
    },
    Names: {
        type: Array,
        "assigned_name": []
    },
    Image: {
        type: String
    },
    Command: {
        type: String
    },
    Created: {
        type: Number
    },
    Ports: {
        type: Array,
        "port_numbers": []
    },
    Labels: {
        Labels: Object
    },
    Status: {
        type: String
    }
});


var stats_schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    read: {
        type: Date
    },
    network: {
        type: Object
    },
    precpu_stats: [{
        cpu_usage: [{
            total_usage: {
                type: String
            },
            percpu_usage: [{
                type: String
            }],
            usage_in_kernelmode: {
                type: String
            },
            usage_in_usermode: {
                type: String
            },
            system_cpu_usage: {
                type: String
            },
            throttling_data: [{
                periods: {
                    type: Number
                },
                throttled_periods: {
                    type: Number
                },
                throttled_time: {
                    type: Date
                },
                }]
           }],

        }],
    cpu_stats: [{
        cpu_usage: [{
            total_usage: {
                type: String
            },
            percpu_usage: [{
                type: String
            }],
            usage_in_kernelmode: {
                type: String
            },
            usage_in_usermode: {
                type: String
            },
            system_cpu_usage: {
                type: String
            },
            throttling_data: [{
                periods: {
                    type: Number
                },
                throttled_periods: {
                    type: Number
                },
                throttled_time: {
                    type: Date
                },
                }]
           }],

        }],
    memory_stats: [{
        usage: {
            type: Number
        },
        max_usage: {
            type: Number
        },
        stats: [{
            active_anon: Number,
            active_file: Number,
            cache: Number,
            hierarchical_memory_limit: {
                type: String
            },
            hierarchical_memsw_limit: {
                type: String
            },
            inactive_anon: Number,
            inactive_file: Number,
            mapped_file: Number,
            pgfault: Number,
            pgmajfault: Number,
            pgpgin: Number,
            pgpgout: Number,
            rss: Number,
            rss_huge: Number,
            swap: Number,
            total_active_anon: Number,
            total_active_file: Number,
            total_cache: Number,
            total_inactive_anon: Number,
            total_inactive_file: Number,
            total_cache: Number,
            total_inactive_file: Number,
            total_inactive_file: Number,
            total_mapped_file: Number,
            total_pgfault: Number,
            total_pgmajfault: Number,
            total_pgpgin: Number,
            total_pgpgout: Number,
            total_rss: Number,
            total_rss_huge: Number,
            total_swap: 0,
            total_unevictable: Number,
            unevictable: Number
            }],
        failcnt: Number,
        limit: {
            type: String
        }
            }],
    blkio_stats: [{
        io_service_bytes_recursive: [
            {
                major: Number,
                minor: Number,
                op: String,
                value: Number
                        }
                ],
        io_serviced_recursive: [
            {
                major: Number,
                minor: Number,
                op: String,
                value: Number
                        }
                ],
        io_queue_recursive: {
            type: Array
        },
        io_service_time_recursive: {
            type: Array
        },
        io_wait_time_recursive: {
            type: Array
        },
        io_merged_recursive: {
            type: Array
        },
        io_time_recursive: {
            type: Array
        },
        sectors_recursive: {
            type: Array
        }
        }],
    Host_DNS: {
        type: String
    },
    Host_IP: {
        type: String
    },
    LXC_Id: {
        type: String
    }
});


var services_schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    svcName: {
        type: String
    },
    svcStatus: {
        type: String
    },
    svcOwner: {
        type: String
    },
    svcHealth: {
        type: String
    },
    svcUptime: {
        type: String
    },
    //WORKS    svcApplications: {
    //        type: Array,
    //        "application": []
    //    },
    svcApplications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'appInfos'
               }],

});

var apps_schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    appName: {
        type: String
    },
    appStatus: {
        type: String
    },
    appOwner: {
        type: String
    },
    appHealth: {
        type: String
    },
    appUptime: {
        type: String
    }
});

function generate_id() {
    var id = new mongoose.Types.ObjectId();
    console.log("new id generated" + id)
    return id;
}




var containerInfos = mongoose.model('container_infos', info_schema);
var currentContainerInfos = mongoose.model('current_container_infos', info_schema);
var containerStats = mongoose.model('container_stats', stats_schema);
var currentContainerStats = mongoose.model('current_container_stats', stats_schema);
var serviceInfos = mongoose.model('service_infos', services_schema);
var appInfos = mongoose.model('app_infos', apps_schema);



app.get('/api/container_infos', function (req, res) {
    //    WORKS containerInfos.findOne(function (err, data) {
    containerInfos.find(function (err, data) {

            res.json(data);
        })
        //        .sort({'lxc_id': 1, 'date': -1})
        .limit(50);
});

app.get('/api/container_infos/current', function (req, res) {

    currentContainerInfos.find(function (err, data) {

        res.json(data);
    })

});


//FAIL   .group({'_id': "$lxc_id", lastDate: { $last: "$date"} })

app.get('/api/container_infos/test', function (req, res) {
    //    console.log(containerInfos)
    containerInfos.aggregate([
        {
            "$limit": 200
        },
        {
            $sort: {
                'lxc_id': 1,
                'date': -1
            }
        },
        {
            $group: {
                '_id': "$lxc_id",
                lastDate: {
                    $last: "$ReadTime"
                }
            }
        }
        //fail on host third entry{ $group: {'_id': "$lxc_id", 'host': "$dns_name", lastDate: { $last: "$ReadTime"} }}

//        { $populate: {'lxc_id'} }


    ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        //FAIL        containerInfos.populate(result, {path: "lxc_id"}, err);
        res.json(result);
    });

    //                             );
});

//app.get('/api/container_infos_current', function (req, res) {
//
//    containerInfosC.find(function (err, data) {
//        console.log("dumping container infos current information");
//    console.log(data);
//        res.json(data);
//    })
//});



app.get('/api/container_stats', function (req, res) {
    containerStats.findOne(function (err, data) {
        res.json(data);
    });
});

app.get('/api/container_stats/current', function (req, res) {
    console.log(currentContainerStats)
    currentContainerStats.find(function (err, data) {
        console.log("Logging current container stats data")
        console.log(data)
        res.json(data);
    })

});

app.get('/api/container_stats/current/top5/cpu', function (req, res) {
   currentContainerStats.aggregate(
     {$project: {_id: 0, Names: 1, ratio: { $divide: [ "$cpu_stats.cpu_usage.total_usage", "$cpu_stats.system_cpu_usage"] } } },
     { $project: { Names: 1, percent: { $multiply: [ "$ratio", 100] } } },
     { $sort: {percent: -1}},
     { $limit: 5}, function(err, data){
	     res.json(data);

     });

});

app.get('/api/container_stats/test', function (req, res) {
    containerStats.aggregate([
//        { "$limit": 10000 },
        {
            "$project": {
                LXC_Id: 1,
                read: 1
            }
        },
//        { $sort: {'lxc_id': 1, 'date': 1}},
        {
            $group: {
                '_id': "$LXC_Id",
                lastDate: {
                    $last: "$read"
                }
            }
        },
//             {
//   "$lookup":
//     {
//       from: 'container_stats',
//       localField: '_id',
//       foreignField: 'LXC_Id',
//       as: 'current_stats'
//     }
//}
        //fail on host third entry{ $group: {'_id': "$lxc_id", 'host': "$dns_name", lastDate: { $last: "$ReadTime"} }}

//        { $populate: {'lxc_id'} }


    ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        //FAIL        containerInfos.populate(result, {path: "lxc_id"}, err);
        res.json(result);
    });

});


app.get('/api/service_infos/', function (req, res) {
    serviceInfos.find(function (err, data) {
        res.json(data);
    });
});

app.get('/api/app_infos', function (req, res) {
    appInfos.find(function (err, data) {
        res.json(data);
    });
});


app.get('/api/container', function (req, res) {

    request('http://www.google.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //    console.log(body) // Show the HTML for the Google homepage.
            console.log("logging response")
            console.log(response)
                //    res.json(data);
            res.send(body);
        }
    });
});

app.use('/api/container2', function (req, res) {
    console.log("someone hit /api/container2");
    console.log("user sent name: " + req.query.name + " to /api/container2")
    
    console.log("logging request to /api/container2 ")
            console.log(req)
 request({
     method: 'GET',
     url: 'http://felicity.evolute.io',
     qs: {
         name: req.query.name,
         scale: req.query.scale,
         cpu: req.query.cpu,
         mem: req.query.mem,
         cmd: req.query.cmd,
         image: req.query.image
     }
 },function (error, response, body) {
     if (error) {
         console.log("Made it to error")
         res.json(502, {error: "bad_gateway", reason: err.code});
         return;
         }
        if (!error && response.statusCode == 200) {
            //    console.log(body) // Show the HTML for the Google homepage.
//            console.log("logging response")
//            console.log(response)
                //    res.json(data);
            res.send(body);
        } else {
            console.log("something else happened brother")
             console.log(response)
            console.log(body)
             res.send(body);
        }
     
    });

});

app.get('/api/service_infos/apps', function (req, res) {
    //    console.log(containerInfos)
    serviceInfos.aggregate([
        //{ $project : { title : 1 , author : 1 } }
        {
            "$limit": 200
        },
        {
            "$skip": 2
        },
        {
            "$project": {
                svcApplications: 1
            }
        },
        {
            "$unwind": '$svcApplications'
        },
        {
            "$lookup": {
                from: 'app_infos',
                localField: 'svcApplications',
                foreignField: '_id',
                as: 'app_info'
            }
},
        {
            "$group": {
                _id: '$_id',
                apps: {
                    "$push": '$app_info'
                }
                ////                _id: '$appid',
                ////                count: {$sum: 1}
            }
        },
        {
            "$lookup": {
                from: 'service_infos',
                localField: '_id',
                foreignField: '_id',
                as: 'service_info'
            }
},
//        { "$project": 
//         { 
//             apps: 1,
//             service_info: 1,
////             _id: 0
//         }
//        },
//        { $sort: {'lxc_id': 1, 'date': -1}},
//        { $group: {'_id': "$lxc_id", lastDate: { $last: "$ReadTime"} }}




    ], function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);

        res.json(result);
    });

    //                             );
});


app.use('/api/app_infos', function (req, res) {

    console.log("generating id: ")
    var newid = generate_id();
    console.log("logging new id: " + newid)

    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
    console.log("Request body plain")
    console.log(req.body)
    console.log("Parsing received JSON")
    console.log(req.body.appName)


    var newApp = new appInfos({
        _id: newid,
        appName: req.body.appName,
        appStatus: req.body.appStatus,
        appHealth: req.body.appHealth,
        appUptime: req.body.appUptime
    });
    console.log(newApp.appName);
    newApp.save(function (err, newApp) {
        if (err) return console.error(err);
    });

})


var server = app.listen(3000);



//
//var CVX_DataLake = new serviceInfos({
//    _id: id,
//    svcName: 'CVX_DataLake',
//    svcStatus: 'Undeployed',
//    svcOwner: 'Jason Bourne',
//    svcHealth: 'Healthy',
//    svcUptime: 'Not Applicable',
//    svcApplications: [
//        {
//            key: 1,
//            name: "cassandra-seed",
//            status: "Undeployed",
//            health: "Not Applicable",
//            uptime: "Not Applicable"
//        },
//        {
//            key: 2,
//            name: "cassandra-peer",
//            status: "Deployed",
//            health: "Healthy",
//            uptime: "12 hours 2 Min"
//        },
//        {
//            key: 3,
//            name: "hadoop-dn",
//            status: "Undeployed",
//            health: "Not Applicable",
//            uptime: "Not Applicable"
//        },
//        {
//            key: 4,
//            name: "hadoop-nn",
//            status: "Deployed",
//            health: "Healthy",
//            uptime: "12 hours 2 Min"
//        }
//        ]
//});

//TRY NEXT
var newid = generate_id();
var CVX_DataLake3 = new serviceInfos({
    _id: newid,
    svcName: 'CVX_DataLake3',
    svcStatus: 'Undeployed',
    svcOwner: 'Jason Bourne',
    svcHealth: 'Healthy',
    svcUptime: 'Not Applicable',
    svcApplications: [
        {
            _id: "57ab85581eebeadb93454d2a"
        },
        {
            _id: "57ad0305ed85bfb3a1c75779"
        }
        ]
});

console.log(CVX_DataLake3);
//console.log("saving CVX_DataLake3")
//    CVX_DataLake3.save(function (err, newApp) {
//    if (err) return console.error(err);
//});


//NOT WORKING SO WELLserviceInfos.find().populate({
//    path: 'app_infos'
////  , select: 'svcName'
////  , match: { color: 'black' }
//  , options: { sort: { name: 1 }}
//}).exec(function (err, apps) {
//  console.log(apps[0]) // Zoopa
////  FAILconsole.log(apps[0].app_infos._id)
//})

//_id": "57ab85581eebeadb93454d2a"


// Mongoose turns a cursor to an array by default in the callback method
console.log("starting nested query")
var appids = []
serviceInfos.find().limit(50).exec(function (err, results) {
    console.log("inside nested query")
        // Just get array of _id values
    var ids = results.map(function (el) {
        return el._id
    });
    console.log("found the following service ids: " + ids);
    var appids = results.map(function (el) {
            return el.svcApplications
        })
        //    var appids = "57ab85581eebeadb93454d2a";
    console.log("found the following application ids " + appids)
        // Not sure if you really mean both collections have the same primary key
        // I'm presuming two different fields being "id" as opposed to "_id"
    console.log("maintained variable appids: " + appids)
    appids.forEach(function (doc) {
        appInfos.find({
            "_id": {
                "$in": doc
            }
        }, function (err, items) {
            console.log("found the following applications: " + items)
                // matching results are here
        })

    })

})



console.log("Opening up connection to MongoDB")
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});