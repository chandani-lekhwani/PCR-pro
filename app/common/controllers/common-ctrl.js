'use strict';
angular.module('common')
.controller('CommonCtrl', function ($log) {

  $log.log('Hello from your Controller: CommonCtrl in module common:. This is your controller:', this);

});
