'use strict';
angular.module('member', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('member', {
      url: '/member',
      //template: '<ion-view view-title="member"></ion-view>',
      templateUrl: 'member/templates/member.html',
      controller: 'MemberCtrl as MBctrl'
    });
});
