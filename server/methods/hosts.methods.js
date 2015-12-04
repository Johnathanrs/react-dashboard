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
    getHostSummary: (DNSName)=>{
        var containers = Containers.find({DNSName: DNSName}).fetch();
        return {name: DNSName, totalContainers: containers.length, ipAddress: containers[0].IPAddress};       
        
    },
    getHost: (DNSName)=>{
        var containers = Containers.find({DNSName: DNSName}).fetch();
        return {name: DNSName, totalContainers: containers.length, ipAddress: containers[0].IPAddress,status: containers[0].Status, containers: containers};               
    }
})