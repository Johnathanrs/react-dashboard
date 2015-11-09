'use strict'

angular.module 'evolute'
.config ($stateProvider) ->
  $stateProvider
  .state 'main',
    url: '/'
    templateUrl: 'client/main/main.view.ng.html'
    controller: 'MainCtrl'
