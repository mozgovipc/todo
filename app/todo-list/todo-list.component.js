'use strict';

angular
  .module('TodoApp.todoList')
  .component('todoList', {
    templateUrl: 'todo-list/todo-list.html',
    controller: ['todoService',
      function(todoService) {
        this.todos = todoService.getTodos();
      }],
  });
