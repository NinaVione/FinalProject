app.controller('logoutController', [ '$scope', 'dataService',
  function ($scope, dataService) {

  	'use strict';
  	
    $scope.signOut = function () {
      dataService.removeStorageData('user');
    };   
  }
]);