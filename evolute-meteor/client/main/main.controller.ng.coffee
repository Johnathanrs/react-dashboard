'use strict'

angular.module 'evolute'
.controller 'MainCtrl', ($scope, $meteor) ->
  $scope.page = 1
  $scope.perPage = 20
  $scope.sort = name_sort : 1
  $scope.orderProperty = '1'
  $scope.data = {};		
  
  $scope.containers = $scope.$meteorCollection Containers
#  $meteor.autorun $scope, () ->
#    $scope.$meteorSubscribe('containers', {
#      limit: parseInt($scope.getReactively('perPage'))
#      skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage'))
#      sort: $scope.getReactively('sort')
#    }, $scope.getReactively('search')).then () ->
#      $scope.containersCount = $scope.$meteorObject Counts, 'numberOfContainers', false
#
#  $meteor.session 'containersCounter'
#  .bind $scope, 'page'
#    
#  $scope.save = () ->
#    if $scope.form.$valid
#      $scope.containers.save $scope.newContainer
#      $scope.newContainer = undefined
#      
#  $scope.remove = (container) ->
#    $scope.containers.remove container
#    
#  $scope.pageChanged = (newPage) ->
#    $scope.page = newPage
#    
#  $scope.$watch 'orderProperty', () ->
#    if $scope.orderProperty
#      $scope.sort = name_sort: parseInt($scope.orderProperty)
