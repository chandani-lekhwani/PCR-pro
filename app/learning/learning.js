'use strict';
angular.module('learning', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('learning', {
      url: '/learning',
      //template: '<ion-view view-title="learning"></ion-view>',
      templateUrl: 'learning/templates/learning.html',
      controller: 'LearningCtrl as LNctrl'
    });
});
