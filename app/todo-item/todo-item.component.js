'user strict';

angular
  .module('TodoApp.todoItem')
  .component('todoItem', {
    bindings: {
      todo: '<',
      onDoneToggle: '&',
      onTextChange: '&',
    },
    templateUrl: 'todo-item/todo-item.html',
    controller: [function() {
      var ctrl = this;
      ctrl.done = ctrl.todo.done;
    }],
  });
