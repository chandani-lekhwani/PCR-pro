'use strict';
angular.module('common', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('common', {
      url: '/common',
      //template: '<ion-view view-title="common"></ion-view>',
      templateUrl: 'common/templates/common.html',
      controller: 'CommonCtrl as CMctrl'
    });
});
