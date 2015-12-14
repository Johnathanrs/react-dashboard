Applications = new Mongo.Collection('applications')

ApplicationInfoSchema = new SimpleSchema({
    "image": {
        type: String
    },
    "Command": {
        type: String
    }
});
ApplicationSchema = new SimpleSchema({
    "app_info": {
        type: ApplicationInfoSchema
    },
    "app_id": {
        type: String
    }
});


Applications.attachSchema(ApplicationSchema);