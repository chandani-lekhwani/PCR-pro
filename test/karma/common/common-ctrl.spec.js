'use strict';

describe('module: common, controller: CommonCtrl', function () {

  // load the controller's module
  beforeEach(module('common'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var CommonCtrl;
  beforeEach(inject(function ($controller) {
    CommonCtrl = $controller('CommonCtrl');
  }));

  it('should do something', function () {
    expect(!!CommonCtrl).toBe(true);
  });

});
