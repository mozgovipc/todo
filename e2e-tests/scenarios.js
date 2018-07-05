'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('todo app', function() {

  describe('todo list', function() {

    beforeEach(function() {
      browser.get('index.html');
    });


    it('should render todo count', function() {
      expect(element(by.css('todo-list p.todo-count')).getText()).
        toMatch(/TODO count: 2/);
    });

  });

});
