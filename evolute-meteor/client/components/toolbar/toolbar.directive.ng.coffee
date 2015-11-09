'use strict'

angular.module 'evolute'
.directive 'toolbar', ->
  restrict: 'AE'
  templateUrl: 'client/components/toolbar/toolbar.view.ng.html'
  replace: true
