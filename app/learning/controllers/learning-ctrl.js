'use strict';
angular.module('learning')
.controller('LearningCtrl', function ($scope, $state) {

  $scope.showLearning = function () {
    $state.go('learning');
  };

});
