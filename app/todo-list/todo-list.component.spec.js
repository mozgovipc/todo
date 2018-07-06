'use strict';

describe('TodoApp.todoList module', function() {
  var $componentController;

  beforeEach(module('TodoApp.todoList'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  describe('todoList component', function(){

    it('should create todoList controller', inject(function() {
      var ctrl = $componentController('todoList', null, null);
      expect(ctrl).toBeDefined();
    }));

  });
});
