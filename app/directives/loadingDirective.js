app.directive('loadingDirective', function($rootScope) {

  'use strict';
  
  return {
    controller: 'loginController',
    link: function(scope, element) {

      scope.runSpinner = function () {
        element.removeClass('ng-hide');
      };

      element.addClass('ng-hide');

      var unregister = $rootScope.$on('$routeChangeStart', function () {
        element.removeClass('ng-hide');
      });

      scope.$on('$destroy', unregister);
    }
  };
});