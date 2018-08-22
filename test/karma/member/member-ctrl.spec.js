'use strict';

describe('module: member, controller: MemberCtrl', function () {

  // load the controller's module
  beforeEach(module('member'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var MemberCtrl;
  beforeEach(inject(function ($controller) {
    MemberCtrl = $controller('MemberCtrl');
  }));

  it('should do something', function () {
    expect(!!MemberCtrl).toBe(true);
  });

});
