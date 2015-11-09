input = ($timeout) ->
  directive = 
    restrict: 'E'
    scope:
      'returnClose': '='
      'onReturn': '&'
      'onFocus': '&'
      'onBlur': '&'
    link: link

  link = (scope, element, attrs) ->
    element.bind 'focus', (e) ->
      if scope.onFocus
        $timeout ->
          scope.onFocus()
          return
      return
    element.bind 'blur', (e) ->
      if scope.onBlur
        $timeout ->
          scope.onBlur()
          return
      return
    element.bind 'keydown', (e) ->
      if e.which == 13
        if scope.returnClose
          element[0].blur()
        if scope.onReturn
          $timeout ->
            scope.onReturn()
            return
      return
    return

  directive

angular.module('evolute').directive 'input', input