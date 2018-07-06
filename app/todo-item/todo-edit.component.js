'user strict';

angular
  .module('TodoApp.todoItem')
  .component('todoEdit', {
    bindings: {
      text: '<',
      onChange: '&',
    },
    template: '<input type="text" select-if="$ctrl.editMode" blur-if="!$ctrl.editMode" ng-keydown="$ctrl.onKeyDown($event)" ng-model="$ctrl.textCopy" ng-blur="$ctrl.onBlur()" ng-focus="$ctrl.onFocus()" />',
    controller: ['$scope', function($scope) {
      var ctrl = this;
      ctrl.textCopy = ctrl.text;
      ctrl.editMode = false;

      ctrl.onFocus = function() {
        ctrl.editMode = true;
      };

      ctrl.onBlur = function() {
        ctrl.editMode = false;
        if (ctrl.textCopy != ctrl.text && ctrl.textCopy.length > 0) {
          ctrl.onChange({text: ctrl.textCopy});
        }
      }

      ctrl.onKeyDown = function(event) {
        if (event.keyCode == 27) {
          ctrl.textCopy = ctrl.text;
          ctrl.editMode = false;
        } else if (event.keyCode == 13) {
          ctrl.editMode = false;
        }
      };
    }],
  });
