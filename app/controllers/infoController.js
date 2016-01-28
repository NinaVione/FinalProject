app.controller('infoController', ['$scope', 'dataService',
  function ($scope, dataService) {

    'use strict';

    var currentUser = dataService.getStorageData().user;
    var possibleInfo = dataService.getStorageDataByField(currentUser.username);

    if (possibleInfo != undefined && possibleInfo.username == currentUser.username) {
      dataService.setStorageData('user', possibleInfo);
    }
  }
]);