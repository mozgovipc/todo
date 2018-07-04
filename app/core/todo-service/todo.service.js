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
      }
    }
  });
