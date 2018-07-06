'use strict';

/**
 * Directive that will blur the element it is applied to
 * when the expression it binds evaluates to true
 */

angular
  .module('TodoApp.core')
  .directive('blurIf', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch(attrs.blurIf, function(newValue) {
          if (newValue) {
            $timeout(function() {
              element[0].blur();
            }, 0, false);
          }
        });
      },
    };
  }]);
