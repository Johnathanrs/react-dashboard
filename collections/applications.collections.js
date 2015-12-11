Applications = new Mongo.Collection('applications')

ApplicationSchema = new SimpleSchema({
    "app_info" : {
        type: {
            "image" : {
                type: String 
            },
            "Command" : {
                type: String 
            }
        }
    },
    "app_id" : {
        type: String 
    }
});

Applications.attachSchema(ApplicationSchema);