'use strict';
angular.module('splash', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('splash', {
      url: '/splash',
      template: '<ion-view view-title="splash"></ion-view>',
      // templateUrl: 'splash/templates/<someTemplate>.html',
      // controller: 'SomeCtrl as ctrl'
    });
});
