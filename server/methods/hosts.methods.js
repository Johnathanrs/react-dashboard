Meteor.methods({
    getHostList: () => {
//        return Containers.aggregate([
//            { $group : { _id : {DNSName: "$DNSName" }, containers: { $push: "$Image" } } }
//        ]);
        
//        return Containers.group(
//            {
//                key: {DNSName: 1, "Image" : 1},
//                cond: {},
//                reduce: function(curr, result){},
//                initial: {}
//             
//            })
        
        
        var containers = Containers.find({}, {limit: 100}).fetch();        
        return _.groupBy(containers, (c)=> c.DNSName);
    },
    getHostSummary: (hostName)=>{
        var containers = Containers.find({DNSName: hostName}).fetch();
        return {name: hostName, totalContainers: containers.length, ipAddress: containers[0].IPAddress, status: containers[0].Status};       
        
    },
    getHost: (DNSName)=>{
        var containers = Containers.find({DNSName: DNShostNameName}).fetch();
        return {name: hostName, totalContainers: containers.length, ipAddress: containers[0].IPAddress, status: containers[0].Status, containers: containers};               
    }
})