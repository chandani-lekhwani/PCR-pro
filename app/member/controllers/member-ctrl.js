'use strict';
angular.module('member')
.controller('MemberCtrl', function ($scope, $state) {

  $scope.showMember = function () {
    $state.go('member');
  };

});
