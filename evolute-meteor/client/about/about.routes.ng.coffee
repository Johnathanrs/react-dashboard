'use strict'

angular.module 'evolute'
.config ($stateProvider) ->
  $stateProvider
  .state 'about',
    url: '/about'
    templateUrl: 'client/about/about.view.ng.html'
    controller: 'AboutCtrl'
