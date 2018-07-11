'use strict';

describe('module: quests, controller: QuestsCtrl', function () {

  // load the controller's module
  beforeEach(module('quests'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var QuestsCtrl;
  beforeEach(inject(function ($controller) {
    QuestsCtrl = $controller('QuestsCtrl');
  }));

  it('should do something', function () {
    expect(!!QuestsCtrl).toBe(true);
  });

});
