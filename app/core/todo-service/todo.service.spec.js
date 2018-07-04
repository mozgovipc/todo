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
});
