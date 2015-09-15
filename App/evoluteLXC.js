var mongoose = require('mongoose');
mongoose.connect('mongodb://54.201.183.33:27017/docker');
var info_schema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'LXCId' },
    LXCId: {type:String},
    DNSName: {type:String},
    IPAddress: {type: String},
    ReadTime: {type: Date},
    , Names: { type : Array , "assigned_name" : [] }
    , Image: { type: String }
    , Command: { type: String }
    , Created: { type: Number }
    , Ports: { type : Array , "port_numbers" : [] }
    , Labels: { Labels: Object }
    , Status: { type: String }
});
var stats_schema = new mongoose.Schema({
        _id: { type: mongoose.Schema.Types.ObjectId },
        read: {type:Date},
        network: {type:Object},
        precpu_stats: [{
            cpu_usage: [{
                total_usage:{type:Javascript},
                percpu_usage:[{type:Javascript}],
                usage_in_kernelmode: {type:Javascript},
                usage_in_usermode: {type:Javascript},
                system_cpu_usage: {type:Javascript},
                throttling_data: [{
                    periods: {type:Integer},
                    throttled_periods: {type:Integer},
                    throttled_time: {type:Timestamp},
                }]
           }],
            
        }],
        cpu_stats: [{
            cpu_usage: [{
                total_usage:{type:Javascript},
                percpu_usage:[{type:Javascript}],
                usage_in_kernelmode: {type:Javascript},
                usage_in_usermode: {type:Javascript},
                system_cpu_usage: {type:Javascript},
                throttling_data: [{
                    periods: {type:Integer},
                    throttled_periods: {type:Integer},
                    throttled_time: {type:Timestamp},
                }]
           }],
            
        }],
        memory_stats: [{
            usage: {type:Number},
            max_usage: {type:Number},
            stats: [{
                active_anon: Number,
                active_file: Number.
                cache: Number,
                hierarchical_memory_limit: {type:Javascript},
                hierarchical_memsw_limit: {type:Javascript},
                inactive_anon: Number,
                inactive_file: Number,
                mapped_file: Number,
                pgfault: Number,
                pgmajfault: 1339,
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
            limit: {type: Javascript}
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
        },
        Host_DNS : { type : String },
        Host_IP : { type : String },
        LXC_Id : { type : String }
        }]
});
