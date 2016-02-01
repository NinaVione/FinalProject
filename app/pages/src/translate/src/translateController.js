app.controller('translateController', [ '$scope', '$translate',
  function ($scope, $translate) {

    'use strict';

    $scope.changeLang =function (lang) {
      switch (lang) {
        case 'EN': 
          $translate.use('en');
          break;
        case 'RU': 
          $translate.use('ru');
          break;
      }
    };
  }
]);