'user strict';

angular
  .module('TodoApp.todoList')
  .component('todoAdd', {
    bindings: {
      onAdd: '&',
    },
    template: '<input type="text" ng-keydown="$ctrl.onKeyDown($event)" ng-model="$ctrl.text" autofocus />',
    controller: [function() {
      var ctrl = this;
      
      ctrl.text = '';

      ctrl.onKeyDown = function(event) {
        if (event.keyCode == 13) {
          if (ctrl.text.length > 0) {
            ctrl.onAdd({text: ctrl.text});
            ctrl.text = '';
          }
        }
      };
    }],
  });
