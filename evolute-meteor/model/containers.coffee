@Containers = new Mongo.Collection('containers')

#Containers.allow
#  insert: (userId, container) ->	
#    container.createdAt = new Date()
#    container.name_sort = container.name.toLowerCase()
#    true
#  update: (userId, container, fields, modifier) ->
#    container.updatedAt = new Date()
#    container.name_sort = container.name.toLowerCase()
#    true
#  remove: (userId, container) ->
#    true