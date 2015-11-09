Meteor.startup ->
  if Containers.find().count() == 0
    containers = [
      {
        'name': 'Container A'
        'description': 'Fast just got faster with evolute.'
      }
      {
        'name': 'Container B'
        'description': 'Get it on!'
      }
      {
        'name': 'Container C'
        'description': 'Rapid fast scaling.'
      }
    ]
    i = 0
    while i < containers.length
      Containers.insert
        name: containers[i].name
        description: containers[i].description
      i++
  return