'use strict';
angular.module('home')
.controller('HomeCtrl', function ($scope,$state) {

  $scope.showHome = function () {
    $state.go('home');
  };


});
