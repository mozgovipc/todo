'use strict';

angular
  .module('TodoApp.core')
  .factory('todoService', function(){
    var todos = [{
      text: 'TODO 1',
      done: false,
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

      removeTodo: function(text) {
        for (var i = 0; i < todos.length; i++) {
          if (todos[i].text == text) {
            todos.splice(i, 1);
            return;
          }
        }
      },
    }
  });
