'use strict';

describe('module: feeds, controller: FeedsCtrl', function () {

  // load the controller's module
  beforeEach(module('feeds'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var FeedsCtrl;
  beforeEach(inject(function ($controller) {
    FeedsCtrl = $controller('FeedsCtrl');
  }));

  it('should do something', function () {
    expect(!!FeedsCtrl).toBe(true);
  });

});
