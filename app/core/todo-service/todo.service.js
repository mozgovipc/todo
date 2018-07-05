'use strict';

angular
  .module('TodoApp.core')
  .factory('todoService', function(){
    var todos = [{
      text: 'TODO 1',
      done: true,
    }, {
      text: 'TODO 2',
      done: false,
    }];

    return {
      getTodos: function() {
        return todos;
      },

      addTodo: function(text) {
        todos.push({
          text,
          done: false,
        });
      },

      removeTodo: function(todo) {
        for (var i = 0; i < todos.length; i++) {
          if (todos[i] == todo) {
            todos.splice(i, 1);
            return;
          }
        }
      },

      setTodoDone: function(todo, done) {
        for (var i = 0; i < todos.length; i++) {
          if (todos[i] == todo) {
            todos[i].done = done;
            return;
          }
        }
      },

      setTodoText: function(todo, text) {
        for (var i = 0; i < todos.length; i++) {
          if (todos[i] == todo) {
            todos[i].text = text;
            return;
          }
        }
      },
    }
  });
