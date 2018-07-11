'use strict';
angular.module('quests')
.controller('QuestsCtrl', function ($scope, $state) {

  $scope.showQuests = function () {
    $state.go('quests');
  };

});
