var express = require('express');
var app = express();
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

var mongoose = require('mongoose');
mongoose.connect('mongodb://54.201.183.33:27017/docker');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("connected to db");
});
var info_schema = new mongoose.Schema({
    // _id: { type: mongoose.Schema.Types.ObjectId, ref: 'LXCId' },
    LXCId: {type:String},
    DNSName: {type:String},
    IPAddress: {type: String},
    ReadTime: {type: Date}
    , Names: { type : Array , "assigned_name" : [] }
    , Image: { type: String }
    , Command: { type: String }
    , Created: { type: Number }
    , Ports: { type : Array , "port_numbers" : [] }
    , Labels: { Labels: Object }
    , Status: { type: String }
});
var stats_schema = new mongoose.Schema({
        // _id: { type: mongoose.Schema.Types.ObjectId },
        read: {type:Date},
        network: {type:Object},
        precpu_stats: [{
            cpu_usage: [{
                total_usage:{type:String},
                percpu_usage:[{type:String}],
                usage_in_kernelmode: {type:String},
                usage_in_usermode: {type:String},
                system_cpu_usage: {type:String},
                throttling_data: [{
                    periods: {type:Number},
                    throttled_periods: {type:Number},
                    throttled_time: {type:Date},
                }]
           }],
        }],
        cpu_stats: [{
            cpu_usage: [{
                total_usage:{type:String},
                percpu_usage:[{type:String}],
                usage_in_kernelmode: {type:String},
                usage_in_usermode: {type:String},
                system_cpu_usage: {type:String},
                throttling_data: [{
                    periods: {type:Number},
                    throttled_periods: {type:Number},
                    throttled_time: {type:Date},
                }]
           }],
            
        }],
        memory_stats: [{
            usage: {type:Number},
            max_usage: {type:Number},
            stats: [{
                active_anon: Number,
                active_file: Number,
                cache: Number,
                hierarchical_memory_limit: {type:String},
                hierarchical_memsw_limit: {type:String},
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
            limit: {type: String}
            }],
            blkio_stats : [{
                io_service_bytes_recursive : [
                        {
                                major : Number,
                                minor : Number,
                                op : String,
                                value : Number
                        }
                ],
                io_serviced_recursive : [
                        {
                                major : Number,
                                minor : Number,
                                op : String,
                                value : Number
                        }
                ],
                io_queue_recursive : { type : Array },
                io_service_time_recursive : { type : Array },
                io_wait_time_recursive : { type : Array },
                io_merged_recursive : { type : Array },
                io_time_recursive : { type : Array },
                sectors_recursive : { type : Array }
        }],
        Host_DNS : { type : String },
        Host_IP : { type : String },
        LXC_Id : { type : String }
});

var containerInfos = mongoose.model('container_infos', info_schema);
var containerStats = mongoose.model('container_stats', stats_schema);

app.get('/api/containerstats', function (req, res) {
    containerStats.find(function(err, data){
        if (err) return handleError(err);
        res.json(data);
    });
});

app.get('/api/all', function (req, res) {
    containerStats.find(function(err, data){
        if (err) return handleError(err);
        res.json(data);
    });
});

app.get('/api/lxcId/:lxcId', function (req, res) {
     if (req.params.lxcId) {
        containerStats.find({ LXC_Id: req.params.lxcId }, function(err, data){
            if (err) return handleError(err);
            res.json(data);
        });
    }
});

app.get('/api/id/:id', function (req, res) {
     if (req.params.id) {
        containerStats.find({ _Id: req.params.id }, function(err, data){
            if (err) return handleError(err);
            res.json(data);
        });
    }
});

app.get('/api/first/:number', function (req, res) {
     if (req.params.number) {
        containerStats.find(function(err, data){
            if (err) return handleError(err);
            res.json(data);
        }).limit(req.params.number);
    }
});

app.get('/api/last/:number', function (req, res) {
     if (req.params.number) {
        containerStats.find(function(err, data){
            if (err) return handleError(err);
            res.json(data);
        }).sort('-date').limit(req.params.number);
    }
});

app.get('/api/value/:attr', function (req, res) {
       value = JSON.stringify(req.params.attr);
       if (req.params.attr) {
        containerStats.find(value,function(err, data){
            if (err) return handleError(err);
            res.json(data);
        });
    }
});

app.get('/api/containerinfos', function (req, res) {
    containerInfos.find(function(err, data){
        if (err) return handleError(err);
        res.json(data);
    });
});


var server = app.listen(3000);

function handleError(err){
    console.log(err);
}

console.log('added schema - serverJS');
