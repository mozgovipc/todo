'use strict';

angular
  .module('TodoApp.todoList')
  .component('todoList', {
    templateUrl: 'todo-list/todo-list.html',
    controller: ['todoService',
      function(todoService) {
        var ctrl = this;

        ctrl.todos = todoService.getTodos();
        
        this.onDoneToggle = function(todo, done) {
          todoService.setTodoDone(todo, done);
        }
        
        this.onTextChange = function(todo, text) {
          todoService.setTodoText(todo, text);
        }
        
        this.onAddTodo = function(text) {
          todoService.addTodo(text);
        }
      }],
  });
