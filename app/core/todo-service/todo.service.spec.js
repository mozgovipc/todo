'use strict';

describe('TodoApp todos service', function() {
  var todoService;

  beforeEach(module('TodoApp.core'));

  beforeEach(function() {
    var windowMock = {
      localStorage: {
        setItem: function() {},
        getItem: function() {
          return JSON.stringify([{
            text: 'TODO 1',
            done: true,
          }, {
            text: 'TODO 2',
            done: false,
          }]);
        },
      },
    };
  
    module(function($provide) {
      $provide.value('$window', windowMock);
    });

  });
  beforeEach(inject(function(_todoService_) {
    todoService = _todoService_;
  }));

  it('should check the todos count', function() {
    var todos = todoService.getTodos();
    expect(todos.length).toBe(2);
  });

  it('should add todos', function() {
    var todos = todoService.getTodos();

    todoService.addTodo('my todo 1');
    
    expect(todos.length).toBe(3);

    expect(todos[2].text).toBe('my todo 1');
  });

  it('should remove todos', function() {
    var todos = todoService.getTodos();

    todoService.removeTodo(todos[1]);
    
    expect(todos.length).toBe(1);
  });
});
