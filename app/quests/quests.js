'use strict';
angular.module('quests', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('quests', {
      url: '/quests',
      //template: '<ion-view view-title="quests"></ion-view>',
      templateUrl: 'quests/templates/quests.html',
      controller: 'QuestsCtrl as QSctrl'
    });
});
