'use strict';
angular.module('pcrLearning', [
  // load your modules here
  'home',  // starting with the main module
  'common',
  'jobs',
  'learning',
  'quests',
  'splash'
])

.controller('commonCtrl', function ($scope, $state) {

  $scope.showHome = function () {
    $state.go('home');
  };

  $scope.showQuests = function () {
    $state.go('quests ');
  };

  $scope.showLearning = function () {
    $state.go('learning');
  };

  $scope.showJobs = function () {
    $state.go('jobs');
  };

  $scope.init = function () {

  };
  $scope.init();
});

