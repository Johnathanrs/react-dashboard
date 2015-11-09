'use strict'

Meteor.publish 'containers', () ->  
  Containers.find {}, {limit: 20}