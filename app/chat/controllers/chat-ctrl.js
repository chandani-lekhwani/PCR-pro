'use strict';
angular.module('chat')
.controller('ChatCtrl', function ($scope, $state) {

  $scope.showChat = function () {
    $state.go('chat');
  };
});
