'use strict';

describe('module: learning, controller: LearningCtrl', function () {

  // load the controller's module
  beforeEach(module('learning'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var LearningCtrl;
  beforeEach(inject(function ($controller) {
    LearningCtrl = $controller('LearningCtrl');
  }));

  it('should do something', function () {
    expect(!!LearningCtrl).toBe(true);
  });

});
