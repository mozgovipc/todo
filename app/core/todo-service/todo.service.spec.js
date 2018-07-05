'use strict';

describe('TodoApp todos service', function() {
  var todoService;
  
  beforeEach(module('TodoApp.view1'));
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

    todoService.removeTodo('TODO 1');
    
    expect(todos.length).toBe(1);
  });
});
