'use strict';

describe('module: todo, controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('todo'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var TodoCtrl;
  beforeEach(inject(function ($controller) {
    TodoCtrl = $controller('TodoCtrl');
  }));

  it('should do something', function () {
    expect(!!TodoCtrl).toBe(true);
  });

});
