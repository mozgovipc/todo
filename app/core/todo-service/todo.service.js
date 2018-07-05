'use strict';

var STORAGE_KEY = 'TodoApp.todos';

angular
  .module('TodoApp.core')
  .factory('todoService', ['$window', function($window){
    var todos = [];

    var saveTodos = function() {
      $window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    };

    var loadTodos = function() {
      var todosStr = $window.localStorage.getItem(STORAGE_KEY);
      if (todosStr == null) {
        saveTodos();
      } else {
        todos = JSON.parse(todosStr);
      }
    };

    loadTodos();

    return {
      getTodos: function() {
        return todos;
      },

      addTodo: function(text) {
        todos.push({
          text,
          done: false,
        });
        saveTodos();
      },

      removeTodo: function(todo) {
        for (var i = 0; i < todos.length; i++) {
          if (todos[i] == todo) {
            todos.splice(i, 1);
            break;
          }
        }
        saveTodos();
      },

      setTodoDone: function(todo, done) {
        for (var i = 0; i < todos.length; i++) {
          if (todos[i] == todo) {
            todos[i].done = done;
            break;
          }
        }
        saveTodos();
      },

      setTodoText: function(todo, text) {
        for (var i = 0; i < todos.length; i++) {
          if (todos[i] == todo) {
            todos[i].text = text;
            break;
          }
        }
        saveTodos();
      },
    }
  }]);
