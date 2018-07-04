'use strict';

angular
  .module('TodoApp.view1')
  .component('view1Component', {
    templateUrl: 'view1/view1.html',
    controller: ['todoService',
      function(todoService) {
        this.todos = todoService.getTodos();
      }],
  });
