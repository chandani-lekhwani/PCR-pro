'use strict';
angular.module('jobs', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('jobs', {
      url: '/jobs',
      //template: '<ion-view view-title="jobs"></ion-view>',
      templateUrl: 'jobs/templates/jobs.html',
      controller: 'JobsCtrl as JBctrl'
    });
});
