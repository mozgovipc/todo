'use strict';

describe('TodoApp.view1 module', function() {
  var $componentController;

  beforeEach(module('TodoApp.view1'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  describe('view1 component', function(){

    it('should create view1 controller', inject(function() {
      var ctrl = $componentController('view1Component', null, null);
      expect(ctrl).toBeDefined();
    }));

  });
});
