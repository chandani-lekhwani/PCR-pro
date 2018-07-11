'use strict';
angular.module('home', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('home', {
      url: '/home',
     // template: 'home/teamplates/home.html',
      templateUrl: 'home/templates/home.html',
      controller: 'HomeCtrl as HMctrl'
    });
});
