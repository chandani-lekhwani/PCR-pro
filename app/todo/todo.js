'use strict';
angular.module('todo', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('todo', {
      url: '/todo',
      //template: '<ion-view view-title="todo"></ion-view>',
      templateUrl: 'todo/templates/todo.html',
      controller: 'TodoCtrl as TDctrl'
    });
});
