app.config(['$translateProvider',
  function ($translateProvider) {

    'use strict';
      
    $translateProvider

      .useStaticFilesLoader({
        prefix: 'lang/locale-',
        suffix: '.json'
      })

      .preferredLanguage('en');
  }
]);