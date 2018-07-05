'use strict';

/**
 * Directive that will select the text on the element it is applied to
 * when the expression it binds evaluates to true
 */

angular
  .module('TodoApp.core')
  .directive('selectIf', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch(attrs.selectIf, function(newValue) {
          if (newValue) {
            $timeout(function() {
              element[0].select();
            }, 0, false);
          }
        });
      },
    };
  }]);
