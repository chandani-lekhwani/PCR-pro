'use strict';
angular.module('chat', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('chat', {
      url: '/chat',
      //template: '<ion-view view-title="chat"></ion-view>',
      templateUrl: 'chat/templates/chat.html',
      controller: 'ChatCtrl as CHctrl'
    });
});
