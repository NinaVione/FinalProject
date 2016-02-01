app.controller('translateController', [ '$scope', '$translate',
  function ($scope, $translate) {

    'use strict';

    $scope.switchLanguage =function (lang) {
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