'use strict';

describe('module: jobs, controller: JobsCtrl', function () {

  // load the controller's module
  beforeEach(module('jobs'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var JobsCtrl;
  beforeEach(inject(function ($controller) {
    JobsCtrl = $controller('JobsCtrl');
  }));

  it('should do something', function () {
    expect(!!JobsCtrl).toBe(true);
  });

});
