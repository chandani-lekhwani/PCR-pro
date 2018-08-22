'use strict';
angular.module('pcrLearning', [
  // load your modules here
  'home',  // starting with the main module
  'common',
  'feeds',
  'member',
  'todo',
  'chat',
  'splash'
])

.controller('commonCtrl', function ($scope, $state) {

  $scope.activeTab = 'home';
  $scope.showHome = function () {
    $state.go('home');
    $scope.activeTab = 'home';
  };

  $scope.showFeeds = function () {
    $state.go('feeds');
    $scope.activeTab = 'feeds';
  };

  $scope.showMember = function () {
    $state.go('member');
    $scope.activeTab = 'member';
  };
  $scope.showTodo = function () {
    $state.go('todo');
    $scope.activeTab = 'todo';
  };


  $scope.showChat = function () {
    $state.go('chat');
    $scope.activeTab = 'chat';
  };

  $scope.init = function () {

  };
  $scope.init();
});

