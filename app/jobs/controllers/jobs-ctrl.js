'use strict';
angular.module('jobs')
.controller('JobsCtrl', function ( $scope, $state) {

  $scope.showJobs = function () {
    $state.go('jobs');
  };

});
