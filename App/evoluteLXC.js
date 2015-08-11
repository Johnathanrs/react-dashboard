var mongoose = require('mongoose');
var config = require("./config");

var db = mongoose.connection;

db.on('error', console.error);
//db.once('open', function() {
    db.once('open', function(callback) {

    // Create your schemas and models here.

    var info_schema = new mongoose.Schema({
        //{ "_id" : ObjectId("55c36899b50c4c3e181a2ec6"), "host" : "ubuntut01-12nmjobh.cloudapp.net", "docker_containerId" : "74215bcaac295b4a91afce2a9e570f648402203d43d3127b32fb36931044ab75", "Names" : [ "/sad_stallman" ], "Image" : "ubuntu:14.04", "Command" : "/bin/bash", "Created" : 1437764225, "Ports" : [ ], "Labels" : {  }, "Status" : "Up 8 days" }
        _id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LXC_ID' }],
        host: { type: String }
        , Names: { type : Array , "assigned_name" : [] }
        , Image: { type: String }
        , Command: { type: String }
        , Created: { type: Number }
        , Ports: { type : Array , "port_numbers" : [] }
        , Labels: { Labels: Object }
        , Status: { type: String }
    });


    var stats_schema = new mongoose.Schema({
    //{ "_id" : ObjectId("55c36fb2b50c4c3e181a2eca"), "host" : "ubuntut01-12nmjobh.cloudapp.net", "docker_containerId" : "3b99f5cb3852c0c8dc84f2ff6e8ef620afb54e324df282b34a0012d921954843", "read" : "2015-08-06T14:30:41.2952813Z", "network" : { "rx_bytes" : 648, "rx_packets" : 8, "rx_errors" : 0, "rx_dropped" : 0, "tx_bytes" : 738, "tx_packets" : 9, "tx_errors" : 0, "tx_dropped" : 0 }, "precpu_stats" : { "cpu_usage" : { "total_usage" : 0, "percpu_usage" : null, "usage_in_kernelmode" : 0, "usage_in_usermode" : 0 }, "system_cpu_usage" : 0, "throttling_data" : { "periods" : 0, "throttled_periods" : 0, "throttled_time" : 0 } }, "cpu_stats" : { "cpu_usage" : { "total_usage" : 15965345, "percpu_usage" : [ 15965345 ], "usage_in_kernelmode" : 0, "usage_in_usermode" : 0 }, "system_cpu_usage" : NumberLong("761616110000000"), "throttling_data" : { "periods" : 0, "throttled_periods" : 0, "throttled_time" : 0 } }, "memory_stats" : { "max_usage" : 839680, "stats" : { "pgpgin" : 649, "rss" : 491520, "rss_huge" : 0, "total_mapped_file" : 0, "total_pgpgin" : 649, "writeback" : 0, "inactive_file" : 0, "total_active_anon" : 524288, "total_cache" : 135168, "total_inactive_anon" : 32768, "total_inactive_file" : 0, "total_unevictable" : 0, "active_anon" : 524288, "mapped_file" : 0, "total_pgmajfault" : 1, "pgfault" : 1272, "pgmajfault" : 1, "total_active_file" : 69632, "inactive_anon" : 32768, "pgpgout" : 496, "unevictable" : 0, "cache" : 135168, "total_rss" : 491520, "total_writeback" : 0, "active_file" : 69632, "hierarchical_memory_limit" : 18446744073709552000, "total_pgfault" : 1272, "total_pgpgout" : 496, "total_rss_huge" : 0 }, "failcnt" : 0, "limit" : NumberLong("3609759744"), "usage" : 626688 }, "blkio_stats" : { "io_merged_recursive" : [ ], "io_time_recursive" : [ ], "sectors_recursive" : [ ], "io_service_bytes_recursive" : [ { "op" : "Read", "value" : 65536, "major" : 8, "minor" : 0 }, { "value" : 0, "major" : 8, "minor" : 0, "op" : "Write" }, { "minor" : 0, "op" : "Sync", "value" : 0, "major" : 8 }, { "major" : 8, "minor" : 0, "op" : "Async", "value" : 65536 }, { "major" : 8, "minor" : 0, "op" : "Total", "value" : 65536 } ], "io_serviced_recursive" : [ { "major" : 8, "minor" : 0, "op" : "Read", "value" : 10 }, { "op" : "Write", "value" : 0, "major" : 8, "minor" : 0 }, { "major" : 8, "minor" : 0, "op" : "Sync", "value" : 0 }, { "major" : 8, "minor" : 0, "op" : "Async", "value" : 10 }, { "major" : 8, "minor" : 0, "op" : "Total", "value" : 10 } ], "io_queue_recursive" : [ ], "io_service_time_recursive" : [ ], "io_wait_time_recursive" : [ ] } }
            _id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LXC_ID' }]
        //, var1: String
        //, var2: Number
        //, var3: Boolean
    });
    var lxc_info = mongoose.model('container_info', info_schema);
        var lxc_stats = mongoose.model('container_stats', stats_schema);

        lxc_info.find(function(err, container) {
        if (err) return console.error(err);
        //console.dir(lxc_info);
        console.log(container);
        console.log('find function ran');
        console.dir(container);
    });
        lxc_stats.find(function(err, container) {
            if (err) return console.error(err);
            //console.dir(lxc_info);
            console.log(container);
            console.log('find function ran');
            console.dir(container);
        });
        //}).limit("1");

        //Container.find({ host: /ubuntut01-12nmjobh.cloudapp.net/ }, callback);
        //Container.find({ Command: /\/bin\/bash/ }, callback);
        //
        //Container.find();

        //lxc_info.find({}, callback);
        lxc_stats.find({}, callback);
});

//mongoose.connect(config.mongoUri);
mongoose.connect('mongodb://104.236.153.225:27017/docker');


//var app = express();

//define validation fucntion and callback



//module.exports = {
//    Container: Container
//};

//exports.findContainer = function(lxc,next) {
//    Container.findOne({host: host.toLowerCase()}, function (err, lxc) {
//        next(err, lxc);
//    });
//}


//module.exports = app;