app.directive('loadingDirective', function($rootScope) {

  'use strict';
  
  return {
    controller: 'loginController',
    link: function(scope, element) {

      if($rootScope.flag) {
        element.removeClass('ng-hide');
      } 

      if(!$rootScope.flag) {
        element.addClass('ng-hide');
      } 

      var unregister = $rootScope.$on('$routeChangeStart', function () {
        element.removeClass('ng-hide');
      });

      scope.$on('$destroy', unregister);
    }
  };
});