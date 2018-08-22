'use strict';
angular.module('feeds', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('feeds', {
      url: '/feeds',
      //template: '<ion-view view-title="feeds"></ion-view>',
      templateUrl: 'feeds/templates/feeds.html',
      controller: 'FeedsCtrl as FDctrl'
    });
});
