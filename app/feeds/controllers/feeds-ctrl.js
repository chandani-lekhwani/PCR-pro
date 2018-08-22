'use strict';
angular.module('feeds')
.controller('FeedsCtrl', function ($scope, $state) {

  $scope.showFeeds = function () {
    $state.go('feeds');
  };

});
