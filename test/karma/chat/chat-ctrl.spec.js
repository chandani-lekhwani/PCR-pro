'use strict';

describe('module: chat, controller: ChatCtrl', function () {

  // load the controller's module
  beforeEach(module('chat'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ChatCtrl;
  beforeEach(inject(function ($controller) {
    ChatCtrl = $controller('ChatCtrl');
  }));

  it('should do something', function () {
    expect(!!ChatCtrl).toBe(true);
  });

});
