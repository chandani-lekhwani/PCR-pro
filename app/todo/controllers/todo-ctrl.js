'use strict';
angular.module('todo')
.controller('TodoCtrl', function ($scope, $state) {

  $scope.showTodo = function () {
    $state.go('todo');
  };
});
