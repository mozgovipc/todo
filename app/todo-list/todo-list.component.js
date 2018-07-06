'use strict';

angular
  .module('TodoApp.todoList')
  .component('todoList', {
    templateUrl: 'todo-list/todo-list.html',
    controller: ['todoService',
      function(todoService) {
        var ctrl = this;

        ctrl.fitler = undefined;

        ctrl.todos = todoService.getTodos();

        ctrl.setFilter = function($event, filter) {
          $event.preventDefault();
          ctrl.filter = filter;
        }
        
        ctrl.onDoneToggle = function(todo, done) {
          todoService.setTodoDone(todo, done);
        }
        
        ctrl.onTextChange = function(todo, text) {
          todoService.setTodoText(todo, text);
        }
        
        ctrl.onAddTodo = function(text) {
          todoService.addTodo(text);
        }

        ctrl.onRemoveTodo = function($event, todo) {
          $event.preventDefault();
          todoService.removeTodo(todo);
        }
      }],
  });
